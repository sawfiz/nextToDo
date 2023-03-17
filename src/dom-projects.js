import * as global from './globalConstants';
import updateTasksDisplay from './updateTasksDisplay';
import createElement from './createElement';

const addProjectMiniMenu = (projects, projectEl, index) => {
  // Add mini menu
  // Do not show mini menu for Inbox
  if (index > 0) {
    projectEl.style.cursor = 'default';
    const menuEl = createElement('div', ['project-mini-menu'], {}, '');
    projectEl.appendChild(menuEl);
    menuEl.appendChild(createElement('div', [], {}, ''));

    // Show the up arrow
    // Do not show for the project just below Inbox
    if (index > 1) {
      menuEl.appendChild(
        createElement(
          'button',
          ['project-mini-menu-button'],
          { 'data-btn': 'up' },
          '🔼'
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
          ['project-mini-menu-button'],
          { 'data-btn': 'down' },
          '🔽'
        )
      );
    } else {
      menuEl.appendChild(createElement('div', [], {}, ''));
    }

    menuEl.appendChild(
      createElement(
        'button',
        ['project-mini-menu-button'],
        { 'data-btn': 'edit' },
        '✍️'
      )
    );
    menuEl.appendChild(
      createElement(
        'button',
        ['project-mini-menu-button'],
        { 'data-btn': 'remove' },
        '❌'
      )
    );
  }
};

const updateProjectsDisplay = (projects, activeProject) => {
  if (!activeProject) {
    activeProject = projects.projects[0];
  }

  global.projectListEl.innerHTML = '';
  projects.projects.forEach((project, index) => {
    const projectEl = createElement('div', ['project'], { 'data-id': index });
    const projectNameEl = createElement(
      'div',
      ['project-name'],
      { style: 'cursor: pointer' },
      `${project.name}`
    );
    projectEl.appendChild(projectNameEl);
    if (project === activeProject) {
      projectEl.classList.add('active-project');
      addProjectMiniMenu(projects, projectEl, index);
    }
    global.projectListEl.appendChild(projectEl);
  });
};

const addNewProject = (projects) => {
  const projectListEl = document.querySelector('.project-list');
  const inputEl = createElement('input', ['project-title'], {});
  projectListEl.appendChild(inputEl);
  inputEl.focus();

  return new Promise((resolve, reject) => {
    inputEl.addEventListener('change', () => {
      projects.addProject(inputEl.value);
      resolve();
    });
    inputEl.addEventListener('keydown', (e) => {
      if (e.keyCode === 27) {
        projectListEl.removeChild(inputEl);
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

  return new Promise((resolve) => {
    // Clicked on a project-name
    if (e.target.classList.contains('project-name')) {
      // id is stored as a string, need to convert it to a number to avoid issues
      index = Number(parentEl.dataset.id);
      activeProject = projects.projects[index];
      updateTasksDisplay(projects, activeProject);
      resolve(index);
    }
    // Clicked on a mini menu
    else if (parentEl.classList.contains('project-mini-menu')) {
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
        case 'edit':
          const inputEl = createElement('input', [], {
            type: 'text',
            value: grandParentEl.children[0].textContent,
            'data-id': index,
          });

          grandParentEl.removeChild(grandParentEl.children[0]);
          grandParentEl.insertBefore(inputEl, grandParentEl.firstChild);
          inputEl.focus();
          inputEl.addEventListener('change', () => {
            const projectNameEl = createElement(
              'div',
              'project-name',
              { style: 'cursor: pointer', 'data-id': index },
              inputEl.value
            );
            activeProject = projects.projects[index];

            projects.renameProject(activeProject, inputEl.value);
            grandParentEl.insertBefore(projectNameEl, grandParentEl.firstChild);
            grandParentEl.removeChild(inputEl);
            resolve(index);
          });
          break;
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
