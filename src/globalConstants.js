// Constants related to task status
const status = ['Todo', 'Doing', 'Wait', 'Done'];
const statusIcons = {
  Todo: '️⃝',
  Doing: '◐',
  Wait: '⏳',
  Done: '✅',
};

// Global elements referred to in multiple js files
const projectListEl = document.querySelector('.project-list');
const tasksListEl = document.querySelector('.task-list');

export { status, statusIcons, projectListEl, tasksListEl };
