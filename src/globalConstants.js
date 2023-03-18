// Constants related to task status
const status = ['aTodo', 'bDoing', 'cWait', 'dDone'];
const statusIcons = {
  aTodo: 'mdi-checkbox-blank-circle-outline',
  bDoing: 'mdi-circle-half-full',
  cWait: 'mdi-timer-sand',
  dDone: 'mdi-checkbox-marked-circle',
};

// Global elements referred to in multiple js files
const projectListEl = document.querySelector('.project-list');
const tasksListEl = document.querySelector('.task-list');

export { status, statusIcons, projectListEl, tasksListEl };
