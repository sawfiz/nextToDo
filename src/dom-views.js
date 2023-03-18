import {
  updateTasksListHeader,
  updateTasksDisplay,
} from './dom-updateTasksDisplay';
import { isBefore } from './utils';

const todayClickHandler = (projects) => {
  const list = [];
  projects.projects.forEach((project) => {
    project.tasks.forEach((task, index) => {
      if (isBefore(task.startDate, 0) || isBefore(task.dueDate, 0)) {
        task.taskIndex = index;
        list.push(task);
      }
    });
  });
  localStorage.setItem('list', JSON.stringify(list));
  updateTasksDisplay(projects, list, true);
};

const next7daysClickHandler = (projects) => {
  const list = [];
  projects.projects.forEach((project) => {
    project.tasks.forEach((task, index) => {
      if (isBefore(task.startDate, 7) || isBefore(task.dueDate, 7)) {
        task.taskIndex = index;
        list.push(task);
      }
    });
  });
  localStorage.setItem('list', JSON.stringify(list));
  updateTasksDisplay(projects, list, true);
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
  updateTasksDisplay(projects, list, true, true);
};

const completedClickHandler = (projects) => {
  const list = [];
  projects.projects.forEach((project) => {
    project.tasks.forEach((task, index) => {
      if (task.status === 'Done') {
        task.taskIndex = index;
        list.push(task);
      }
    });
  });
  localStorage.setItem('list', JSON.stringify(list));
  updateTasksDisplay(projects, list, true, true);
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
  updateTasksDisplay(projects, list, true);
};

export {
  todayClickHandler,
  next7daysClickHandler,
  undatedClickHandler,
  completedClickHandler,
  allTasksClickHandler,
};
