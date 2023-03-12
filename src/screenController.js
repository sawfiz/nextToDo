import './style.css';
import Task from './task';
import Projects from './projects';
import createElement from './createElement';

const screenController = () => {
  const projects = Projects();

  let activeProjectName = 'Inbox';

  const updateTasksDisplay = (activeProject) => {
    const tasksListEl = document.querySelector('.tasks-list');
    tasksListEl.innerHTML = '';
    activeProject.tasks.forEach((task) => {
      const taskEl = createElement('div', ['task'], {}, '');
      const taskStatusEl = createElement('div', [], {}, task.status);
      taskEl.appendChild(taskStatusEl);
      const taskTitleEl = createElement('div', [], {}, task.title);
      taskEl.appendChild(taskTitleEl);
      const taskDescriptionEl = createElement('div', [], {}, task.description);
      taskEl.appendChild(taskDescriptionEl);
      const taskDueDateEl = createElement('div', [], {}, task.dueDate);
      taskEl.appendChild(taskDueDateEl);
      tasksListEl.appendChild(taskEl);
    });
  };

  const addTaskBtn = document.querySelector('.add-task');
  addTaskBtn.addEventListener('click', () => {
    const task = Task(
      'Do this',
      'This needs to be done',
      '2023-03-12',
      'Not started'
    );
    console.log('Add a task to inbox');
    let activeProject = projects.projects.find(
      (proj) => proj.name === activeProjectName
    );
    if (!activeProject) {
      activeProject = projects.inbox;
    }
    projects.addTaskToProject(task, activeProject);
    updateTasksDisplay(activeProject);
  });

  const updateProjectsDisplay = () => {
    const projectsListEl = document.querySelector('.projects-list');
    projectsListEl.innerHTML = '';
    projects.projects.forEach((project) => {
      const projectEl = createElement('div', [], {}, project.name);
      projectsListEl.appendChild(projectEl);
    });
  };

  const addProjectBtn = document.querySelector('.add-project');
  addProjectBtn.addEventListener('click', () => {
    projects.addProject('Shopping');
    activeProjectName = 'Shopping';
    updateProjectsDisplay();
  });
};

export default screenController;

// const task = Task(
//   'Do this',
//   'This needs to be done',
//   '2023-03-12',
//   'Not started'
// );
// console.log('Add a task to inbox');
// projects.addTaskToProject(task);

// const task2 = Task(
//   'Do this 2',
//   'This needs to be done',
//   '2023-03-12',
//   'Not started'
// );

// console.log('Add a task to inbox');
// projects.addTaskToProject(task2);

// console.log('Initial project');
// projects.addProject('shopping');

// const task3 = Task(
//   'Do this 3',
//   'This needs to be done',
//   '2023-03-12',
//   'Not started'
// );

// const projectName = 'shopping';
// const shopping = projects.projects.find((proj) => proj.name === projectName);
// projects.addTaskToProject(task3, shopping);

// console.log('Move tasks2 to shopping list');
// projects.inbox.moveTask(task2, shopping);
