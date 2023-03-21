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

const getList = (activeProject, showProject) => {
  if (showProject) {
    return JSON.parse(localStorage.getItem('list'));
  }
  return activeProject.tasks;
};

const sortByKey = (array, key, sortAscend) => {
  return array.sort((a, b) => {
    if (sortAscend) {
      return a[key] < b[key] ? -1 : 1;
    }
    return a[key] > b[key] ? -1 : 1;
  });
};

const updateTasksListHeader = (projects, activeProject, showProject) => {
  // Display the tasks list header
  const taskListHeaderEl = document.querySelector('.tasks-list-header');
  taskListHeaderEl.innerHTML = '';
  if (showProject) {
    taskListHeaderEl.classList.remove('not-show-project-name');
    taskListHeaderEl.classList.add('show-project-name');
  } else {
    taskListHeaderEl.classList.remove('show-project-name');
    taskListHeaderEl.classList.add('not-show-project-name');
  }

  const sortByFocusBtn = createElement(
    'btn',
    ['mdi', 'mdi-sort-bool-ascending'],
    { style: 'cursor: pointer; display: flex; justify-content: center' },
    ''
  );
  taskListHeaderEl.appendChild(sortByFocusBtn);
  sortByFocusBtn.addEventListener('click', () => {
    const list = getList(activeProject, showProject);
    focusAscend = focusAscend ? false : true;
    const sortedList = sortByKey(list, 'focus', focusAscend);
    localStorage.setItem('list', JSON.stringify(sortedList));
    updateTasksDisplay(projects, sortedList, showProject, false);
  });

  const sortByStatusBtn = createElement(
    'btn',
    ['mdi', 'mdi-sort-bool-ascending-variant'],
    { style: 'cursor: pointer; display: flex; justify-content: center' },
    ''
  );
  taskListHeaderEl.appendChild(sortByStatusBtn);
  sortByStatusBtn.addEventListener('click', () => {
    const list = getList(activeProject, showProject);
    statusAscend = statusAscend ? false : true;
    const sortedList = sortByKey(list, 'status', statusAscend);
    localStorage.setItem('list', JSON.stringify(sortedList));
    updateTasksDisplay(projects, sortedList, showProject, false);
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
    const list = getList(activeProject, showProject);
    descriptionAscend = descriptionAscend ? false : true;
    const sortedList = sortByKey(list, 'description', descriptionAscend);
    localStorage.setItem('list', JSON.stringify(sortedList));
    updateTasksDisplay(projects, sortedList, showProject, false);
  });

  if (showProject) {
    taskListHeaderEl.classList.remove('not-show-project-name');
    taskListHeaderEl.classList.add('show-project-name');
    const headerProjectNameEl = createElement('div', [], {}, 'Project ');
    taskListHeaderEl.appendChild(headerProjectNameEl);
    const sortByProjectBtn = createElement(
      'btn',
      ['mdi', 'mdi-sort-ascending'],
      { style: 'cursor: pointer' },
      ''
    );
    headerProjectNameEl.appendChild(sortByProjectBtn);
    sortByProjectBtn.addEventListener('click', () => {
      const list = getList(activeProject, showProject);
      projectAscend = projectAscend ? false : true;
      // Todo: should sort by project name, not project index
      const sortedList = sortByKey(list, 'projectIndex', projectAscend);
      localStorage.setItem('list', JSON.stringify(sortedList));
      updateTasksDisplay(projects, sortedList, showProject, false);
    });
  }

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
    const list = getList(activeProject, showProject);
    startDateAscend = startDateAscend ? false : true;
    const sortedList = sortByKey(list, 'startDate', startDateAscend);
    localStorage.setItem('list', JSON.stringify(sortedList));
    updateTasksDisplay(projects, sortedList, showProject, false);
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
    const list = getList(activeProject, showProject);
    dueDateAscend = dueDateAscend ? false : true;
    const sortedList = sortByKey(list, 'dueDate', dueDateAscend);
    localStorage.setItem('list', JSON.stringify(sortedList));
    updateTasksDisplay(projects, sortedList, showProject, false);
  });
};

const updateTasksDisplay = (projects, taskList, showProject, completedView) => {
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
      'button',
      ['focus-btn'],
      {
        'data-row': row,
        'data-col': col,
      },
      ''
    );
    // if (task.focus) {
    //   taskFocusEl.classList.add('mdi', 'mdi-weather-sunny');
    //   taskFocusEl.style.color = 'red';
    // } else {
    //   taskFocusEl.classList.add('mdi', 'mdi-blur');
    // }
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

    // If showing a view, rather than an active project
    col++;
    if (showProject) {
      let projectName = 'not assigned';
      if (!Number.isNaN(task.projectIndex)) {
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
    const startDateText = getDateText(task.startDate);
    const taskStartDateEl = createElement(
      'div',
      ['date'],
      { 'data-row': row, 'data-col': col, 'data-date': task.startDate },
      startDateText
    );
    if (isOnOrBefore(task.startDate, 0)) {
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
    if (isOnOrBefore(task.dueDate, 0)) {
      taskDueDateEl.classList.add('date-passed');
    }
    taskEl.appendChild(taskDueDateEl);
    row++;
    
    col++;
    const delBtn = createElement('button', ['delete-btn'], {'data-row': row, 'data-col': col,}, '❌');
    taskEl.appendChild(delBtn);

    global.tasksListEl.appendChild(taskEl);
  });
};

export { updateTasksListHeader, updateTasksDisplay };
