const tasks = [
  { id: '1', text: 'Buy milk', done: false },
  { id: '2', text: 'Pick up Tom from airport', done: false },
  { id: '3', text: 'Visit party', done: false },
  { id: '4', text: 'Visit doctor', done: true },
  { id: '5', text: 'Buy meat', done: true },
];

const listElem = document.querySelector('.list');

const renderTasks = tasksList => {
  listElem.innerHTML = '';

  const tasksElems = tasksList
    .sort((a, b) => a.done - b.done)
    .map(({ id, text, done }) => {
      const listItemElem = document.createElement('li');
      listItemElem.classList.add('list__item');
      const checkbox = document.createElement('input');
      checkbox.setAttribute('type', 'checkbox');
      checkbox.checked = done;
      checkbox.dataset.id = id;
      checkbox.classList.add('list__item-checkbox');
      if (done) {
        listItemElem.classList.add('list__item_done');
      }
      listItemElem.append(checkbox, text);

      return listItemElem;
    });

  listElem.append(...tasksElems);
};

renderTasks(tasks);

// create task
// create btn - onClick
// onSubmit => only form

// update task
// checkbox - click/change - не ок - на кожен елемент обработчик
// list - click - делегування подій - ПРІОРИТЕТ (але потрібно перевіряти чи клік саме на чекбокси) +++

// handleCreateTask, onCreateTask, CreateTaskHandler

// createTaskHandler
function onCreateTask() {
  const taskInputEl = document.querySelector('.task-input');
  if (!taskInputEl.value) {
    return;
  }

  tasks.push({ text: taskInputEl.value, done: false });
  taskInputEl.value = '';
  renderTasks(tasks);
}

const createBtnEl = document.querySelector('.create-task-btn');
createBtnEl.addEventListener('click', onCreateTask);

// validation first
// choose correct tool

// update
// algo
// 1. if not checkbox - end function
// 2. chech if task id === checkbox data id
// 3. update task

// updateTaskStatusHandler
const onUpdateTaskStatus = event => {
  if (!event.target.classList.contains('list__item-checkbox')) {
    return;
  }

  const foundedTask = tasks.find(task => task.id === event.target.dataset.id);
  foundedTask.done = !foundedTask.done;
  renderTasks(tasks);
};

listElem.addEventListener('click', onUpdateTaskStatus);
