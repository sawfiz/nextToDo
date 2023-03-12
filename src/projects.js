import List from './list';

const Projects = () => {
  console.log('Next To Do is great');

  // Create default task list - Inbox
  const inbox = List('Inbox');

  // A list of projects that will each contain a list of tasks
  const projects = [];

  // Create a new project
  const addProject = (name) => {
    const project = List(name);
    projects.push(project);
  };

  // Assign a task to a particular project
  // By default the task is added to Inbox
  const addTaskToProject = (task, project) => {
    if (!project) {
      project = inbox;
    }
    project.addTask(task);
  };

  return {
    addProject,
    addTaskToProject,
    get inbox() {
      return inbox;
    },
    get projects() {
      return projects;
    },
  };
};

export default Projects;
