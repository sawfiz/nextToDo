import Projects from './projects';

import { addNewTask, updateTasksDisplay } from './dom-tasks';
import {
  addNewProject,
  updateProjectsDisplay,
  projectListlickHandler,
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
    console.log(
      '🚀 ~ file: screenController.js:49 ~ projectListlickHandler ~ activeProject:',
      activeProject
    );
    projectListlickHandler(e, projects).then((index) => {
      console.log(
        '🚀 ~ file: screenController.js:44 ~ projectListlickHandler ~ index:',
        index
      );
      if (index !== NaN) {
        activeProject = projects.projects[index];
        updateProjectsDisplay(projects, activeProject);
        updateTasksDisplay(projects, activeProject);
      }
    });
  });

  updateProjectsDisplay(projects, activeProject);
  updateTasksDisplay(projects, activeProject);
};

export default screenController;
