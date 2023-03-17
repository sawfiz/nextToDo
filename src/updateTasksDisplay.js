import './style.css';
import createElement from './createElement';
import * as global from './globalConstants';

function compareDateWithToday(dateString) {
  // Parse the input date string into a Date object
  const inputDate = new Date(dateString);

  // Get today's date
  const today = new Date();

  // Set the time part of both dates to 00:00:00 to compare only the dates
  inputDate.setHours(0, 0, 0, 0);
  today.setHours(0, 0, 0, 0);

  // Compare the dates
  if (inputDate < today) {
    return true;
  } else if (inputDate > today) {
    return false;
  } else {
    return false;
  }
}

const updateTasksDisplay = (projects, activeProject) => {
  if (!activeProject) activeProject = projects.projects[0];

  const showCompleted = JSON.parse(localStorage.getItem('showCompleted'));
  global.tasksListEl.innerHTML = '';
  let row = 0;
  activeProject.tasks.forEach((task, index) => {
    if (!showCompleted && task.status === 'Done') return;

    const taskEl = createElement('div', ['task'], { 'data-index': index }, '');
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

    col++;
    const taskStartDateEl = createElement(
      'div',
      [],
      { 'data-row': row, 'data-col': col },
      task.startDate
    );
    if (compareDateWithToday(task.startDate)) {
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
    if (compareDateWithToday(task.dueDate)) {
      taskDueDateEl.classList.add('date-passed');
    }
    taskEl.appendChild(taskDueDateEl);
    row++;

    global.tasksListEl.appendChild(taskEl);
  });
};

export default updateTasksDisplay;
