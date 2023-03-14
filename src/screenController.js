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
  addTaskBtn.addEventListener('click', () => {
    addNewTask(projects, activeProject);
  });

  const addProjectBtn = document.querySelector('.add-project');
  addProjectBtn.addEventListener('click', () => {
    addNewProject(projects).then(() => {
      activeProject = projects.projects[projects.projects.length - 1];
      updateProjectsDisplay(projects, activeProject);
      updateTasksDisplay(projects, activeProject);
    });
  });

  const projectListEl = document.querySelector('.project-list');
  projectListEl.addEventListener('click', (e) => {
    activeProject = projectListlickHandler(e, projects);
  });

  updateProjectsDisplay(projects, activeProject);
  updateTasksDisplay(projects, activeProject);
};

export default screenController;
