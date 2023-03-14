import './style.css';
import Task from './task';
import Projects from './projects';
import createElement from './createElement';

const screenController = () => {
  // Create a Projects object with an empty list of projects
  const projects = Projects();
  // Read saved projects data from local storage
  const data = JSON.parse(localStorage.getItem('projects'));
  console.log(
    '🚀 ~ file: screenController.js:11 ~ screenController ~ data:',
    data
  );
  if (!data) {
    // If no data exists, create an empty Inbox
    console.log('Create Inbox');
    projects.addProject('Inbox');
  } else {
    // Otherwise, create a list of projects based on the stored names and tasks
    data.forEach((projectData) => {
      if (projectData) projects.addProject(projectData.name, projectData.tasks);
    });
  }

  let activeProject = projects.projects[0]; // Inbox
  console.log(
    '🚀 ~ file: screenController.js:22 ~ screenController ~ activeProject:',
    activeProject
  );
  const projectsListEl = document.querySelector('.projects-list');

  // Function to update the tasks list part of the UI
  const updateTasksDisplay = () => {
    if (!activeProject) activeProject = projects.projects[0];
    const tasksListEl = document.querySelector('.tasks-list');
    tasksListEl.innerHTML = '';
    activeProject.tasks.forEach((task, index) => {
      const taskEl = createElement('div', ['task'], {}, '');
      const taskStatusEl = createElement('div', [], {}, task.status);
      taskEl.appendChild(taskStatusEl);
      const taskTitleEl = createElement(
        'div',
        [],
        {},
        `${task.title} ${index}`
      );
      taskEl.appendChild(taskTitleEl);
      const taskDescriptionEl = createElement('div', [], {}, task.description);
      taskEl.appendChild(taskDescriptionEl);
      const taskDueDateEl = createElement('div', [], {}, task.dueDate);
      taskEl.appendChild(taskDueDateEl);
      tasksListEl.appendChild(taskEl);
    });
  };

  // Event listener for the add task button
  const addTaskBtn = document.querySelector('.add-task');
  addTaskBtn.addEventListener('click', () => {
    const tasksListEl = document.querySelector('.tasks-list');
    const taskEl = createElement('div', ['new-task'], {}, '');
    const statusEl = createElement('input', [], {}, '');
    const titleEl = createElement('input', ['task-title'], {});
    const descriptionEl = createElement('input', [], {}, '');
    const dueDateEl = createElement('input', [], { type: 'date' }, '');
    const submitBtn = createElement('button', [], {}, 'Submit');
    taskEl.appendChild(statusEl);
    taskEl.appendChild(titleEl);
    taskEl.appendChild(descriptionEl);
    taskEl.appendChild(dueDateEl);
    for (let i = 0; i < 3; i++) {
      taskEl.appendChild(createElement('div', [], {}, ''));
    }
    taskEl.appendChild(submitBtn);
    tasksListEl.appendChild(taskEl);
    titleEl.focus();

    submitBtn.addEventListener('click', () => {
      const task = Task(
        titleEl.value,
        descriptionEl.value,
        dueDateEl.value,
        statusEl.value
      );
      projects.addTaskToProject(task, activeProject);
      updateTasksDisplay();
    });
  });

  const addProjectMiniMenu = (projectEl, index) => {
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

  const updateProjectsDisplay = () => {
    console.log(
      '🚀 ~ file: screenController.js:197 ~ updateProjectsDisplay ~ activeProject.name:',
      activeProject.name
    );
    if (!activeProject) {
      activeProject = projects.projects[0];
    }

    projectsListEl.innerHTML = '';
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
        addProjectMiniMenu(projectEl, index);
      }
      projectsListEl.appendChild(projectEl);
    });
  };

  // Event listener for the add project button
  const addProjectBtn = document.querySelector('.add-project');
  addProjectBtn.addEventListener('click', () => {
    const projectListEl = document.querySelector('.projects-list');
    const projectEl = createElement('input', ['project-title'], {});
    projectListEl.appendChild(projectEl);
    projectEl.focus();

    projectEl.addEventListener('change', () => {
      projects.addProject(projectEl.value);
      activeProject = projects.projects[projects.projects.length - 1];
      updateProjectsDisplay();
      // highlightActiveProject();
      updateTasksDisplay(activeProject);
    });
  });

  // Event listener for Projects List
  projectsListEl.addEventListener('click', (e) => {
    let index;
    console.log(
      '🚀 ~ file: screenController.js:251 ~ projectsListEl.addEventListener ~ e.target:',
      e.target
    );
    const parentEl = e.target.parentElement;
    console.log("🚀 ~ file: screenController.js:200 ~ projectsListEl.addEventListener ~ parentEl:", parentEl)
    const grandParentEl = parentEl.parentElement;
    if (parentEl.classList.contains('project')) {
      // id is stored as a string, need to convert it to a number to avoid issues
      index = Number(e.target.dataset.id);
      console.log("🚀 ~ file: screenController.js:205 ~ projectsListEl.addEventListener ~ index:", index)
      // Use this check to avoid error message when user click on the input box 
      // for changing project name
      // Do not use if (index), as the inbox's index is 0, 
      // this will cause a bug where inbox is ignored
      if (index !== undefined) {
        activeProject = projects.projects[index];
        console.log("🚀 ~ file: screenController.js:210 ~ projectsListEl.addEventListener ~ activeProject:", activeProject)
        updateProjectsDisplay();
        updateTasksDisplay(index);
      }
    } else if (parentEl.classList.contains('project-mini-menu')) {
      // id is stored as a string, need to convert it to a number to avoid issues
      index = Number(grandParentEl.children[0].dataset.id);
      console.log(
        '🚀 ~ file: screenController.js:269 ~ projectsListEl.addEventListener ~ grandParentEl:',
        grandParentEl
      );
      switch (e.target.dataset.btn) {
        case 'up':
          projects.swapProject(index, index - 1);
          index--;
          activeProject = projects.projects[index];
          updateProjectsDisplay();
          break;
        case 'down':
          projects.swapProject(index, index + 1);
          index++;
          activeProject = projects.projects[index];
          updateProjectsDisplay();
          break;
        case 'edit':
          const inputEl = createElement('input', [], {
            type: 'text',
            value: grandParentEl.children[0].textContent,
          });
          console.log(
            '🚀 ~ file: screenController.js:255 ~ projectsListEl.addEventListener ~ grandParentEl.children[0].textContent:',
            grandParentEl.children[0].textContent
          );
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
            console.log(
              '🚀 ~ file: screenController.js:249 ~ inputEl.addEventListener ~ activeProject.name:',
              activeProject.name
            );
            projects.renameProject(activeProject, inputEl.value);
            updateProjectsDisplay();
          });
          break;
        case 'remove':
          projects.removeProject(index);
          index = 0;
          activeProject = projects.projects[index];
          updateProjectsDisplay();
          break;

        default:
          break;
      }
    }
  });

  updateProjectsDisplay();
  updateTasksDisplay();
};

export default screenController;
