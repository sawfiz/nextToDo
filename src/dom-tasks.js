/* eslint-disable operator-linebreak */
/* eslint-disable comma-dangle */
/* eslint-disable no-plusplus */
import './style.css';
import * as global from './globalConstants';
import createElement from './createElement';
import Task from './task';
// import updateTasksDisplay from './updateTasksDisplay';

// Function for adding a new task
const addNewTask = (projects, activeProject, showView) => {
  // Create a new task element
  const taskEl = createElement('div', ['new-task'], {}, '');

  // Create each part of a task elelment
  const focusEl = createElement('input', [], { type: 'checkbox' }, '');
  taskEl.appendChild(focusEl);

  const statusEl = createElement('select', [], {}, '');
  const statusToDoEl = createElement('option', [], {}, 'To do');
  statusEl.appendChild(statusToDoEl);
  const statusDoingEl = createElement('option', [], {}, 'Doing');
  statusEl.appendChild(statusDoingEl);
  const statusWaitEl = createElement('option', [], {}, 'Waiting');
  statusEl.appendChild(statusWaitEl);
  const statusDoneEl = createElement('option', [], {}, 'Done');
  statusEl.appendChild(statusDoneEl);
  taskEl.appendChild(statusEl);

  const descriptionEl = createElement('input', ['input'], {}, '');
  taskEl.appendChild(descriptionEl);

  const projectEl = createElement('select', [], {}, '');
  if (showView) {
    projects.projects.forEach((project) => {
      const optionEl = createElement('option', [], {}, project.name);
      projectEl.appendChild(optionEl);
    });
    taskEl.appendChild(projectEl);
    taskEl.classList.remove('new-task');
    taskEl.classList.add('new-task-with-project');
  }

  const startDateEl = createElement('input', [], { type: 'date' }, '');
  taskEl.appendChild(startDateEl);

  const dueDateEl = createElement('input', [], { type: 'date' }, '');
  taskEl.appendChild(dueDateEl);

  // Make placeholders so the Submit button shows up at the end
  const skip = showView ? 5 : 4;
  for (let i = 0; i < skip; i++) {
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
      const projectIndex =
        showView === true
          ? projectEl.selectedIndex
          : projects.projects.indexOf(activeProject);
      const task = Task(
        focusEl.checked,
        // status is from array ['aTodo', 'bDoing', 'cWait', 'dDone']
        global.status[statusEl.selectedIndex],
        descriptionEl.value,
        startDateEl.value,
        dueDateEl.value,
        projectIndex,
        projects.projects[projectIndex].tasks.length
      );

      projects.addTaskToProject(task, projects.projects[projectIndex]);
      resolve();
    });
  });
};

// Handles a valid click on the tasks list
const taskListClickHandler = (row, col, projects, activeProject, showView) => {
  const taskEl = global.tasksListEl.children[row];
  taskEl.classList.add('active-task');
  const projectIndex = taskEl.getAttribute('data-projectIndex');
  const taskIndex = taskEl.getAttribute('data-taskIndex');

  return new Promise((resolve) => {
    const editingTaskEl = createElement('div', ['editing-task'], {}, '');

    // Focus button
    const focusIcon = taskEl.children[0].innerText;
    const focusEl = createElement('button', ['focus-btn'], {}, focusIcon);
    editingTaskEl.appendChild(focusEl);

    // Status pull down
    const selectedIndex = Number(taskEl.children[1].dataset.statusindex);

    const statusEl = createElement('select', [], {}, '');
    // Option is from the statusIcons dictionary
    const statusToDoEl = createElement('option', [], {}, 'To do');
    if (selectedIndex === 0) statusToDoEl.selected = true;
    statusEl.appendChild(statusToDoEl);
    const statusDoingEl = createElement('option', [], {}, 'Doing');
    if (selectedIndex === 1) statusDoingEl.selected = true;
    statusEl.appendChild(statusDoingEl);
    const statusWaitEl = createElement('option', [], {}, 'Waiting');
    if (selectedIndex === 2) statusWaitEl.selected = true;
    statusEl.appendChild(statusWaitEl);
    const statusDoneEl = createElement('option', [], {}, 'Done');
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
    const startDateIndex = showView ? 4 : 3;
    const startDateEl = createElement(
      'input',
      [],
      { type: 'date', value: taskEl.children[startDateIndex].dataset.date },
      ''
    );
    editingTaskEl.appendChild(startDateEl);

    // Update dueDate
    const dueDateIndex = showView ? 5 : 4;
    const dueDateEl = createElement(
      'input',
      [],
      { type: 'date', value: taskEl.children[dueDateIndex].dataset.date },
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
    const delBtn = createElement('button', ['delete-btn'], {}, '❌');
    editingTaskEl.appendChild(delBtn);

    const thisProject =
      showView === true ? projects.projects[projectIndex] : activeProject;
    global.tasksListEl.replaceChild(editingTaskEl, taskEl);

    focusEl.addEventListener('click', () => {
      // Toggle focus icon
      projects.updateTaskinProject(
        thisProject,
        taskIndex,
        'focus',
        focusIcon === '🫥'
      );
      resolve();
    });

    statusEl.addEventListener('change', () => {
      projects.updateTaskinProject(
        thisProject,
        taskIndex,
        'status',
        global.status[statusEl.selectedIndex]
      );
      resolve();
    });

    descriptionEl.addEventListener('change', () => {
      projects.updateTaskinProject(
        thisProject,
        taskIndex,
        'description',
        descriptionEl.value
      );
      resolve();
    });

    // Use blur instead of change, so it does not fire too soon
    startDateEl.addEventListener('blur', () => {
      projects.updateTaskinProject(
        thisProject,
        taskIndex,
        'startDate',
        startDateEl.value
      );
      resolve();
    });

    // Use blur instead of change, so it does not fire too soon
    dueDateEl.addEventListener('blur', () => {
      projects.updateTaskinProject(
        thisProject,
        taskIndex,
        'dueDate',
        dueDateEl.value
      );
      resolve();
    });

    projectDropDownEl.addEventListener('change', () => {
      projects.updateTaskinProject(
        thisProject,
        taskIndex,
        'projectIndex',
        projectDropDownEl.selectedIndex
      );

      projects.moveTasktoProject(
        thisProject,
        taskIndex,
        projects.projects[projectDropDownEl.selectedIndex]
      );
      resolve();
    });

    delBtn.addEventListener('click', () => {
      // Call from projects to delete the task
      // so that the local storage is updated after the deletion
      projects.deleteTaskFromProject(taskIndex, thisProject);
      resolve();
    });
  });
};

export { addNewTask, taskListClickHandler };
