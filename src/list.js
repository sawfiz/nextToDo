const List = (name) => {
  const tasks = [];

  const printTasks = () => {
    console.log(`${name} has ${tasks.length} tasks: `)
    tasks.forEach((task) => {
      console.log(task.title);
    });
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

  // This getter is needed, as inbox.list returns undefined.
  // const getAllTasks = () => {
  //   return list;
  // };
  // The getter can be implemented in return{} below using `get`

  return {
    addTask,
    removeTask,
    moveTask,
    printTasks,
    get tasks() {
      return tasks;
    },
  };
};

export default List;
