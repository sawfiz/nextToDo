/* eslint-disable comma-dangle */
import Task from './task';

function formatDate(date) {
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');
  return `${year}-${month}-${day}`;
}

function getDateFromDaysOffset(days) {
  const millisecondsPerDay = 1000 * 60 * 60 * 24;
  const currentDate = new Date();
  const offsetDate = new Date(
    currentDate.valueOf() + days * millisecondsPerDay
  );
  return formatDate(offsetDate);
}

const addSampleTasks = (projects) => {
  // Add tasks into Inbox
  let project = projects.projects[0];

  // Task 0
  let startDate = getDateFromDaysOffset(0);
  let dueDate = getDateFromDaysOffset(0);
  let task = Task(
    true,
    'aTodo',
    'Inbox task 0',
    startDate,
    dueDate,
    project.name,
    project.tasks.length
  );
  projects.addTaskToProject(task, project);

  // Task 1
  startDate = getDateFromDaysOffset(-7);
  dueDate = getDateFromDaysOffset(7);
  task = Task(
    false,
    'bDoing',
    'Inbox task 1',
    startDate,
    dueDate,
    project.name,
    project.tasks.length
  );
  projects.addTaskToProject(task, project);

  // Task 2
  startDate = getDateFromDaysOffset(3);
  dueDate = getDateFromDaysOffset(7);
  task = Task(
    true,
    'cWait',
    'Inbox task 2',
    startDate,
    dueDate,
    project.name,
    project.tasks.length
  );
  projects.addTaskToProject(task, project);

  // Task 3
  startDate = '';
  dueDate = '';
  task = Task(
    false,
    'dDone',
    'Inbox task 3',
    startDate,
    dueDate,
    project.name,
    project.tasks.length
  );
  projects.addTaskToProject(task, project);

  // Task 4
  startDate = getDateFromDaysOffset(-5);
  dueDate = getDateFromDaysOffset(-1);
  task = Task(
    true,
    'dDone',
    'Inbox task 4',
    startDate,
    dueDate,
    project.name,
    project.tasks.length
  );
  projects.addTaskToProject(task, project);

  // Create Project 1
  projects.addProject('Shopping List');
  project = projects.projects[1];

  // Task 0
  startDate = getDateFromDaysOffset(0);
  dueDate = getDateFromDaysOffset(0);
  task = Task(
    false,
    'aTodo',
    'Buy thing 0',
    startDate,
    dueDate,
    project.name,
    project.tasks.length
  );
  projects.addTaskToProject(task, project);

  // Task 1
  startDate = getDateFromDaysOffset(-7);
  dueDate = getDateFromDaysOffset(7);
  task = Task(
    true,
    'bDoing',
    'Buy thing 1',
    startDate,
    dueDate,
    project.name,
    project.tasks.length
  );
  projects.addTaskToProject(task, project);

  // Task 2
  startDate = getDateFromDaysOffset(2);
  dueDate = getDateFromDaysOffset(7);
  task = Task(
    false,
    'cWait',
    'Buy thing 2',
    startDate,
    dueDate,
    project.name,
    project.tasks.length
  );
  projects.addTaskToProject(task, project);

  // Task 3
  startDate = '';
  dueDate = '';
  task = Task(
    true,
    'dDone',
    'Buy thing 3',
    startDate,
    dueDate,
    project.name,
    project.tasks.length
  );
  projects.addTaskToProject(task, project);

  // Task 4
  startDate = getDateFromDaysOffset(-5);
  dueDate = getDateFromDaysOffset(-1);
  task = Task(
    false,
    'dDone',
    'Buy thing 4',
    startDate,
    dueDate,
    project.name,
    project.tasks.length
  );
  projects.addTaskToProject(task, project);

  // Task 5
  startDate = getDateFromDaysOffset(20);
  dueDate = getDateFromDaysOffset(30);
  task = Task(
    true,
    'dDone',
    'A future buy 5',
    startDate,
    dueDate,
    project.name,
    project.tasks.length
  );
  projects.addTaskToProject(task, project);

  // Create Project 2
  projects.addProject('The Odin Project');
  project = projects.projects[2];

  // Task 0
  startDate = getDateFromDaysOffset(0);
  dueDate = getDateFromDaysOffset(0);
  task = Task(
    true,
    'aTodo',
    'Feature 0',
    startDate,
    dueDate,
    project.name,
    project.tasks.length
  );
  projects.addTaskToProject(task, project);

  // Task 1
  startDate = getDateFromDaysOffset(-7);
  dueDate = getDateFromDaysOffset(7);
  task = Task(
    false,
    'bDoing',
    'Fix bug 1',
    startDate,
    dueDate,
    project.name,
    project.tasks.length
  );
  projects.addTaskToProject(task, project);

  // Task 2
  startDate = getDateFromDaysOffset(1);
  dueDate = getDateFromDaysOffset(7);
  task = Task(
    false,
    'cWait',
    'Read topic 2',
    startDate,
    dueDate,
    project.name,
    project.tasks.length
  );
  projects.addTaskToProject(task, project);

  // Task 3
  startDate = '';
  dueDate = '';
  task = Task(
    false,
    'dDone',
    'Bug fix 3',
    startDate,
    dueDate,
    project.name,
    project.tasks.length
  );
  projects.addTaskToProject(task, project);

  // Task 4
  startDate = getDateFromDaysOffset(-5);
  dueDate = getDateFromDaysOffset(-1);
  task = Task(
    true,
    'dDone',
    'Watch video 4',
    startDate,
    dueDate,
    project.name,
    project.tasks.length
  );
  projects.addTaskToProject(task, project);

  // Task 5
  startDate = getDateFromDaysOffset(10);
  dueDate = getDateFromDaysOffset(17);
  task = Task(
    true,
    'dDone',
    'A future project 5',
    startDate,
    dueDate,
    project.name,
    project.tasks.length
  );
  projects.addTaskToProject(task, project);

  // Create Project 3
  projects.addProject('Keep fit');
  project = projects.projects[3];

  // Task 0
  startDate = getDateFromDaysOffset(0);
  dueDate = getDateFromDaysOffset(0);
  task = Task(
    true,
    'aTodo',
    'Jog 0',
    startDate,
    dueDate,
    project.name,
    project.tasks.length
  );
  projects.addTaskToProject(task, project);

  // Task 1
  startDate = getDateFromDaysOffset(-7);
  dueDate = getDateFromDaysOffset(7);
  task = Task(
    false,
    'bDoing',
    'Lift weights 1',
    startDate,
    dueDate,
    project.name,
    project.tasks.length
  );
  projects.addTaskToProject(task, project);

  // Task 2
  startDate = getDateFromDaysOffset(1);
  dueDate = getDateFromDaysOffset(7);
  task = Task(
    false,
    'cWait',
    'Cycle 2',
    startDate,
    dueDate,
    project.name,
    project.tasks.length
  );
  projects.addTaskToProject(task, project);

  // Task 3
  startDate = '';
  dueDate = '';
  task = Task(
    false,
    'dDone',
    'Sleep well 3',
    startDate,
    dueDate,
    project.name,
    project.tasks.length
  );
  projects.addTaskToProject(task, project);

  // Task 4
  startDate = getDateFromDaysOffset(-5);
  dueDate = getDateFromDaysOffset(-1);
  task = Task(
    true,
    'dDone',
    'Eat well 4',
    startDate,
    dueDate,
    project.name,
    project.tasks.length
  );
  projects.addTaskToProject(task, project);

  // Task 5
  startDate = getDateFromDaysOffset(10);
  dueDate = getDateFromDaysOffset(17);
  task = Task(
    true,
    'dDone',
    'Drink lots of water 5',
    startDate,
    dueDate,
    project.name,
    project.tasks.length
  );
  projects.addTaskToProject(task, project);
};

export default addSampleTasks;
