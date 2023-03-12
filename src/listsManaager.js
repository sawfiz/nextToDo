import Task from './task';
import List from './list';

const listsManager = () => {
  console.log('Next To Do is great');

  const inbox = List('Inbox');

  inbox.printTasks();
  const task = Task(
    'Do this',
    'This needs to be done',
    '2023-03-12',
    'Not started'
    );
    console.log("Add a task to inbox");
    inbox.addTask(task);
    
    const task2 = Task(
      'Do this 2',
      'This needs to be done',
      '2023-03-12',
      'Not started'
      );
      
      console.log("Add a task to inbox");
  inbox.addTask(task2);

  console.log("Initial project");
  const project = List('project');
  project.printTasks();
  
  console.log("Move tasks2 to project");
  inbox.moveTask(task2, project);
  
  console.log("Remove tasks2 from inbox");
  inbox.removeTask(task);
};

export default listsManager;

