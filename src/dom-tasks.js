import './style.css';
import createElement from './createElement';
import Task from './task';

const status = ['Todo', 'Doing', 'Wait', 'Done'];
const statusIcons = {
  Todo: '️⃝',
  Doing: '◐',
  Wait: '⏳',
  Done: '✅',
};
const tasksListEl = document.querySelector('.task-list');

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

  tasksListEl.innerHTML = '';
  activeProject.tasks.forEach((task, index) => {
    const taskEl = createElement('div', ['task'], {}, '');
    let col = 0;
    const taskFocusEl = createElement(
      'div',
      [],
      { 'data-row': index, 'data-col': col },
      task.focus
    );
    taskFocusEl.innerText = task.focus === true ? '‼️' : '🫥';
    taskEl.appendChild(taskFocusEl);

    col++;
    const taskStatusEl = createElement(
      'div',
      [],
      { 'data-row': index, 'data-col': col },
      statusIcons[task.status]
    );
    taskEl.appendChild(taskStatusEl);

    col++;
    const taskDescriptionEl = createElement(
      'div',
      [],
      { 'data-row': index, 'data-col': col },
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
      { 'data-row': index, 'data-col': col },
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
      { 'data-row': index, 'data-col': col },
      task.dueDate
    );
    if (compareDateWithToday(task.dueDate)) {
      taskDueDateEl.classList.add('date-passed');
    }
    taskEl.appendChild(taskDueDateEl);

    col++;
    const placeHolderEl = createElement(
      'div',
      [],
      { 'data-row': index, 'data-col': col },
      ''
    );
    taskEl.appendChild(placeHolderEl);

    tasksListEl.appendChild(taskEl);
  });
};

const addNewTask = (projects, activeProject) => {
  const taskEl = createElement('div', ['new-task'], {}, '');
  const focusEl = createElement('input', [], { type: 'checkbox' }, '');
  const statusEl = createElement('select', [], {}, '');
  // Option is from the statusIcons dictionary
  const statusToDoEl = createElement('option', [], {}, statusIcons['Todo']);
  statusEl.appendChild(statusToDoEl);
  const statusDoingEl = createElement('option', [], {}, statusIcons['Doing']);
  statusEl.appendChild(statusDoingEl);
  const statusWaitEl = createElement('option', [], {}, statusIcons['Wait']);
  statusEl.appendChild(statusWaitEl);
  const statusDoneEl = createElement('option', [], {}, statusIcons['Done']);
  statusEl.appendChild(statusDoneEl);
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
        focusEl.checked,
        // status is from array ['Todo', 'Doing', 'Wait', 'Done']
        status[statusEl.selectedIndex],
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

const taskListClickHandler = (row, col, projects, activeProject) => {
  const taskEl = tasksListEl.children[row];
  taskEl.classList.add('active-task');
  return new Promise((resolve) => {
    // Replace place holder with a del button
    taskEl.removeChild(taskEl.children[5]);
    const delBtn = createElement(
      'button',
      [],
      { 'data-row': row, 'data-col': col },
      '❌'
    );
    taskEl.appendChild(delBtn);

    delBtn.addEventListener('click', () => {
      projects.deleteTaskFromProject(row, activeProject);
      resolve();
    });
  });
};

export { addNewTask, updateTasksDisplay, taskListClickHandler };
