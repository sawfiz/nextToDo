/* eslint-disable no-use-before-define */
/* eslint-disable comma-dangle */
import * as global from './globalConstants';
import Projects from './projects';
import {
  updateTasksListHeader,
  updateTasksDisplay,
} from './dom-updateTasksDisplay';
import {
  todayClickHandler,
  next7daysClickHandler,
  undatedClickHandler,
  completedClickHandler,
  allTasksClickHandler,
  searchClickHandler,
} from './dom-views';
import { addNewTask, taskListClickHandler } from './dom-tasks';
import {
  addNewProject,
  updateProjectsDisplay,
  projectListClickHandler,
} from './dom-projects';
import addSampleTasks from './addSampleTasks';
import { showOverlay, hideOverlay } from './utils';

const screenController = () => {
  // Create a Projects object with an empty list of projects
  const projects = Projects();
  // Read saved projects data from local storage
  const data = JSON.parse(localStorage.getItem('projects'));
  if (!data) {
    // If no data exists, create an empty Inbox
    projects.addProject('Inbox');
    addSampleTasks(projects);
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
  if (showCompleted === null) showCompleted = true;
  localStorage.setItem('showCompleted', JSON.stringify(showCompleted));

  // Event listners
  // --- the elements ---
  const addTaskBtn = document.querySelector('.add-task');
  const addProjectBtn = document.querySelector('.add-project');
  const showCompletedCheckbox = document.querySelector('#show-completed');
  showCompletedCheckbox.checked = showCompleted;
  const largeProjectNameEl = document.querySelector('.large-project-name');
  let currentViewName = 'Today';

  const overlay = document.querySelector('.overlay');
  overlay.addEventListener('click', () => {
    updateCurrentView();
    dropdownContainer.classList.remove('open');
    hideOverlay();
  });

  const enableDragProject = () => {
    // Attach event listeners
    const draggableItems = document.querySelectorAll('.draggable-item');
    draggableItems.forEach((item) => {
      item.addEventListener('dragstart', onDragStart);
      item.addEventListener('dragover', onDragOver);
      item.addEventListener('dragend', onDragEnd);
    });
  };

  const updateCurrentView = () => {
    if (showView) {
      list = JSON.parse(localStorage.getItem('list'));
      updateTasksDisplay(list, showView, showView === 'completed');
      enableDragProject();
    } else {
      updateTasksDisplay(activeProject.tasks);
      largeProjectNameEl.innerText = activeProject.name;
    }
    updateProjectsDisplay(projects, activeProject);
  };

  // The add task button
  addTaskBtn.addEventListener('click', () => {
    // Show overlay to disable the rest of the screen
    showOverlay();
    addNewTask(projects, activeProject, showView !== false)
      .then(() => {
        updateCurrentView();
        // After a new task is created, remove the overlay
        hideOverlay();
      })
      .catch(() => {
        updateCurrentView();
        hideOverlay();
      });
  });

  // The add project button
  addProjectBtn.addEventListener('click', () => {
    showOverlay();
    addNewProject(projects)
      .then(() => {
        activeProject = projects.projects[projects.projects.length - 1];
        removeViewHighlight();
        showView = false;
        updateProjectsDisplay(projects, activeProject);
        enableDragProject();
        updateTasksListHeader(projects, activeProject, showView);
        updateTasksDisplay(activeProject.tasks);
        hideOverlay();
      })
      .catch(() => {
        hideOverlay();
      });
  });

  // The projects list
  global.projectListEl.addEventListener('click', (e) => {
    searchInputEl.value = '';
    projectListClickHandler(e, projects)
      .then((index) => {
        activeProject = projects.projects[index];
        largeProjectNameEl.innerText = activeProject.name;
        updateProjectsDisplay(projects, activeProject);
        enableDragProject();
        showView = false;
        removeViewHighlight();
        updateTasksListHeader(projects, activeProject, showView !== false);
        updateTasksDisplay(
          activeProject.tasks,
          showView,
          false,
          activeProject
        );
        hideOverlay();
      })
      .catch(() => {
        updateProjectsDisplay(projects, activeProject);
        enableDragProject();
        hideOverlay();
      });
  });

  // The tasks llist
  global.tasksListEl.addEventListener('click', (e) => {
    // Refresh the project list, in case an add project form is open
    updateProjectsDisplay(projects, activeProject);
    enableDragProject();

    // showOverlay();

    const { row } = e.target.dataset;
    const { col } = e.target.dataset;
    if (!row || !col) {
      return;
    }

    // Dismiss any task being edited
    updateCurrentView();

    taskListClickHandler(e, projects, activeProject, showView !== false)
      .then(() => {
        if (showView) {
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
        hideOverlay();
        updateCurrentView();
      })
      .catch(() => {
        hideOverlay();
        updateCurrentView();
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
  const searchInputEl = document.querySelector('.search-input');

  // Clear highlight in Views
  const removeViewHighlight = () => {
    todayEl.classList.remove('active-view');
    next7daysEl.classList.remove('active-view');
    undatedEl.classList.remove('active-view');
    completedEl.classList.remove('active-view');
    allTasksEl.classList.remove('active-view');
    searchInputEl.classList.remove('active-view');
  };

  // Clear highlight in Projects
  const removeProjectHighlight = () => {
    Array.from(global.projectListEl.children).forEach((projectEl) => {
      projectEl.classList.remove('active-project');
    });
  };

  const switchToView = (element, view) => {
    activeProject = null;
    // Remove highlight of active project, by updating without activeProject
    updateProjectsDisplay(projects);
    enableDragProject();
    removeViewHighlight();
    if (view !== 'search') searchInputEl.value = '';
    element.classList.add('active-view');
    showView = view;
    largeProjectNameEl.innerText = currentViewName;
    updateTasksListHeader(projects, activeProject, showView !== false);
  };

  // The views event listeners
  todayEl.addEventListener('click', () => {
    currentViewName = 'Today';
    switchToView(todayEl, 'today');
    todayClickHandler(projects);
  });

  next7daysEl.addEventListener('click', () => {
    currentViewName = 'Next 7 days';
    switchToView(next7daysEl, 'next7days');
    next7daysClickHandler(projects);
  });

  undatedEl.addEventListener('click', () => {
    currentViewName = 'Undated';
    switchToView(undatedEl, 'undated');
    undatedClickHandler(projects);
  });

  completedEl.addEventListener('click', () => {
    currentViewName = 'Completed';
    switchToView(completedEl, 'completed');
    completedClickHandler(projects);
  });

  allTasksEl.addEventListener('click', () => {
    currentViewName = 'All tasks';
    switchToView(allTasksEl, 'alltasks');
    allTasksClickHandler(projects);
  });

  searchInputEl.addEventListener('change', () => {
    currentViewName = 'Search results...';
    switchToView(searchInputEl, 'search');
    searchClickHandler(projects, searchInputEl.value);
  });

  // Draggable stuff
  let draggedItem;
  let fromIndex;
  let toIndex;

  function onDragStart(event) {
    draggedItem = event.target;

    event.dataTransfer.setData('text/plain', '');
    fromIndex = event.target.dataset.id;
    activeProject = projects.projects[fromIndex];
    removeViewHighlight();
    removeProjectHighlight();
    draggedItem.classList.add('active-project');
    updateTasksDisplay(
      activeProject.tasks,
      showView,
      showView === 'completed'
    );
    largeProjectNameEl.innerText = activeProject.name;
  }

  function onDragOver(event) {
    event.preventDefault();
    if (event.target.classList.contains('draggable-item')) {
      const rect = event.target.getBoundingClientRect();
      // Find out how much the item is dragged
      // 5 is the margin bottom

      const offsetY = event.clientY - rect.top;
      if (offsetY < rect.height / 2) {
        event.target.parentNode.insertBefore(draggedItem, event.target);
      } else {
        event.target.parentNode.insertBefore(
          draggedItem,
          event.target.nextSibling
        );
      }
    }
  }

  function onDragEnd() {
    toIndex = Array.from(global.projectListEl.children).indexOf(draggedItem);
    projects.moveProject(fromIndex, toIndex);
    draggedItem = null;
    updateProjectsDisplay(projects, activeProject);
    enableDragProject();
  }

  // Dropdown menu for changing color theme
  const dropdownBtn = document.querySelector('.dropdown-btn');
  const dropdownContainer = document.querySelector('.dropdown-container');
  dropdownBtn.addEventListener('click', () => {
    showOverlay();
    dropdownContainer.classList.add('open');
  });

  const optionsEl = document.querySelector('.dropdown-content');
  optionsEl.addEventListener('click', (e) => {
    const clickedOption = e.target.textContent;
    dropdownBtn.textContent = `Color theme: ${clickedOption}`;
    dropdownContainer.classList.remove('open');
    switch (clickedOption) {
      case 'Blue':
        document.documentElement.style.setProperty('--darker-color', '#ff0000');
        document.documentElement.style.setProperty('--dark-color', '#11cbd7');
        document.documentElement.style.setProperty('--light-color', '#c6f1e7');
        document.documentElement.style.setProperty(
          '--lighter-color',
          '#f0fff3'
        );
        break;
      case 'Brown':
        document.documentElement.style.setProperty('--darker-color', '4d4d4d');
        document.documentElement.style.setProperty('--dark-color', '#b46060');
        document.documentElement.style.setProperty('--light-color', '#ffbf9b');
        document.documentElement.style.setProperty(
          '--lighter-color',
          '#fff4ed'
        );
        break;
      case 'Red':
        document.documentElement.style.setProperty('--darker-color', '#002b5b');
        document.documentElement.style.setProperty('--dark-color', '#ea5455');
        document.documentElement.style.setProperty('--light-color', '#e4dccf');
        document.documentElement.style.setProperty(
          '--lighter-color',
          '#f9f5eb'
        );
        break;
      case 'Green':
        document.documentElement.style.setProperty('--darker-color', '#40513b');
        document.documentElement.style.setProperty('--dark-color', '#609966');
        document.documentElement.style.setProperty('--light-color', '#9dc08b');
        document.documentElement.style.setProperty(
          '--lighter-color',
          '#edf1d6'
        );
        break;
      case 'Orange':
        document.documentElement.style.setProperty('--darker-color', '#183a1d');
        document.documentElement.style.setProperty('--dark-color', '#f0a04b');
        document.documentElement.style.setProperty('--light-color', '#e1eedd');
        document.documentElement.style.setProperty(
          '--lighter-color',
          '#fefbe9'
        );
        break;

      default:
        break;
    }
    hideOverlay();
  });

  // Initialize the screen
  updateProjectsDisplay(projects, activeProject);
  enableDragProject();
  updateTasksListHeader(projects, activeProject, showView !== false);
  updateTasksDisplay(activeProject.tasks, showView);
};

export default screenController;
