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

    // col++;
    // const placeHolderEl = createElement(
    //   'div',
    //   [],
    //   { 'data-row': index, 'data-col': col },
    //   ''
    // );
    // taskEl.appendChild(placeHolderEl);

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
    const editingTaskEl = createElement('div', ['editing-task'], {}, '');

    // Focus button
    const focusIcon = taskEl.children[0].innerText;
    const focusEl = createElement('button', ['focus-btn'], {}, focusIcon);
    editingTaskEl.appendChild(focusEl);

    // Status pull down
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
      projects.updateTaskinProject(activeProject, row, 'focus', value);
      resolve();
    });

    statusEl.addEventListener('change', () => {
      projects.updateTaskinProject(
        activeProject,
        row,
        'status',
        status[statusEl.selectedIndex]
      );
      resolve();
    });

    descriptionEl.addEventListener('change', () => {
      projects.updateTaskinProject(
        activeProject,
        row,
        'description',
        descriptionEl.value
      );
      resolve();
    });

    startDateEl.addEventListener('change', () => {
      projects.updateTaskinProject(
        activeProject,
        row,
        'startDate',
        startDateEl.value
      );
      resolve();
    });

    dueDateEl.addEventListener('change', () => {
      projects.updateTaskinProject(
        activeProject,
        row,
        'dueDate',
        dueDateEl.value
      );
      resolve();
    });

    projectDropDownEl.addEventListener('change', () => {
      projects.moveTasktoProject(
        activeProject,
        row,
        projects.projects[projectDropDownEl.selectedIndex]
      );
      resolve();
    });

    delBtn.addEventListener('click', () => {
      // Call from projects to delete the task
      // so that the local storage is updated after the deletion
      projects.deleteTaskFromProject(row, activeProject);
      resolve();
    });
  });
};

export { addNewTask, updateTasksDisplay, taskListClickHandler };
