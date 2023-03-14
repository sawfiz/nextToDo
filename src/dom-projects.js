import { updateTasksDisplay } from './dom-tasks';
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
          '^'
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
          'v'
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
        'E'
      )
    );
    menuEl.appendChild(
      createElement(
        'button',
        ['project-mini-menu-button'],
        { 'data-btn': 'remove' },
        'X'
      )
    );
  }
};

const updateProjectsDisplay = (projects, activeProject) => {
  if (!activeProject) {
    activeProject = projects.projects[0];
  }

  const projectListEl = document.querySelector('.project-list');
  projectListEl.innerHTML = '';
  projects.projects.forEach((project, index) => {
    const projectEl = createElement('div', ['project'], {});
    const projectNameEl = createElement(
      'div',
      ['project-name'],
      { style: 'cursor: pointer', 'data-id': index },
      `${project.name}`
    );
    projectEl.appendChild(projectNameEl);
    if (project === activeProject) {
      projectEl.classList.add('active-project');
      addProjectMiniMenu(projects, projectEl, index);
    }
    projectListEl.appendChild(projectEl);
  });
};

const addNewProject = (projects) => {
  const projectListEl = document.querySelector('.project-list');
  const inputEl = createElement('input', ['project-title'], {});
  projectListEl.appendChild(inputEl);
  inputEl.focus();
  
  return new Promise((resolve) => {
    inputEl.addEventListener('change', () => {
      projects.addProject(inputEl.value);
      resolve();
    })
  });
};

// Event listener for Projects List
const projectListlickHandler = (e, projects) => {
  let index;
  let activeProject;
  const parentEl = e.target.parentElement;
  const grandParentEl = parentEl.parentElement;
  if (parentEl.classList.contains('project')) {
    // id is stored as a string, need to convert it to a number to avoid issues
    index = Number(e.target.dataset.id);
    console.log(
      '🚀 ~ file: dom-projects.js:111 ~ projectListlickHandler ~ index:',
      index
    );
    // Use this check to avoid error message when user click on the input box
    // for changing project name
    // Do not use if (index), as the inbox's index is 0,
    // this will cause a bug where inbox is ignored
    if (index !== NaN) {
      activeProject = projects.projects[index];
      updateProjectsDisplay(projects, activeProject);
      updateTasksDisplay(projects, activeProject);
    }
  } else if (parentEl.classList.contains('project-mini-menu')) {
    // id is stored as a string, need to convert it to a number to avoid issues
    index = Number(grandParentEl.children[0].dataset.id);
    switch (e.target.dataset.btn) {
      case 'up':
        projects.swapProject(index, index - 1);
        index--;
        activeProject = projects.projects[index];
        updateProjectsDisplay(projects, activeProject);
        break;
      case 'down':
        projects.swapProject(index, index + 1);
        index++;
        activeProject = projects.projects[index];
        updateProjectsDisplay(projects, activeProject);
        break;
      case 'edit':
        const inputEl = createElement('input', [], {
          type: 'text',
          value: grandParentEl.children[0].textContent,
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
          grandParentEl.removeChild(inputEl);
          grandParentEl.insertBefore(projectNameEl, grandParentEl.firstChild);
          activeProject = projects.projects[index];
          projects.renameProject(activeProject, inputEl.value);
          updateProjectsDisplay(projects, activeProject);
        });
        break;
      case 'remove':
        projects.removeProject(index);
        index = 0;
        activeProject = projects.projects[index];
        updateProjectsDisplay(projects, activeProject);
        break;

      default:
        break;
    }
  }
  return activeProject;
};

export { addNewProject, updateProjectsDisplay, projectListlickHandler };
