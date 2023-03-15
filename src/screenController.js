import Projects from './projects';

import {
  addNewTask,
  updateTasksDisplay,
  taskListClickHandler,
} from './dom-tasks';
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
    // Otherwise, create a list of projects based on the stored names and tasks
    data.forEach((projectData) => {
      if (projectData) projects.addProject(projectData.name, projectData.tasks);
    });
  }

  let activeProject = projects.projects[0]; // Inbox

  const addTaskBtn = document.querySelector('.add-task');
  const addProjectBtn = document.querySelector('.add-project');
  const projectListEl = document.querySelector('.project-list');
  const taskListEl = document.querySelector('.task-list');
  const bodyEl = document.querySelector('body');

  bodyEl.addEventListener('click', (e) => {
    const parentClassList = e.target.parentElement.classList;
    if (parentClassList.contains('container')) {
      updateProjectsDisplay(projects, activeProject);
      updateTasksDisplay(projects, activeProject);
    }
  });

  addTaskBtn.addEventListener('click', () => {
    addProjectBtn.disabled = true;
    addTaskBtn.disabled = true;
    // projectListEl.disabled = true;
    addNewTask(projects, activeProject).then(() => {
      addProjectBtn.disabled = false;
      addTaskBtn.disabled = false;
    });
  });

  addProjectBtn.addEventListener('click', () => {
    addProjectBtn.disabled = true;
    addTaskBtn.disabled = true;
    // projectListEl.disabled = true;
    addNewProject(projects)
      .then(() => {
        activeProject = projects.projects[projects.projects.length - 1];
        updateProjectsDisplay(projects, activeProject);
        updateTasksDisplay(projects, activeProject);
        addProjectBtn.disabled = false;
        addTaskBtn.disabled = false;
      })
      .catch(() => {
        console.log('ESC pressed');
        addProjectBtn.disabled = false;
        addTaskBtn.disabled = false;
      });
  });

  projectListEl.addEventListener('click', (e) => {
    addProjectBtn.disabled = false;
    addTaskBtn.disabled = false;
    projectListClickHandler(e, projects).then((index) => {
      if (index !== NaN) {
        activeProject = projects.projects[index];
        updateProjectsDisplay(projects, activeProject);
        updateTasksDisplay(projects, activeProject);
      }
    });
  });

  taskListEl.addEventListener('click', (e) => {
    const { row } = e.target.dataset;
    const { col } = e.target.dataset;
    // Do nothing if delete button is being clicked
    // It should be handled by it's own event listner
    // This prevents a task be higlighted after a task is deleted
    if (e.target.tagName !== 'DIV') return;

    updateTasksDisplay(projects, activeProject);

    taskListClickHandler(row, col, projects, activeProject).then(() => {
      updateTasksDisplay(projects, activeProject);
    });
  });

  updateProjectsDisplay(projects, activeProject);
  updateTasksDisplay(projects, activeProject);
};

export default screenController;
