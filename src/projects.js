/* eslint-disable no-param-reassign */
import List from './list';

const Projects = () => {
  // A list of projects that will each contain a list of tasks
  const projects = [];

  const saveProjects = () => {
    localStorage.projects = JSON.stringify(projects);
  };

  // Create a new project
  const addProject = (name, data) => {
    if (!data) {
      const project = List(name);
      projects.push(project);
    } else {
      const project = List(name, data);
      projects.push(project);
    }
    saveProjects();
  };

  // Assign a task to a particular project
  const addTaskToProject = (task, project) => {
    project.addTask(task);
    saveProjects();
  };

  const deleteTaskFromProject = (index, project) => {
    project.removeTask(index);
    saveProjects();
  };

  const updateTaskinProject = (project, index, attribute, value) => {
    project.updateTask(index, attribute, value);
    saveProjects();
  };

  const moveTasktoProject = (project, index, otherProject) => {
    project.moveTask(index, otherProject);
    saveProjects();
  };

  // Swap the order of 2 projects
  const swapProject = (index1, index2) => {
    const temp = projects[index1];
    projects[index1] = projects[index2];
    projects[index2] = temp;
    saveProjects();
  };

  // Change the name of the project
  const renameProject = (project, newName) => {
    project.name = newName;
    project.updateAllTasks('projectName', newName);
    saveProjects();
  };

  // Remove a new project
  const removeProject = (index) => {
    projects.splice(index, 1);
    saveProjects();
  };

  return {
    addProject,
    addTaskToProject,
    deleteTaskFromProject,
    updateTaskinProject,
    moveTasktoProject,
    removeProject,
    swapProject,
    saveProjects,
    renameProject,
    get projects() {
      return projects;
    },
  };
};

export default Projects;
