/* eslint-disable no-param-reassign */
const List = (name, existingTasks = []) => {
  const tasks = existingTasks || [];

  const printTasks = () => {
    tasks.forEach((task) => {
      // eslint-disable-next-line no-console
      console.log(task);
    });
  };

  const addTask = (task) => {
    tasks.push(task);
    // printTasks();
  };

  const removeTask = (index) => {
    if (index !== -1) {
      // Make sure the task exists in the list
      tasks.splice(index, 1);
    }
    // printTasks();
  };

  const moveTask = (index, newList) => {
    newList.addTask(tasks[index]);
    removeTask(index);
    // printTasks();
  };

  const updateTask = (index, attribute, value) => {
    console.log("🚀 ~ file: list.js:32 ~ updateTask ~ attribute, value:", attribute, value)
    switch (attribute) {
      case 'focus':
        tasks[index].focus = value;
        break;
      case 'status':
        tasks[index].status = value;
        break;
      case 'description':
        tasks[index].description = value;
        break;
      case 'startDate':
        tasks[index].startDate = value;
        break;
      case 'dueDate':
        tasks[index].dueDate = value;
        break;
      case 'projectName':
        tasks[index].projectName = value;
        break;

      default:
        break;
    }
    printTasks()
  };

  const updateAllTasks = (attribute, value) => {
    tasks.forEach((task, index) => {
      updateTask(index, attribute, value);
    });
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
    updateTask,
    updateAllTasks,
    removeTask,
    moveTask,
    printTasks,
    // renameList,
  };
};

export default List;
