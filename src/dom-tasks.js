/* eslint-disable operator-linebreak */
/* eslint-disable comma-dangle */
/* eslint-disable no-plusplus */
import './style.css';
import * as global from './globalConstants';
import createElement from './createElement';
import Task from './task';
import { showOverlay } from './utils';
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

  const descriptionEl = createElement(
    'input',
    ['input'],
    { placeholder: 'New Task' },
    ''
  );
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
  // There are a few options below to scroll the new task into view
  global.tasksListEl.appendChild(taskEl);
  // global.tasksListEl.insertBefore(taskEl, global.tasksListEl.children[0]);
  taskEl.scrollIntoView();
  // global.tasksListEl.scrollTop = global.tasksListEl.scrollHeight;

  // Focus on the description so the user can start entering text
  descriptionEl.focus();

  // Function to add create a valid task
  const addNewTaskToProject = () => {
    const projectIndex =
      showView === true
        ? projectEl.selectedIndex
        : projects.projects.indexOf(activeProject);

    const project = projects.projects[projectIndex];

    const task = Task(
      focusEl.checked,
      // status is from array ['aTodo', 'bDoing', 'cWait', 'dDone']
      global.status[statusEl.selectedIndex],
      descriptionEl.value,
      startDateEl.value,
      dueDateEl.value,
      projectIndex,
      project.tasks.length
    );
    projects.addTaskToProject(task, project);
  };

  // Wait for the submit button to be clicked on
  return new Promise((resolve, reject) => {
    // Create a new task is the Submit button is pressed
    submitBtn.addEventListener('click', () => {
      if (descriptionEl.value) {
        addNewTaskToProject();
        resolve();
      } else reject();
    });

    // Create a new task if the Enter key is pressed
    descriptionEl.addEventListener('keydown', (e) => {
      if (e.keyCode === 13) {
        if (descriptionEl.value) {
          addNewTaskToProject();
          resolve();
        } else reject();
      }
    });

    // Dismiss if Esc key is pressed in description
    descriptionEl.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        reject();
      }
    });
  });
};

// Handles a valid click on the tasks list
const taskListClickHandler = (e, projects, activeProject, showView) => {
  const { row } = e.target.dataset;
  const { col } = e.target.dataset;
  console.log('🚀 ~ file: dom-tasks.js:126 ~ taskListClickHandler ~ col:', col);

  const taskEl = global.tasksListEl.children[row];
  taskEl.classList.add('active-task');
  console.log(
    '🚀 ~ file: dom-tasks.js:131 ~ taskListClickHandler ~ taskEl:',
    taskEl
  );
  const projectIndex = taskEl.getAttribute('data-projectIndex');
  console.log(
    '🚀 ~ file: dom-tasks.js:134 ~ taskListClickHandler ~ projectIndex:',
    projectIndex
  );

  // taskIndex is different depending on showing View of Project
  let taskIndex;
  if (showView) {
    taskIndex = taskEl.getAttribute('data-taskIndex');
  } else {
    taskIndex = row;
  }

  const thisProject =
    showView === true ? projects.projects[projectIndex] : activeProject;

  return new Promise((resolve, reject) => {
    console.log('🚀 ~ file: dom-tasks.js:148 ~ returnnewPromise ~ col:', col);
    switch (col) {
      // Focus button
      case '0': {
        const focusIcon = taskEl.children[0].innerText;
        projects.updateTaskinProject(
          thisProject,
          taskIndex,
          'focus',
          focusIcon === '🫥'
        );
        resolve();
        break;
      }
      // Status
      case '1': {
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
        taskEl.replaceChild(statusEl, taskEl.children[1]);

        statusEl.addEventListener('change', () => {
          projects.updateTaskinProject(
            thisProject,
            taskIndex,
            'status',
            global.status[statusEl.selectedIndex]
          );
          resolve();
        });
        break;
      }
      // Description
      case '2': {
        const description = taskEl.children[2].innerText;
        const descriptionEl = createElement(
          'input',
          ['description-edit'],
          { value: description },
          ''
        );
        taskEl.replaceChild(descriptionEl, taskEl.children[2]);
        descriptionEl.focus();
        showOverlay();
        // Create a new task if the Enter key is pressed
        descriptionEl.addEventListener('keydown', (e) => {
          if (e.keyCode === 13) {
            if (descriptionEl.value) {
              projects.updateTaskinProject(
                thisProject,
                taskIndex,
                'description',
                descriptionEl.value
              );
              resolve();
            } else reject();
          }
        });

        // Dismiss if Esc key is pressed in description
        descriptionEl.addEventListener('keydown', (e) => {
          if (e.key === 'Escape') {
            reject();
          }
        });
        break;
      }
      // Project name
      case '3': {
        showOverlay();
        const projectDropDownEl = createElement(
          'select',
          ['project-edit'],
          {},
          ''
        );
        // Options are project names
        projects.projects.forEach((project) => {
          const projectEl = createElement('option', [], {}, project.name);
          if (project === thisProject) {
            projectEl.selected = true;
          }
          projectDropDownEl.appendChild(projectEl);
        });

        taskEl.replaceChild(projectDropDownEl, taskEl.children[3]);
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

        break;
      }
      // Start date
      case '4': {
        showOverlay();
        const startDateIndex = showView ? 4 : 3;
        const startDateEl = createElement(
          'input',
          ['date-edit'],
          { type: 'date', value: taskEl.children[startDateIndex].dataset.date },
          ''
        );
        taskEl.replaceChild(startDateEl, taskEl.children[startDateIndex]);
        startDateEl.addEventListener('blur', () => {
          console.log('start date blurred');
          projects.updateTaskinProject(
            thisProject,
            taskIndex,
            'startDate',
            startDateEl.value
          );
          resolve();
        });
        // Dismiss if Esc key is pressed
        startDateEl.addEventListener('keydown', (e) => {
          if (e.key === 'Escape') {
            startDateEl.blur();
            reject();
          }
        });
        break;
      }
      // Due date
      case '5': {
        showOverlay();
        const dueDateIndex = showView ? 5 : 4;
        const dueDateEl = createElement(
          'input',
          ['date-edit'],
          { type: 'date', value: taskEl.children[dueDateIndex].dataset.date },
          ''
        );
        taskEl.replaceChild(dueDateEl, taskEl.children[dueDateIndex]);
        dueDateEl.addEventListener('blur', () => {
          projects.updateTaskinProject(
            thisProject,
            taskIndex,
            'dueDate',
            dueDateEl.value
          );
          resolve();
        });
        break;
      }

      default:
        break;
    }

    // resolve();
    //   const editingTaskEl = createElement('div', ['editing-task'], {}, '');

    //   // Focus button
    //   const focusIcon = taskEl.children[0].innerText;
    //   const focusEl = createElement('button', ['focus-btn'], {}, focusIcon);
    //   editingTaskEl.appendChild(focusEl);

    //   // Status pull down
    //   const selectedIndex = Number(taskEl.children[1].dataset.statusindex);

    //   const statusEl = createElement('select', [], {}, '');
    //   // Option is from the statusIcons dictionary
    //   const statusToDoEl = createElement('option', [], {}, 'To do');
    //   if (selectedIndex === 0) statusToDoEl.selected = true;
    //   statusEl.appendChild(statusToDoEl);
    //   const statusDoingEl = createElement('option', [], {}, 'Doing');
    //   if (selectedIndex === 1) statusDoingEl.selected = true;
    //   statusEl.appendChild(statusDoingEl);
    //   const statusWaitEl = createElement('option', [], {}, 'Waiting');
    //   if (selectedIndex === 2) statusWaitEl.selected = true;
    //   statusEl.appendChild(statusWaitEl);
    //   const statusDoneEl = createElement('option', [], {}, 'Done');
    //   if (selectedIndex === 3) statusDoneEl.selected = true;
    //   statusEl.appendChild(statusDoneEl);
    //   editingTaskEl.appendChild(statusEl);

    //   // Description text input
    //   const description = taskEl.children[2].innerText;
    //   const descriptionEl = createElement(
    //     'input',
    //     [],
    //     { value: description },
    //     ''
    //   );
    //   editingTaskEl.appendChild(descriptionEl);

    //   // StartDate date input
    //   const startDateIndex = showView ? 4 : 3;
    //   const startDateEl = createElement(
    //     'input',
    //     [],
    //     { type: 'date', value: taskEl.children[startDateIndex].dataset.date },
    //     ''
    //   );
    //   editingTaskEl.appendChild(startDateEl);

    //   // Update dueDate
    //   const dueDateIndex = showView ? 5 : 4;
    //   const dueDateEl = createElement(
    //     'input',
    //     [],
    //     { type: 'date', value: taskEl.children[dueDateIndex].dataset.date },
    //     ''
    //   );
    //   editingTaskEl.appendChild(dueDateEl);

    //   // Place holders
    //   for (let i = 0; i < 3; i++) {
    //     // make sure not to use 'div' here due to a check in screenController()
    //     const element = createElement('p', [], {}, '');
    //     editingTaskEl.appendChild(element);
    //   }

    //   // The project list drop down
    //   const projectDropDownEl = createElement('select', [], {}, '');
    //   // Options are project names
    //   projects.projects.forEach((project) => {
    //     const projectEl = createElement('option', [], {}, project.name);
    //     if (project === activeProject) {
    //       projectEl.selected = true;
    //     }
    //     projectDropDownEl.appendChild(projectEl);
    //   });

    //   editingTaskEl.appendChild(projectDropDownEl);

    //   // The delete button
    //   const delBtn = createElement('button', ['delete-btn'], {}, '❌');
    //   editingTaskEl.appendChild(delBtn);

    //   const thisProject =
    //     showView === true ? projects.projects[projectIndex] : activeProject;
    //   global.tasksListEl.replaceChild(editingTaskEl, taskEl);

    //   console.log(
    //     '🚀 ~ file: dom-tasks.js:192 ~ focusEl.addEventListener ~ thisProject:',
    //     thisProject.name
    //   );
    //   console.log(
    //     '🚀 ~ file: dom-tasks.js:193 ~ focusEl.addEventListener ~ taskIndex:',
    //     taskIndex
    //   );
    //   focusEl.addEventListener('click', () => {
    //     // Toggle focus icon
    //     projects.updateTaskinProject(
    //       thisProject,
    //       taskIndex,
    //       'focus',
    //       focusIcon === '🫥'
    //     );
    //     resolve();
    //   });

    //   statusEl.addEventListener('change', () => {
    //     projects.updateTaskinProject(
    //       thisProject,
    //       taskIndex,
    //       'status',
    //       global.status[statusEl.selectedIndex]
    //     );
    //     resolve();
    //   });

    //   descriptionEl.addEventListener('change', () => {
    //     projects.updateTaskinProject(
    //       thisProject,
    //       taskIndex,
    //       'description',
    //       descriptionEl.value
    //     );
    //     resolve();
    //   });

    //   // Use blur instead of change, so it does not fire too soon
    //   startDateEl.addEventListener('blur', () => {
    //     projects.updateTaskinProject(
    //       thisProject,
    //       taskIndex,
    //       'startDate',
    //       startDateEl.value
    //     );
    //     resolve();
    //   });

    //   // Use blur instead of change, so it does not fire too soon
    //   dueDateEl.addEventListener('blur', () => {
    //     projects.updateTaskinProject(
    //       thisProject,
    //       taskIndex,
    //       'dueDate',
    //       dueDateEl.value
    //     );
    //     resolve();
    //   });

    //   projectDropDownEl.addEventListener('change', () => {
    //     projects.updateTaskinProject(
    //       thisProject,
    //       taskIndex,
    //       'projectIndex',
    //       projectDropDownEl.selectedIndex
    //     );

    //     projects.moveTasktoProject(
    //       thisProject,
    //       taskIndex,
    //       projects.projects[projectDropDownEl.selectedIndex]
    //     );
    //     resolve();
    //   });

    //   delBtn.addEventListener('click', () => {
    //     // Call from projects to delete the task
    //     // so that the local storage is updated after the deletion
    //     projects.deleteTaskFromProject(taskIndex, thisProject);
    //     resolve();
    //   });
  });
};

export { addNewTask, taskListClickHandler };
