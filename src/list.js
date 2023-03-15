const List = (name, existingTasks = []) => {
  const tasks = existingTasks || [];
  console.log(`Create list ${name}`);

  const printTasks = () => {
    console.log(`${name} has ${tasks.length} tasks: `);
    tasks.forEach((task) => {
      console.log(task.title);
    });
  };

  const addTask = (task) => {
    tasks.push(task);
    // printTasks();
  };

  const removeTask = (index) => {
    console.log(`Remove task ${index}`);
    if (index !== -1) {
      // Make sure the task exists in the list
      tasks.splice(index, 1);
    }
    // printTasks();
  };

  const moveTask = (task, newList) => {
    removeTask(task);
    newList.addTask(task);
    // printTasks();
  };

  // const renameList = (newName) => {
  //   name = newName;
  // }

  return {
    get name() {
      return name;
    },
    set name(newName) {
      name = newName;
    },
    get tasks() {
      return tasks;
    },
    addTask,
    removeTask,
    moveTask,
    printTasks,
    // renameList,
  };
};

export default List;
