import './style.css';
import createElement from './createElement';
import Task from './task';

const updateTasksDisplay = (projects, activeProject) => {
  if (!activeProject) activeProject = projects.projects[0];
  const tasksListEl = document.querySelector('.tasks-list');
  tasksListEl.innerHTML = '';
  activeProject.tasks.forEach((task) => {
    const taskEl = createElement('div', ['task'], {}, '');
    const taskFocusEl = createElement('div', [], {}, task.focus);
    taskEl.appendChild(taskFocusEl);
    const taskStatusEl = createElement('div', [], {}, task.status);
    taskEl.appendChild(taskStatusEl);
    const taskDescriptionEl = createElement('div', [], {}, task.description);
    taskEl.appendChild(taskDescriptionEl);
    const taskstartDateEl = createElement('div', [], {}, task.startDate);
    taskEl.appendChild(taskstartDateEl);
    const taskDueDateEl = createElement('div', [], {}, task.dueDate);
    taskEl.appendChild(taskDueDateEl);
    tasksListEl.appendChild(taskEl);
  });
};

const addNewTask = (projects, activeProject) => {
  console.log(
    '🚀 ~ file: dom-tasks.js:24 ~ addNewTask ~ activeProject:',
    activeProject
  );
  const tasksListEl = document.querySelector('.tasks-list');
  const taskEl = createElement('div', ['new-task'], {}, '');
  const focusEl = createElement('input', [], { type: 'checkbox' }, '');
  const statusEl = createElement('input', [], { type: 'checkbox' }, '');
  const descriptionEl = createElement('input', [], {}, '');
  const startDateEl = createElement('input', [], { type: 'date' }, '');
  const dueDateEl = createElement('input', [], { type: 'date' }, '');
  const submitBtn = createElement('button', [], {}, 'Submit');
  taskEl.appendChild(focusEl);
  taskEl.appendChild(statusEl);
  taskEl.appendChild(descriptionEl);
  taskEl.appendChild(startDateEl);
  taskEl.appendChild(dueDateEl);
  for (let i = 0; i < 4; i++) {
    taskEl.appendChild(createElement('div', [], {}, ''));
  }
  taskEl.appendChild(submitBtn);
  tasksListEl.appendChild(taskEl);
  descriptionEl.focus();

  return new Promise((resolve) => {
    submitBtn.addEventListener('click', () => {
      const task = Task(
        focusEl.value,
        statusEl.value,
        descriptionEl.value,
        startDateEl.value,
        dueDateEl.value
      );
      projects.addTaskToProject(task, activeProject);
      updateTasksDisplay(projects, activeProject);
      resolve();
    });
  });
};

export { addNewTask, updateTasksDisplay };
