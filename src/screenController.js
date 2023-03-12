import './style.css';
import Task from './task';
import Projects from './projects';
import createElement from './createElement';

const screenController = () => {
  const projects = Projects();

  let activeProjectName = 'Inbox';
  let activeProject = projects.inbox;

  const updateTasksDisplay = (project) => {
    const tasksListEl = document.querySelector('.tasks-list');
    tasksListEl.innerHTML = '';
    activeProject.tasks.forEach((task, index) => {
      const taskEl = createElement('div', ['task'], {}, '');
      const taskStatusEl = createElement('div', [], {}, task.status);
      taskEl.appendChild(taskStatusEl);
      const taskTitleEl = createElement(
        'div',
        [],
        {},
        `${task.title} ${index}`
      );
      taskEl.appendChild(taskTitleEl);
      const taskDescriptionEl = createElement('div', [], {}, task.description);
      taskEl.appendChild(taskDescriptionEl);
      const taskDueDateEl = createElement('div', [], {}, task.dueDate);
      taskEl.appendChild(taskDueDateEl);
      tasksListEl.appendChild(taskEl);
    });
  };

  // Event listener for the add task button
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
    projects.projects.forEach((project, index) => {
      const projectEl = createElement(
        'div',
        [],
        { style: 'cursor: pointer', 'data-id': index },
        `${project.name} ${index}`
      );
      // projectEl.dataset.id = index;
      projectsListEl.appendChild(projectEl);
    });
  };

  // Event listener for the add project button
  const addProjectBtn = document.querySelector('.add-project');
  addProjectBtn.addEventListener('click', () => {
    const newProjectName = prompt('Enter a new project name?');
    projects.addProject(newProjectName);
    activeProjectName = newProjectName;
    activeProject = projects.projects[projects.projects.length - 1];
    console.log(
      '🚀 ~ file: screenController.js:61 ~ addProjectBtn.addEventListener ~ activeProject:',
      activeProject
    );
    updateProjectsDisplay();
    updateTasksDisplay(activeProject);
  });

  // Event listener for Inbox
  const inboxEl = document.querySelector('.inbox');
  inboxEl.addEventListener('click', () => {
    activeProject = projects.inbox;
    activeProjectName = activeProject.name;
    updateTasksDisplay(activeProject);
  });

  // Event listener for Projects List
  const projectsEl = document.querySelector('.projects-list');
  projectsEl.addEventListener('click', (e) => {
    console.log(
      '🚀 ~ file: screenController.js:92 ~ projectsEl.addEventListener ~ e:',
      e
    );
    const index = e.target.dataset.id;
    console.log(
      '🚀 ~ file: screenController.js:87 ~ projectsEl.addEventListener ~ index:',
      index
    );
    activeProject = projects.projects[index];
    activeProjectName = activeProject.name;
    updateTasksDisplay(activeProject);
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
