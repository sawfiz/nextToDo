/* eslint-disable no-plusplus */
/* eslint-disable comma-dangle */
import '@mdi/font/css/materialdesignicons.min.css';
import * as global from './globalConstants';
import { updateTasksDisplay } from './dom-updateTasksDisplay';
import createElement from './createElement';
import { hideOverlay, showOverlay } from './utils';

// Add mini menu to the active project
const addProjectMiniMenu = (projects, projectEl, index) => {
  // Only add the mini menu for projects other than Inbox
  if (index > 0) {
    // Make project and project name visually unclickable
    projectEl.classList.add('no-click');
    projectEl.children[0].classList.add('no-click');

    // Create mini menu
    const menuEl = createElement('div', ['project-mini-menu'], {}, '');
    projectEl.appendChild(menuEl);
    // Add a place holder in the front so the buttons are on the right
    menuEl.appendChild(createElement('div', [], {}, ''));

    // The up arrow
    // Do not show for the project just below Inbox
    if (index > 1) {
      menuEl.appendChild(
        createElement(
          'button',
          ['project-mini-menu-button', 'mdi', 'mdi-chevron-up'],
          { 'data-btn': 'up' },
          ''
        )
      );
    } else {
      menuEl.appendChild(createElement('div', [], {}, ''));
    }

    // Show the down arrow
    // Do not show for the project at the botton of the list
    if (index < projects.projects.length - 1) {
      menuEl.appendChild(
        createElement(
          'button',
          ['project-mini-menu-button', 'mdi', 'mdi-chevron-down'],
          { 'data-btn': 'down' },
          ''
        )
      );
    } else {
      menuEl.appendChild(createElement('div', [], {}, ''));
    }

    // The edit button
    menuEl.appendChild(
      createElement(
        'button',
        ['project-mini-menu-button', 'mdi', 'mdi-square-edit-outline'],
        { 'data-btn': 'edit' },
        ''
      )
    );

    // The delete button
    menuEl.appendChild(
      createElement(
        'button',
        ['project-mini-menu-button', 'mdi', 'mdi-trash-can-outline'],
        { 'data-btn': 'remove', style: 'color: red' },
        ''
      )
    );
  }
};

// Redraws the projects list
const updateProjectsDisplay = (projects, activeProject) => {
  // Empty the content of the projects list
  global.projectListEl.innerHTML = '';

  // Go through each project in projects[]
  projects.projects.forEach((project, index) => {
    const projectEl = createElement('div', ['project'], {
      'data-id': index,
    });
    const projectNameEl = createElement(
      'div',
      ['project-name', 'mdi', 'mdi-list-box-outline'],
      {},
      ` ${project.name}`
    );
    projectEl.appendChild(projectNameEl);

    if (index !== 0) {
      projectEl.classList.add('draggable-item');
      projectEl.setAttribute('draggable', true);
      const dotsEl = createElement(
        'div',
        ['dots', 'hide-project-icon'],
        {},
        '⠇'
      );
      const dragHandelEl = createElement(
        'div',
        ['drag-handle', 'mdi', 'mdi-menu', 'hide-project-icon'],
        {},
        ''
      );
      projectEl.appendChild(dotsEl);
      projectEl.appendChild(dragHandelEl);
    }

    // Highlight the active project, and add a mini menu
    if (project === activeProject) {
      projectEl.classList.add('active-project');
      // addProjectMiniMenu(projects, projectEl, index);
    }

    global.projectListEl.appendChild(projectEl);
  });
};

// Add a new project
const addNewProject = (projects) => {
  const inputEl = createElement('input', ['project-title-input'], {});
  global.projectListEl.appendChild(inputEl);

  inputEl.focus();

  return new Promise((resolve, reject) => {
    // Get a name for the new project
    // A new project is only added if the Enter key is pressed and the name is not empty
    // An Enter with empty text or Esc key dismisses the input field with no new project created
    inputEl.addEventListener('keydown', (e) => {
      if (e.keyCode === 13) {
        if (inputEl.value) {
          projects.addProject(inputEl.value);
          resolve();
        } else {
          global.projectListEl.removeChild(inputEl);
          reject();
        }
      }
    });

    // Listen for the Esc key
    inputEl.addEventListener('keydown', (e) => {
      if (e.keyCode === 27) {
        global.projectListEl.removeChild(inputEl);
        reject();
      }
    });
  });
};

// Event listener for Projects List
const projectListClickHandler = (e, projects) => {
  let index;
  let activeProject;
  const parentEl = e.target.parentElement;
  const grandParentEl = parentEl.parentElement;
  index = Number(parentEl.dataset.id);

  return new Promise((resolve, reject) => {
    // Clicked on a project-name
    if (e.target.classList.contains('project-name')) {
      // id is stored as a string, need to convert it to a number to avoid issues
      activeProject = projects.projects[index];
      updateTasksDisplay(activeProject.tasks);
      resolve(index);
    }

    if (e.target.classList.contains('dots')) {
      activeProject = projects.projects[index];
      const largeProjectNameEl = document.querySelector('.large-project-name');
      largeProjectNameEl.innerText = activeProject.name;
      updateTasksDisplay(activeProject.tasks);
      showOverlay();
      addProjectMiniMenu(projects, parentEl, index);
    }

    if (parentEl.classList.contains('project-mini-menu')) {
      // Clicked on mini menu
      // id is stored as a string, need to convert it to a number to avoid issues
      index = Number(grandParentEl.dataset.id);

      switch (e.target.dataset.btn) {
        case 'up':
          projects.swapProject(index, index - 1);
          index--;
          resolve(index);
          break;
        case 'down':
          projects.swapProject(index, index + 1);
          index++;
          resolve(index);
          break;
        case 'edit': {
          // Replace project name with an input
          showOverlay();
          const inputEl = createElement('input', ['project-title-input'], {
            type: 'text',
            value: grandParentEl.children[0].textContent.trim(), // remove leading space
            'data-id': index,
          });
          grandParentEl.replaceChild(inputEl, grandParentEl.children[0]);
          inputEl.focus();

          // Listen for change in the input
          inputEl.addEventListener('change', () => {
            const projectNameEl = createElement(
              'div',
              'project-name',
              { style: 'cursor: pointer', 'data-id': index },
              inputEl.value
            );
            // Rename project in the database
            activeProject = projects.projects[index];
            projects.renameProject(activeProject, inputEl.value);
            // Replace the input with the new project name
            grandParentEl.replaceChild(projectNameEl, inputEl);
            hideOverlay();
            resolve(index);
          });

          // Listen for the Esc key
          inputEl.addEventListener('keydown', (event) => {
            if (event.key === 'Escape') {
              // global.projectListEl.removeChild(inputEl);
              hideOverlay();
              reject();
            }
          });
          break;
        }
        case 'remove':
          projects.removeProject(index);
          index = 0;
          resolve(index);
          break;

        default:
          break;
      }
    }
  });
};

export { addNewProject, updateProjectsDisplay, projectListClickHandler };
