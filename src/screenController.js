import * as global from './globalConstants';
import Projects from './projects';
import updateTasksDisplay from './dom-updateTasksDisplay';
import {
  todayClickHandler,
  next7daysClickHandler,
  undatedClickHandler,
  completedClickHandler,
  allTasksClickHandler,
} from './dom-views';
import { addNewTask, taskListClickHandler } from './dom-tasks';
import {
  addNewProject,
  updateProjectsDisplay,
  projectListClickHandler,
} from './dom-projects';

const screenController = () => {
  // Create a Projects object with an empty list of projects
  const projects = Projects();
  // Read saved projects data from local storage
  const data = JSON.parse(localStorage.getItem('projects'));
  if (!data) {
    // If no data exists, create an empty Inbox
    projects.addProject('Inbox');
  } else {
    // Otherwise, rebuild the projects[] by creating a list of project objects
    // based on the stored names and tasks
    data.forEach((projectData) => {
      if (projectData) projects.addProject(projectData.name, projectData.tasks);
    });
  }

  // Make Inbox the activeProject
  let activeProject = projects.projects[0];

  // Default to show Inbox
  let showView = false;
  let list = [];

  // Read the show completed tasks setting from local storage
  let showCompleted = JSON.parse(localStorage.getItem('showCompleted'));
  if (!showCompleted) showCompleted = false;

  // Event listners
  // --- the elements ---
  const addTaskBtn = document.querySelector('.add-task');
  const addProjectBtn = document.querySelector('.add-project');
  const showCompletedCheckbox = document.querySelector('#show-completed');
  showCompletedCheckbox.checked = showCompleted;

  const disableButtons = () => {
    addProjectBtn.disabled = true;
    addTaskBtn.disabled = true;
    showCompletedCheckbox.disabled = true;
  };

  const enableButtons = () => {
    console.log('Enable buttons');
    addProjectBtn.disabled = false;
    addTaskBtn.disabled = false;
    showCompletedCheckbox.disabled = false;
  };

  const updateCurrentView = () => {
    if (showView) {
      list = JSON.parse(localStorage.getItem('list'));
      updateTasksDisplay(projects, list, showView, showView === 'completed');
    } else {
      updateTasksDisplay(projects, activeProject.tasks);
    }
  };

  // The body
  const bodyEl = document.querySelector('body');
  bodyEl.addEventListener('click', (e) => {
    console.log(e.target);
    // Clicking on any element with 'dismiss' will refresh the projects and tasks list
    // This dismisses any open add task, edit task and add project forms
    // Also enables add task, add project and show completed setting buttons/checkbox
    if (e.target.classList.contains('dismiss')) {
      // Dismiss any task being edited
      updateCurrentView();
      enableButtons();
    }
  });

  // The add task button
  // ^ When adding a new task, the form is dismissed by
  // 1. click on the Submit button
  // 2. click on any element with the class 'dismiss'
  // 3. click on a project in the projects list
  addTaskBtn.addEventListener('click', () => {
    // Disable the follow elements when adding a new task
    // This prevents multiple elements added on screen
    disableButtons();
    // Wait until a new Task is added
    addNewTask(projects, activeProject, showView !== false).then(() => {
      updateCurrentView();
      // After a new task is created, re- enable these disabled elements
      enableButtons();
    });
  });

  // The add project button
  // ^ When adding a new project, the form is dismissed by
  // 1. press enter to 'change' the name
  // 2. click on any element with the 'dismiss' class
  // 3. presse 'Esc"
  addProjectBtn.addEventListener('click', () => {
    disableButtons();
    addNewProject(projects)
      .then(() => {
        activeProject = projects.projects[projects.projects.length - 1];
        updateProjectsDisplay(projects, activeProject);
        updateTasksDisplay(projects, activeProject.tasks);
        enableButtons();
      })
      .catch(() => {
        console.log('ESC pressed');
        enableButtons();
      });
  });

  // The projects list
  global.projectListEl.addEventListener('click', (e) => {
    projectListClickHandler(e, projects).then((index) => {
      activeProject = projects.projects[index];
      updateProjectsDisplay(projects, activeProject);
      showView = false;
      removeViewHighlight();
      updateTasksDisplay(projects, activeProject.tasks, showView);
    });
  });

  // The tasks llist
  // ^ The edit form is dismiss by:
  // 1. change one attribute of a task
  // 2. click on any elements with 'dismiss' class
  // 3. click on a project
  global.tasksListEl.addEventListener('click', (e) => {
    // Refresh the project list, in case an add project form is open
    updateProjectsDisplay(projects, activeProject);

    const { row } = e.target.dataset;
    const { col } = e.target.dataset;
    // Ignores:
    // - click on the margin of a task
    // - click on the empty space or the submit button of add task
    // - click on input fileds of editing a task
    console.log(row, col);
    if (!row || !col) {
      return;
    }

    disableButtons();

    // Dismiss any task being edited
    updateCurrentView();

    taskListClickHandler(
      row,
      col,
      projects,
      activeProject,
      showView !== false
    ).then(() => {
      if (showView) {
        console.log("🚀 ~ file: screenController.js:168 ~ ).then ~ showView:", showView)
        // Update list, otherwise edits are not visible
        switch (showView) {
          case 'today':
            todayClickHandler(projects);
            break;
          case 'next7days':
            next7daysClickHandler(projects);
            break;
          case 'undated':
            undatedClickHandler(projects);
            break;
          case 'completed':
            completedClickHandler(projects);
            break;
          case 'allTasks':
            allTasksClickHandler(projects);
            break;
          default:
            break;
        }
      }
      updateCurrentView();
      enableButtons();
    });
  });

  // The show completed tasks checkbox
  showCompletedCheckbox.addEventListener('change', () => {
    showCompleted = showCompletedCheckbox.checked;
    localStorage.setItem('showCompleted', JSON.stringify(showCompleted));
    updateCurrentView();
  });

  // Views
  const todayEl = document.querySelector('#today');
  const next7daysEl = document.querySelector('#next7days');
  const undatedEl = document.querySelector('#undated');
  const completedEl = document.querySelector('#completed');
  const allTasksEl = document.querySelector('#all-tasks');

  // Clear highlight in Views
  const removeViewHighlight = () => {
    todayEl.classList.remove('active-view');
    next7daysEl.classList.remove('active-view');
    undatedEl.classList.remove('active-view');
    completedEl.classList.remove('active-view');
    allTasksEl.classList.remove('active-view');
  };

  // The views event listeners
  todayEl.addEventListener('click', () => {
    // Remove highlight of active project, by updating without activeProject
    activeProject = null;
    updateProjectsDisplay(projects);
    removeViewHighlight();
    todayEl.classList.add('active-view');
    showView = 'today';
    todayClickHandler(projects);
  });

  next7daysEl.addEventListener('click', () => {
    // Remove highlight of active project, by updating without activeProject
    updateProjectsDisplay(projects);
    removeViewHighlight();
    next7daysEl.classList.add('active-view');
    showView = 'next7days';
    next7daysClickHandler(projects);
  });

  undatedEl.addEventListener('click', () => {
    // Remove highlight of active project, by updating without activeProject
    updateProjectsDisplay(projects);
    removeViewHighlight();
    undatedEl.classList.add('active-view');
    showView = 'undated';
    undatedClickHandler(projects);
  });

  completedEl.addEventListener('click', () => {
    // Remove highlight of active project, by updating without activeProject
    updateProjectsDisplay(projects);
    removeViewHighlight();
    completedEl.classList.add('active-view');
    showView = 'completed';
    completedClickHandler(projects);
  });

  allTasksEl.addEventListener('click', () => {
    // Remove highlight of active project, by updating without activeProject
    updateProjectsDisplay(projects);
    removeViewHighlight();
    allTasksEl.classList.add('active-view');
    showView = 'allTasks';
    allTasksClickHandler(projects);
  });

  updateProjectsDisplay(projects, activeProject);
  updateTasksDisplay(projects, activeProject.tasks, showView);
};

export default screenController;
