import './style.css';
import Task from './task';
import Projects from './projects';
import createElement from './createElement';

const screenController = () => {
  // Create a Projects object with an empty list of projects
  const projects = Projects();
  // Read saved projects data from local storage
  const data = JSON.parse(localStorage.getItem('projects'));
  if (!data) {
    // If no data exists, create an empty Inbox
    projects.addProject('Inbox');
  } else {
    // Otherwise, create a list of projects based on the stored names and tasks
    data.forEach((projectData) => {
      projects.addProject(projectData.name, projectData.tasks);
    });
  }

  let activeProject = projects.projects[0]; // Inbox
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

  // Hightlight Active Project whose tasks is being viewed
  const highlightActiveProject = () => {
    Array.from(projectsListEl.children).forEach((child) => {
      // Remove any highlights
      child.classList.remove('active-project');
      // Remove mini menu if any
      if (child.children.length > 0) {
        const firstChild = child.children[0];
        firstChild.remove();
      }
    });

    // Check if index is valid number
    // Index might be "remove"
    if (!activeProject) activeProject = projects.projects[0];
    // Add highlight
    projectsListEl.children[projects.projects.indexOf(activeProject)].classList.add('active-project');
  };

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
            { 'data-id': 'up' },
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
            { 'data-id': 'down' },
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
          { 'data-id': 'edit' },
          'E'
        )
      );
      menuEl.appendChild(
        createElement(
          'button',
          ['project-mini-menu-button'],
          { 'data-id': 'remove' },
          'X'
        )
      );

      menuEl.addEventListener('click', (e) => {
        switch (e.target.dataset.id) {
          case 'remove':
            const result = confirm('Do you want to proceed?');
            if (result) {
              // user clicked "OK"
              projects.removeProject(index);
              activeProject = projects.projects[0];
              console.log(
                '🚀 ~ file: screenController.js:174 ~ menuEl.addEventListener ~ activeProject.name:',
                activeProject.name
              );
            } else {
              // user clicked "Cancel"
            }
            updateProjectsDisplay();
            updateTasksDisplay(activeProject);
            break;
          case 'up':
            projects.swapUpProject(index);
            activeProject = projects.projects[index - 1];
            updateProjectsDisplay();
            updateTasksDisplay(activeProject);
            break;
          case 'down':
            projects.swapDownProject(index);
            activeProject = projects.projects[index + 1];
            updateProjectsDisplay();
            updateTasksDisplay(activeProject);
            break;

          default:
            break;
        }
      });
    }
  };

  const updateProjectsDisplay = () => {
    if (!activeProject) {
      activeProject = projects.projects[0];
    }

    projectsListEl.innerHTML = '';
    projects.projects.forEach((project, index) => {
      const projectEl = createElement(
        'div',
        [],
        { style: 'cursor: pointer', 'data-id': index },
        `${project.name} ${index}`
      );
      // projectEl.dataset.id = index;
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
      highlightActiveProject();
      updateTasksDisplay(activeProject);
    });
  });

  // Event listener for Projects List
  projectsListEl.addEventListener('click', (e) => {
    const index = e.target.dataset.id;
    activeProject = projects.projects[index];
    highlightActiveProject();
    addProjectMiniMenu(e.target, index);
    updateTasksDisplay(index);
  });

  updateProjectsDisplay();
  highlightActiveProject();
  updateTasksDisplay();
};

export default screenController;
