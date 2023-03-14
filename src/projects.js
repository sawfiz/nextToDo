import List from './list';

const Projects = () => {
  console.log('Next To Do is great');

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

  // Swap the order of 2 projects
  const swapProject = (x, y) => {
    [projects[x], projects[y]] = [projects[y], projects[x]];
    saveProjects();
  };

  // Change the name of the project
  const renameProject = (project, newName) => {
    project.name = newName;
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
