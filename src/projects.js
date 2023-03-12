import List from './list';

const Projects = () => {
  console.log('Next To Do is great');

  // A list of projects that will each contain a list of tasks
  // Get stored index from localStorage
  let projects = JSON.parse(localStorage.getItem('projects'));
  if (projects === null) {
    projects = [];
    // Create Inbox
    const inbox = List('Inbox');
    projects.push(inbox);
  }

  const saveProjects = () => {
    localStorage.projects = JSON.stringify(projects);
  };

  // Create a new project
  const addProject = (name) => {
    const project = List(name);
    projects.push(project);
    saveProjects();
  };

  // Assign a task to a particular project
  const addTaskToProject = (task, project) => {
    project.addTask(task);
    saveProjects();
  };

  return {
    addProject,
    addTaskToProject,
    saveProjects,
    get projects() {
      return projects;
    },
  };
};

export default Projects;
