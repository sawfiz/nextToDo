const List = (name, existingTasks = []) => {
    const tasks = existingTasks || [];

    console.log(`Create list ${name} ${tasks}`);
  // }

  const saveTasks = () => {
    localStorage.projects = JSON.stringify(tasks);
  };

  const printTasks = () => {
    console.log(`${name} has ${tasks.length} tasks: `);
    tasks.forEach((task) => {
      console.log(task.title);
    });
    // saveTasks();
  };

  const addTask = (task) => {
    tasks.push(task);
    printTasks();
  };

  const removeTask = (task) => {
    const index = tasks.indexOf(task);
    if (index !== -1) {
      // Make sure the task exists in the list
      tasks.splice(index, 1);
    }
    printTasks();
  };

  const moveTask = (task, newList) => {
    removeTask(task);
    newList.addTask(task);
    printTasks();
  };

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
  };
};

export default List;
