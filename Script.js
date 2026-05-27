const taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const taskList = document.getElementById('taskList');

addBtn.addEventListener('click', () => {
    addTask();
});

taskInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        addTask();
    }
});

const addTask = () => {

    const taskText = taskInput.value.trim();

    if (taskText === '') {
        alert('Please enter a task before adding!');
        return;
    }

    const li = document.createElement('li');

    const span = document.createElement('span');
    span.textContent = taskText;

    span.addEventListener('click', () => {
        span.classList.toggle('completed');
    });

    const buttonContainer = document.createElement('div');
    buttonContainer.className = 'button-group';

    const editBtn = document.createElement('button');
    editBtn.textContent = 'Edit';
    editBtn.className = 'edit-btn';

    editBtn.addEventListener('click', (event) => {

        event.stopPropagation();

        const updatedTask = prompt('Edit your task:', span.textContent);

        if (updatedTask !== null && updatedTask.trim() !== '') {
            span.textContent = updatedTask;
        }

    });

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.className = 'delete-btn';

    deleteBtn.addEventListener('click', (event) => {
        event.stopPropagation();
        li.remove();
    });

    buttonContainer.appendChild(editBtn);
    buttonContainer.appendChild(deleteBtn);

    li.appendChild(span);
    li.appendChild(buttonContainer);

    taskList.appendChild(li);

    taskInput.value = '';
};
