import updateTasksDisplay from './dom-updateTasksDisplay';
import { isBefore } from './utils';

const todayClickHandler = (projects) => {
  const list = [];
  projects.projects.forEach((project) => {
    project.tasks.forEach((task) => {
      if (isBefore(task.startDate, 0) || isBefore(task.dueDate, 0)) {
        list.push(task);
      }
    });
  });
  updateTasksDisplay(projects, list, true);
};

const next7daysClickHandler = (projects) => {
  const list = [];
  projects.projects.forEach((project) => {
    project.tasks.forEach((task) => {
      if (isBefore(task.startDate, 7) || isBefore(task.dueDate, 7)) {
        list.push(task);
      }
    });
  });
  updateTasksDisplay(projects, list, true);
};

const completedClickHandler = (projects) => {
  const list = [];
  projects.projects.forEach((project) => {
    project.tasks.forEach((task) => {
      if (task.status === 'Done') {
        list.push(task);
      }
    });
  });
  updateTasksDisplay(projects, list, true);
}

const allTasksClickHandler = (projects) => {
  const list = [];
  projects.projects.forEach((project) => {
    project.tasks.forEach((task) => {

        list.push(task);

    });
  });
  updateTasksDisplay(projects, list, true);
}


export { todayClickHandler, next7daysClickHandler, completedClickHandler, allTasksClickHandler };
