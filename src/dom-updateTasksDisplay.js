import './style.css';
import createElement from './createElement';
import * as global from './globalConstants';
import { isBefore } from './utils';

const updateTasksDisplay = (projects, taskList, showProject, completedView) => {
  const showCompleted = JSON.parse(localStorage.getItem('showCompleted'));

  // Display the tasks list header
  const taskListHeaderEl = document.querySelector('.tasks-list-header');
  taskListHeaderEl.innerHTML = '';
  taskListHeaderEl.classList.remove('show-project-name');
  taskListHeaderEl.classList.add('not-show-project-name');

  for (let i = 0; i < 2; i++) {
    const element = createElement('div', [], {}, '');
    taskListHeaderEl.appendChild(element);
  }
  const headerDescriptionEl = createElement('div', [], {}, 'Description');
  taskListHeaderEl.appendChild(headerDescriptionEl);
  if (showProject) {
    taskListHeaderEl.classList.remove('not-show-project-name');
    taskListHeaderEl.classList.add('show-project-name');
    const headerProjectNameEl = createElement('div', [], {}, 'Project');
    taskListHeaderEl.appendChild(headerProjectNameEl);
  }
  const headerStartDateEl = createElement('div', [], {}, 'Start Date');
  taskListHeaderEl.appendChild(headerStartDateEl);
  const headerDueDateEl = createElement('div', [], {}, 'Due Date');
  taskListHeaderEl.appendChild(headerDueDateEl);

  // Display the tasks list body
  global.tasksListEl.innerHTML = '';
  let row = 0;
  taskList.forEach((task) => {
    // In case of the Completed view, show completed tasks anyways
    if (!completedView) {
      if (!showCompleted && task.status === 'Done') return;
    }

    const taskEl = createElement(
      'div',
      ['task'],
      {
        'data-projectIndex': task.projectIndex,
        'data-taskIndex': task.taskIndex,
      },
      ''
    );
    if (showProject) {
      taskEl.classList.add('show-project-name');
    } else {
      taskEl.classList.add('not-show-project-name');
    }

    let col = 0;
    const taskFocusEl = createElement(
      'div',
      [],
      { 'data-row': row, 'data-col': col },
      task.focus
    );
    taskFocusEl.innerText = task.focus === true ? '‼️' : '🫥';
    taskEl.appendChild(taskFocusEl);

    col++;
    const taskStatusEl = createElement(
      'div',
      [],
      { 'data-row': row, 'data-col': col },
      global.statusIcons[task.status]
    );
    taskEl.appendChild(taskStatusEl);

    col++;
    const taskDescriptionEl = createElement(
      'div',
      ['limited-text'],
      { 'data-row': row, 'data-col': col },
      task.description
    );
    if (task.status === 'Done') {
      taskDescriptionEl.classList.add('done');
    }
    taskEl.appendChild(taskDescriptionEl);

    // If showing a view, rather than an active project
    if (showProject) {
      col++;
      let projectName = 'not assigned';
      if (!isNaN(Number(task.projectIndex))) {
        projectName = projects.projects[task.projectIndex].name;
      }
      const projectNameEl = createElement(
        'div',
        ['limited-text'],
        { 'data-row': row, 'data-col': col },
        projectName
      );
      taskEl.appendChild(projectNameEl);
    }

    col++;
    const taskStartDateEl = createElement(
      'div',
      [],
      { 'data-row': row, 'data-col': col },
      task.startDate
    );
    if (isBefore(task.startDate, 0)) {
      taskStartDateEl.classList.add('date-passed');
    }
    taskEl.appendChild(taskStartDateEl);

    col++;
    const taskDueDateEl = createElement(
      'div',
      [],
      { 'data-row': row, 'data-col': col },
      task.dueDate
    );
    if (isBefore(task.dueDate, 0)) {
      taskDueDateEl.classList.add('date-passed');
    }
    taskEl.appendChild(taskDueDateEl);
    row++;

    global.tasksListEl.appendChild(taskEl);
  });
};

export default updateTasksDisplay;
