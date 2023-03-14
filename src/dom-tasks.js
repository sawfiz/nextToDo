import './style.css';
import createElement from './createElement';
import Task from './task';

const updateTasksDisplay = (projects, activeProject) => {
  if (!activeProject) activeProject = projects.projects[0];
  const tasksListEl = document.querySelector('.tasks-list');
  tasksListEl.innerHTML = '';
  activeProject.tasks.forEach((task, index) => {
    const taskEl = createElement('div', ['task'], {}, '');
    const taskStatusEl = createElement('div', [], {}, task.status);
    taskEl.appendChild(taskStatusEl);
    const taskTitleEl = createElement('div', [], {}, `${task.title} ${index}`);
    taskEl.appendChild(taskTitleEl);
    const taskDescriptionEl = createElement('div', [], {}, task.description);
    taskEl.appendChild(taskDescriptionEl);
    const taskDueDateEl = createElement('div', [], {}, task.dueDate);
    taskEl.appendChild(taskDueDateEl);
    tasksListEl.appendChild(taskEl);
  });
};

const addNewTask = (projects, activeProject) => {
  console.log("🚀 ~ file: dom-tasks.js:24 ~ addNewTask ~ activeProject:", activeProject)
  const tasksListEl = document.querySelector('.tasks-list');
  const taskEl = createElement('div', ['new-task'], {}, '');
  const statusEl = createElement('input', [], {}, '');
  const titleEl = createElement('input', ['task-title'], {});
  const descriptionEl = createElement('input', [], {}, '');
  const dueDateEl = createElement('input', [], { type: 'date' }, '');
  const submitBtn = createElement('button', [], {}, 'Submit');
  taskEl.appendChild(statusEl);
  taskEl.appendChild(titleEl);
  taskEl.appendChild(descriptionEl);
  taskEl.appendChild(dueDateEl);
  for (let i = 0; i < 3; i++) {
    taskEl.appendChild(createElement('div', [], {}, ''));
  }
  taskEl.appendChild(submitBtn);
  tasksListEl.appendChild(taskEl);
  titleEl.focus();

  submitBtn.addEventListener('click', () => {
    const task = Task(
      titleEl.value,
      descriptionEl.value,
      dueDateEl.value,
      statusEl.value
    );
    projects.addTaskToProject(task, activeProject);
    updateTasksDisplay(projects, activeProject);
  });
};

export {addNewTask, updateTasksDisplay}