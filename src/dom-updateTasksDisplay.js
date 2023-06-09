/* eslint-disable no-plusplus */
/* eslint-disable no-unneeded-ternary */
/* eslint-disable comma-dangle */
/* eslint-disable no-use-before-define */
import './style.css';
import createElement from './createElement';
import * as global from './globalConstants';
import { isOnOrBefore, getDateText } from './utils';

let focusAscend = true;
let statusAscend = true;
let descriptionAscend = true;
let projectAscend = true;
let startDateAscend = true;
let dueDateAscend = true;

// Get the list to display depending on the showProject setting
// if of not show "Project" in the header
const getList = (activeProject, showProject) => {
  if (showProject) {
    return JSON.parse(localStorage.getItem('list'));
  }
  return activeProject.tasks;
};

// Sort a list by a key, then return the new list
const sortByKey = (array, key, sortAscend) => {
  return array.sort((a, b) => {
    if (sortAscend) {
      return a[key] < b[key] ? -1 : 1;
    }
    return a[key] > b[key] ? -1 : 1;
  });
};

// Actions taken when a sort button is clicked on
const sortAndUpdate = (activeProject, sortKey, sortDirection, showProject) => {
  const list = getList(activeProject, showProject);
  const sortedList = sortByKey(list, sortKey, sortDirection);
  localStorage.setItem('list', JSON.stringify(sortedList));
  updateTasksDisplay(sortedList, showProject, false);
};

// Refresh the task list header, add sort buttons, and add event listeners
const updateTasksListHeader = (activeProject, showProject) => {
  // Display the tasks list header
  const taskListHeaderEl = document.querySelector('.tasks-list-header');
  taskListHeaderEl.innerHTML = '';
  taskListHeaderEl.classList.add('show-project-name');

  const sortByFocusBtn = createElement(
    'btn',
    ['mdi', 'mdi-sort-bool-ascending'],
    { style: 'cursor: pointer; display: flex; justify-content: center' },
    ''
  );
  taskListHeaderEl.appendChild(sortByFocusBtn);
  sortByFocusBtn.addEventListener('click', () => {
    focusAscend = focusAscend ? false : true;
    sortAndUpdate(activeProject, 'focus', focusAscend, showProject);
  });

  const sortByStatusBtn = createElement(
    'btn',
    ['mdi', 'mdi-sort-bool-ascending-variant'],
    { style: 'cursor: pointer; display: flex; justify-content: center' },
    ''
  );
  taskListHeaderEl.appendChild(sortByStatusBtn);
  sortByStatusBtn.addEventListener('click', () => {
    statusAscend = statusAscend ? false : true;
    sortAndUpdate(activeProject, 'status', statusAscend, showProject);
  });

  const headerDescriptionEl = createElement('div', [], {}, 'Description ');
  taskListHeaderEl.appendChild(headerDescriptionEl);
  const sortByDescriptionBtn = createElement(
    'btn',
    ['mdi', 'mdi-sort-ascending'],
    { style: 'cursor: pointer' },
    ''
  );
  headerDescriptionEl.appendChild(sortByDescriptionBtn);
  sortByDescriptionBtn.addEventListener('click', () => {
    descriptionAscend = descriptionAscend ? false : true;
    sortAndUpdate(activeProject, 'description', descriptionAscend, showProject);
  });

  const headerProjectNameEl = createElement('div', [], {}, '');
  if (showProject) {
    headerProjectNameEl.innerText = 'Project ';
    const sortByProjectBtn = createElement(
      'btn',
      ['mdi', 'mdi-sort-ascending'],
      { style: 'cursor: pointer' },
      ''
    );
    headerProjectNameEl.appendChild(sortByProjectBtn);
    sortByProjectBtn.addEventListener('click', () => {
      // Todo: should sort by project name, not project index
      projectAscend = projectAscend ? false : true;
      sortAndUpdate(activeProject, 'projectName', projectAscend, showProject);
    });
  }
  taskListHeaderEl.appendChild(headerProjectNameEl);

  const headerStartDateEl = createElement('div', [], {}, 'Start ');
  taskListHeaderEl.appendChild(headerStartDateEl);
  const sortByStartDateBtn = createElement(
    'btn',
    ['mdi', 'mdi-sort-calendar-ascending'],
    { style: 'cursor: pointer' },
    ''
  );
  headerStartDateEl.appendChild(sortByStartDateBtn);
  sortByStartDateBtn.addEventListener('click', () => {
    startDateAscend = startDateAscend ? false : true;
    sortAndUpdate(activeProject, 'startDate', startDateAscend, showProject);
  });

  const headerDueDateEl = createElement('div', [], {}, 'Due ');
  taskListHeaderEl.appendChild(headerDueDateEl);
  const sortByDueDateBtn = createElement(
    'btn',
    ['mdi', 'mdi-sort-calendar-ascending'],
    { style: 'cursor: pointer' },
    ''
  );
  headerDueDateEl.appendChild(sortByDueDateBtn);
  sortByDueDateBtn.addEventListener('click', () => {
    dueDateAscend = dueDateAscend ? false : true;
    sortAndUpdate(activeProject, 'dueDate', dueDateAscend, showProject);
  });
};

// Function to display the task list
const updateTasksDisplay = (taskList, showProject, completedView) => {
  const showCompleted = JSON.parse(localStorage.getItem('showCompleted'));

  // Display the tasks list body
  global.tasksListEl.innerHTML = '';
  let row = 0;
  taskList.forEach((task) => {
    // In case of the Completed view, show completed tasks anyways
    if (!completedView) {
      if (!showCompleted && task.status === 'dDone') return;
    }

    const taskEl = createElement(
      'div',
      ['task'],
      {
        'data-projectName': task.projectName,
        'data-taskIndex': task.taskIndex,
      },
      ''
    );
    taskEl.classList.add('show-project-name');

    let col = 0;
    const taskFocusEl = createElement(
      'button',
      ['focus-btn'],
      {
        'data-row': row,
        'data-col': col,
      },
      ''
    );
    taskFocusEl.innerText = task.focus ? '‼️' : '🫥';
    taskEl.appendChild(taskFocusEl);

    col++;
    const taskStatusEl = createElement(
      'div',
      ['mdi', global.statusIcons[task.status]],
      {
        'data-row': row,
        'data-col': col,
        'data-statusindex': global.status.indexOf(task.status),
        style: 'text-align: center',
      },
      ''
    );
    taskEl.appendChild(taskStatusEl);

    col++;
    const taskDescriptionEl = createElement(
      'div',
      ['description', 'limited-text'],
      { 'data-row': row, 'data-col': col },
      task.description
    );
    if (task.status === 'dDone') {
      taskDescriptionEl.classList.add('done');
    }
    taskEl.appendChild(taskDescriptionEl);

    col++;
    const { projectName } = task;
    const projectNameEl = createElement(
      'div',
      ['limited-text'],
      { 'data-row': row, 'data-col': col },
      projectName
    );
    taskEl.appendChild(projectNameEl);
    // If not in Views, hide the project name
    if (!showProject) {
      projectNameEl.classList.add('hide-project');
    }

    col++;
    const startDateText = getDateText(task.startDate);
    const taskStartDateEl = createElement(
      'div',
      ['date'],
      { 'data-row': row, 'data-col': col, 'data-date': task.startDate },
      startDateText
    );
    // Show dates before today in red
    if (isOnOrBefore(task.startDate, -1)) {
      taskStartDateEl.classList.add('date-passed');
    }
    taskEl.appendChild(taskStartDateEl);

    col++;
    const dueDateText = getDateText(task.dueDate);
    const taskDueDateEl = createElement(
      'div',
      ['date'],
      { 'data-row': row, 'data-col': col, 'data-date': task.dueDate },
      dueDateText
    );
    // Show dates before today in red
    if (isOnOrBefore(task.dueDate, -1)) {
      taskDueDateEl.classList.add('date-passed');
    }
    taskEl.appendChild(taskDueDateEl);

    col++;
    const delBtn = createElement(
      'button',
      ['delete-btn', 'mdi', 'mdi-trash-can-outline'],
      { 'data-row': row, 'data-col': col },
      ''
    );
    taskEl.appendChild(delBtn);

    row++;

    global.tasksListEl.appendChild(taskEl);
  });
};

export { updateTasksListHeader, updateTasksDisplay };
