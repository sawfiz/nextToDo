/* eslint-disable no-plusplus */
/* eslint-disable no-unneeded-ternary */
/* eslint-disable comma-dangle */
/* eslint-disable no-use-before-define */
import './style.css';
import createElement from './createElement';
import * as global from './globalConstants';
import isBefore from './utils';

let focusAscend = true;
let statusAscend = true;
let descriptionAscend = true;
let projectAscend = true;
let startDateAscend = true;
let dueDateAscend = true;

const getList = (activeProject, showProject) => {
  if (showProject) {
    return JSON.parse(localStorage.getItem('list'));
  } else {
    return activeProject.tasks;
  }
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
    [],
    { style: 'cursor: pointer; display: flex; justify-content: center' },
    '↕️'
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
    [],
    { style: 'cursor: pointer; display: flex; justify-content: center' },
    '↕️'
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
    [],
    { style: 'cursor: pointer' },
    '↕️'
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
      [],
      { style: 'cursor: pointer' },
      '↕️'
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

  const headerStartDateEl = createElement('div', [], {}, 'Start Date ');
  taskListHeaderEl.appendChild(headerStartDateEl);
  const sortByStartDateBtn = createElement(
    'btn',
    [],
    { style: 'cursor: pointer' },
    '↕️'
  );
  headerStartDateEl.appendChild(sortByStartDateBtn);
  sortByStartDateBtn.addEventListener('click', () => {
    const list = getList(activeProject, showProject);
    startDateAscend = startDateAscend ? false : true;
    const sortedList = sortByKey(list, 'startDate', startDateAscend);
    localStorage.setItem('list', JSON.stringify(sortedList));
    updateTasksDisplay(projects, sortedList, showProject, false);
  });

  const headerDueDateEl = createElement('div', [], {}, 'Due Date ');
  taskListHeaderEl.appendChild(headerDueDateEl);
  const sortByDueDateBtn = createElement(
    'btn',
    [],
    { style: 'cursor: pointer' },
    '↕️'
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
      { 'data-row': row, 'data-col': col, style: 'color: red; text-align: center'},
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
        style: 'text-align: center'
      },
      ''
    );
    taskEl.appendChild(taskStatusEl);

    col++;
    const taskDescriptionEl = createElement(
      'div',
      ['limited-text'],
      { 'data-row': row, 'data-col': col },
      task.description
    );
    if (task.status === 'dDone') {
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

export { updateTasksListHeader, updateTasksDisplay };
