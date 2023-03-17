import './style.css';
import * as global from './globalConstants';
import createElement from './createElement';
import Task from './task';
// import updateTasksDisplay from './updateTasksDisplay';

// Function for adding a new task
const addNewTask = (projects, activeProject) => {
  // Create a new task element
  const taskEl = createElement('div', ['new-task'], {}, '');

  // Create each part of a task elelment
  const focusEl = createElement('input', [], { type: 'checkbox' }, '');
  taskEl.appendChild(focusEl);

  const statusEl = createElement('select', [], {}, '');
  const statusToDoEl = createElement('option', [], {}, global.statusIcons['Todo']);
  statusEl.appendChild(statusToDoEl);
  const statusDoingEl = createElement('option', [], {}, global.statusIcons['Doing']);
  statusEl.appendChild(statusDoingEl);
  const statusWaitEl = createElement('option', [], {}, global.statusIcons['Wait']);
  statusEl.appendChild(statusWaitEl);
  const statusDoneEl = createElement('option', [], {}, global.statusIcons['Done']);
  statusEl.appendChild(statusDoneEl);
  taskEl.appendChild(statusEl);

  const descriptionEl = createElement('input', [], {}, '');
  taskEl.appendChild(descriptionEl);

  const startDateEl = createElement('input', [], { type: 'date' }, '');
  taskEl.appendChild(startDateEl);

  const dueDateEl = createElement('input', [], { type: 'date' }, '');
  taskEl.appendChild(dueDateEl);

  // Make placeholders so the Submit button shows up at the end
  for (let i = 0; i < 4; i++) {
    taskEl.appendChild(createElement('div', [], {}, ''));
  }
  const submitBtn = createElement('button', [], {}, 'Submit');
  taskEl.appendChild(submitBtn);

  // Attach the new task element to the tasksList element
  global.tasksListEl.appendChild(taskEl);

  // Focus on the description so the user can start entering text
  descriptionEl.focus();

  // Wait for the submit button to be clicked on
  return new Promise((resolve) => {
    submitBtn.addEventListener('click', () => {
      const task = Task(
        focusEl.checked,
        // status is from array ['Todo', 'Doing', 'Wait', 'Done']
        global.status[statusEl.selectedIndex],
        descriptionEl.value,
        startDateEl.value,
        dueDateEl.value,
        projects.projects.indexOf(activeProject)
      );
      projects.addTaskToProject(task, activeProject);
      resolve();
    });
  });
};

// Handles a valid click on the tasks list
const taskListClickHandler = (row, col, projects, activeProject) => {
  console.log(
    '🚀 ~ file: dom-tasks.js:156 ~ taskListClickHandler ~ row, col:',
    row,
    col
  );
  const taskEl = global.tasksListEl.children[row];
  console.log(
    '🚀 ~ file: dom-tasks.js:157 ~ taskListClickHandler ~ taskEl:',
    taskEl
  );
  taskEl.classList.add('active-task');
  const index = taskEl.getAttribute('data-index');
  console.log('🚀 ~ file: dom-tasks.js:182 ~ returnnewPromise ~ index:', index);

  return new Promise((resolve) => {
    const editingTaskEl = createElement('div', ['editing-task'], {}, '');

    // Focus button
    const focusIcon = taskEl.children[0].innerText;
    const focusEl = createElement('button', ['focus-btn'], {}, focusIcon);
    editingTaskEl.appendChild(focusEl);

    // Status pull down
    const targetIcon = taskEl.children[1].innerText;
    const selectedIndex = Object.entries(global.statusIcons).findIndex(
      ([key, value]) => value === targetIcon
    );
    const statusEl = createElement('select', [], {}, '');
    // Option is from the statusIcons dictionary
    const statusToDoEl = createElement('option', [], {}, global.statusIcons['Todo']);
    if (selectedIndex === 0) statusToDoEl.selected = true;
    statusEl.appendChild(statusToDoEl);
    const statusDoingEl = createElement('option', [], {}, global.statusIcons['Doing']);
    if (selectedIndex === 1) statusDoingEl.selected = true;
    statusEl.appendChild(statusDoingEl);
    const statusWaitEl = createElement('option', [], {}, global.statusIcons['Wait']);
    if (selectedIndex === 2) statusWaitEl.selected = true;
    statusEl.appendChild(statusWaitEl);
    const statusDoneEl = createElement('option', [], {}, global.statusIcons['Done']);
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
      if (project === activeProject) {
        projectEl.selected = true;
      }
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

    global.tasksListEl.replaceChild(editingTaskEl, taskEl);

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
        global.status[statusEl.selectedIndex]
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

    // Use blur instead of change, so it does not fire too soon
    startDateEl.addEventListener('blur', () => {
      projects.updateTaskinProject(
        activeProject,
        index,
        'startDate',
        startDateEl.value
        );
      resolve();
    });
    
    // Use blur instead of change, so it does not fire too soon
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
      projects.updateTaskinProject(
        activeProject,
        index,
        'projectIndex',
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

export { addNewTask, taskListClickHandler };
