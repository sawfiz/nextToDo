import './style.css';
import Task from './task';
import Projects from './projects';
import createElement from './createElement';

const screenController = () => {
  const projects = Projects();
  let activeProject = projects.inbox;

  const updateTasksDisplay = () => {
    const tasksListEl = document.querySelector('.tasks-list');
    tasksListEl.innerHTML = '';
    activeProject.tasks.forEach((task, index) => {
      const taskEl = createElement('div', ['task'], {}, '');
      const taskStatusEl = createElement('div', [], {}, task.status);
      taskEl.appendChild(taskStatusEl);
      const taskTitleEl = createElement(
        'div',
        [],
        {},
        `${task.title} ${index}`
      );
      taskEl.appendChild(taskTitleEl);
      const taskDescriptionEl = createElement('div', [], {}, task.description);
      taskEl.appendChild(taskDescriptionEl);
      const taskDueDateEl = createElement('div', [], {}, task.dueDate);
      taskEl.appendChild(taskDueDateEl);
      tasksListEl.appendChild(taskEl);
    });
  };

  // Event listener for the add task button
  const addTaskBtn = document.querySelector('.add-task');
  addTaskBtn.addEventListener('click', () => {
    const tasksListEl = document.querySelector('.tasks-list');
    const taskEl = createElement('div', ['new-task'], {}, '')
    const statusEl = createElement('input', [], {}, '')
    const titleEl = createElement('input', ['task-title'], {});
    const descriptionEl = createElement('input', [], {}, '')
    const dueDateEl = createElement('input', [], {'type': 'date'}, '')
    const submitBtn = createElement('button', [], {}, 'Submit')
    taskEl.appendChild(statusEl)
    taskEl.appendChild(titleEl)
    taskEl.appendChild(descriptionEl)
    taskEl.appendChild(dueDateEl)
    for (let i = 0; i < 3; i++) {
      taskEl.appendChild(createElement('div', [], {}, ''))
    }
    taskEl.appendChild(submitBtn)
    tasksListEl.appendChild(taskEl)
    titleEl.focus();

    submitBtn.addEventListener('click', () => {
      const task = Task(
        titleEl.value,
        descriptionEl.value,
        dueDateEl.value,
        statusEl.value,
      );
      projects.addTaskToProject(task, activeProject);
      updateTasksDisplay(activeProject);
    })

  });

  const updateProjectsDisplay = () => {
    const projectsListEl = document.querySelector('.projects-list');
    projectsListEl.innerHTML = '';
    projects.projects.forEach((project, index) => {
      const projectEl = createElement(
        'div',
        [],
        { style: 'cursor: pointer', 'data-id': index },
        `${project.name} ${index}`
      );
      // projectEl.dataset.id = index;
      projectsListEl.appendChild(projectEl);
    });
  };

  // Event listener for the add project button
  const addProjectBtn = document.querySelector('.add-project');
  addProjectBtn.addEventListener('click', () => {
    const projectListEl = document.querySelector('.projects-list');
    const projectEl = createElement('input', ['project-title'], {});
    projectListEl.appendChild(projectEl)
    projectEl.focus();

    projectEl.addEventListener('change', () => {
      projects.addProject(projectEl.value);
      activeProject = projects.projects[projects.projects.length - 1];
      updateProjectsDisplay();
      updateTasksDisplay(activeProject);
    })


  });

  // Event listener for Inbox
  const inboxEl = document.querySelector('.inbox');
  inboxEl.addEventListener('click', () => {
    activeProject = projects.inbox;
    updateTasksDisplay(activeProject);
  });

  // Event listener for Projects List
  const projectsEl = document.querySelector('.projects-list');
  projectsEl.addEventListener('click', (e) => {
    const index = e.target.dataset.id;
    activeProject = projects.projects[index];
    updateTasksDisplay(activeProject);
  });
};

export default screenController;
