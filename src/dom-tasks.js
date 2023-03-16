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

  const showCompleted = JSON.parse(localStorage.getItem('showCompleted'));
  tasksListEl.innerHTML = '';
  let row = 0;
  activeProject.tasks.forEach((task, index) => {

    if (!showCompleted && task.status === 'Done') return;

 
    const taskEl = createElement('div', ['task'], { 'data-index': index}, '');
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
      statusIcons[task.status]
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
  console.log(
    '🚀 ~ file: dom-tasks.js:156 ~ taskListClickHandler ~ row, col:',
    row,
    col
  );
  const taskEl = tasksListEl.children[row];
  console.log(
    '🚀 ~ file: dom-tasks.js:157 ~ taskListClickHandler ~ taskEl:',
    taskEl
  );
  taskEl.classList.add('active-task');
  const index = taskEl.getAttribute('data-index');
  console.log("🚀 ~ file: dom-tasks.js:182 ~ returnnewPromise ~ index:", index)

  return new Promise((resolve) => {
    const editingTaskEl = createElement('div', ['editing-task'], {}, '');

    // Focus button
    const focusIcon = taskEl.children[0].innerText;
    const focusEl = createElement('button', ['focus-btn'], {}, focusIcon);
    editingTaskEl.appendChild(focusEl);

    // Status pull down
    const targetIcon = taskEl.children[1].innerText;
    const selectedIndex = Object.entries(statusIcons).findIndex(
      ([key, value]) => value === targetIcon
    );
    const statusEl = createElement('select', [], {}, '');
    // Option is from the statusIcons dictionary
    const statusToDoEl = createElement('option', [], {}, statusIcons['Todo']);
    if (selectedIndex === 0) statusToDoEl.selected = true;
    statusEl.appendChild(statusToDoEl);
    const statusDoingEl = createElement('option', [], {}, statusIcons['Doing']);
    if (selectedIndex === 1) statusDoingEl.selected = true;
    statusEl.appendChild(statusDoingEl);
    const statusWaitEl = createElement('option', [], {}, statusIcons['Wait']);
    if (selectedIndex === 2) statusWaitEl.selected = true;
    statusEl.appendChild(statusWaitEl);
    const statusDoneEl = createElement('option', [], {}, statusIcons['Done']);
    if (selectedIndex === 3) statusDoneEl.selected = true;
    statusEl.appendChild(statusDoneEl);
    editingTaskEl.appendChild(statusEl);

    // Description text input
    const description = taskEl.children[2].innerText;
    const descriptionEl = createElement(
      'input',
      [],
      { value: description },
      ''
    );
    editingTaskEl.appendChild(descriptionEl);

    // StartDate date input
    const startDateEl = createElement(
      'input',
      [],
      { type: 'date', value: taskEl.children[3].innerText },
      ''
    );
    editingTaskEl.appendChild(startDateEl);

    // Update dueDate
    const dueDateEl = createElement(
      'input',
      [],
      { type: 'date', value: taskEl.children[4].innerText },
      ''
    );
    editingTaskEl.appendChild(dueDateEl);

    // Place holders
    for (let i = 0; i < 3; i++) {
      // make sure not to use 'div' here due to a check in screenController()
      const element = createElement('p', [], {}, '');
      editingTaskEl.appendChild(element);
    }

    // The project list drop down
    const projectDropDownEl = createElement('select', [], {}, '');
    // Options are project names
    projects.projects.forEach((project) => {
      const projectEl = createElement('option', [], {}, project.name);
      projectDropDownEl.appendChild(projectEl);
    });

    editingTaskEl.appendChild(projectDropDownEl);

    // The delete button
    const delBtn = createElement(
      'button',
      ['delete-btn'],
      { 'data-row': row, 'data-col': col },
      '❌'
    );
    editingTaskEl.appendChild(delBtn);

    tasksListEl.replaceChild(editingTaskEl, taskEl);

    focusEl.addEventListener('click', () => {
      // Toggle focus icon
      let value = focusIcon === '🫥' ? true : false;
      projects.updateTaskinProject(activeProject, index, 'focus', value);
      resolve();
    });

    statusEl.addEventListener('change', () => {
      projects.updateTaskinProject(
        activeProject,
        index,
        'status',
        status[statusEl.selectedIndex]
      );
      resolve();
    });

    descriptionEl.addEventListener('change', () => {
      projects.updateTaskinProject(
        activeProject,
        index,
        'description',
        descriptionEl.value
      );
      resolve();
    });

    startDateEl.addEventListener('blur', () => {
      projects.updateTaskinProject(
        activeProject,
        index,
        'startDate',
        startDateEl.value
      );
      resolve();
    });

    dueDateEl.addEventListener('blur', () => {
      projects.updateTaskinProject(
        activeProject,
        index,
        'dueDate',
        dueDateEl.value
      );
      resolve();
    });

    projectDropDownEl.addEventListener('change', () => {
      console.log(
        '🚀 ~ file: dom-tasks.js:290 ~ projectDropDownEl.addEventListener ~ projectDropDownEl.selectedIndex:',
        projectDropDownEl.selectedIndex
      );
      projects.moveTasktoProject(
        activeProject,
        index,
        projects.projects[projectDropDownEl.selectedIndex]
      );
      resolve();
    });

    delBtn.addEventListener('click', () => {
      // Call from projects to delete the task
      // so that the local storage is updated after the deletion
      projects.deleteTaskFromProject(index, activeProject);
      resolve();
    });
  });
};

export { addNewTask, updateTasksDisplay, taskListClickHandler };
