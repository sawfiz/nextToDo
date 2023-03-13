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
      // const project = Object.assign(List(name), data);
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

  // Swap a project up
  const swapUpProject = (index) => {
    [projects[index], projects[index - 1]] = [
      projects[index - 1],
      projects[index],
    ];
    saveProjects();
  };

  // Swap a project down
  const swapDownProject = (index) => {
    [projects[index], projects[index + 1]] = [
      projects[index + 1],
      projects[index],
    ];
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
    swapUpProject,
    swapDownProject,
    saveProjects,
    get projects() {
      return projects;
    },
  };
};

export default Projects;
