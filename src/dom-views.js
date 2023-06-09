/* eslint-disable comma-dangle */
/* eslint-disable no-param-reassign */
import { updateTasksDisplay } from './dom-updateTasksDisplay';
import { isOnOrBefore } from './utils';

const todayClickHandler = (projects) => {
  const list = [];
  projects.projects.forEach((project) => {
    project.tasks.forEach((task, index) => {
      if (isOnOrBefore(task.startDate, 0) || isOnOrBefore(task.dueDate, 0)) {
        task.taskIndex = index;
        list.push(task);
      }
    });
  });
  localStorage.setItem('list', JSON.stringify(list));
  updateTasksDisplay(list, true);
};

const next7daysClickHandler = (projects) => {
  const list = [];
  projects.projects.forEach((project) => {
    project.tasks.forEach((task, index) => {
      if (isOnOrBefore(task.startDate, 7) || isOnOrBefore(task.dueDate, 7)) {
        task.taskIndex = index;
        list.push(task);
      }
    });
  });
  localStorage.setItem('list', JSON.stringify(list));
  updateTasksDisplay(list, true);
};

const undatedClickHandler = (projects) => {
  const list = [];
  projects.projects.forEach((project) => {
    project.tasks.forEach((task, index) => {
      if (!task.startDate && !task.dueDate) {
        task.taskIndex = index;
        list.push(task);
      }
    });
  });
  localStorage.setItem('list', JSON.stringify(list));
  updateTasksDisplay(list, true);
};

const completedClickHandler = (projects) => {
  const list = [];
  projects.projects.forEach((project) => {
    project.tasks.forEach((task, index) => {
      if (task.status === 'dDone') {
        task.taskIndex = index;
        list.push(task);
      }
    });
  });
  localStorage.setItem('list', JSON.stringify(list));
  // This call makes the use of the last parameter, sets showCompleted = true
  updateTasksDisplay(list, true, true);
};

const allTasksClickHandler = (projects) => {
  const list = [];
  projects.projects.forEach((project) => {
    project.tasks.forEach((task, index) => {
      task.taskIndex = index;
      list.push(task);
    });
  });
  localStorage.setItem('list', JSON.stringify(list));
  updateTasksDisplay(list, true);
};

const searchClickHandler = (projects, text) => {
  const list = [];
  projects.projects.forEach((project) => {
    project.tasks.forEach((task) => {
      if (task.description.toLowerCase().includes(text.toLowerCase())) list.push(task);
    });
  });
  localStorage.setItem('list', JSON.stringify(list));
  updateTasksDisplay(list, true);
};

export {
  todayClickHandler,
  next7daysClickHandler,
  undatedClickHandler,
  completedClickHandler,
  allTasksClickHandler,
  searchClickHandler
};
