import Task from "./task";

const newTaskDialog = document.querySelector('#new-task');
const listNameDisplay = document.querySelector('.list-name');
const viewMain = document.querySelector('.view-main');

function List(name)
{
    let listName = name;
    let tasks = [];

    let AddTask = (name) =>
    {
        tasks.push(Task(name));
        console.log(name, listName);
        DisplayTasks();
    }

    let DeleteTask = (name) =>
    {
        //deleting
    }

    let DisplayMain = (navbarMain, DeleteList, listID) =>
    {
        let container = document.createElement('div');
        container.classList.add('listcontainer');
        let listText = document.createElement('p');
        listText.innerText = listName;
        let listDeleteButton = document.createElement('button');
        listDeleteButton.innerHTML = `<span class="material-symbols-outlined">
        delete
        </span>`;
        listDeleteButton.addEventListener('click', () => {
            DeleteList(listID);
        });
        let listEditButton = document.createElement('button');
        listEditButton.innerHTML = `<span class="material-symbols-outlined">
        edit
        </span>`;

        let listButtons = document.createElement('div');
        listButtons.append(listEditButton, listDeleteButton);
        container.append(listText, listButtons);
        navbarMain.append(container);
    }

    let DisplayTasks = () => 
    {
        viewMain.innerHTML = "";
        listNameDisplay.innerText = listName
        tasks.forEach((task) => 
        {
            let container = document.createElement('div');
            container.classList.add('taskcontainer');
            let taskTitle = document.createElement('p');
            taskTitle.innerText = task.taskName;
            viewMain.append(container);
        });
        let emptyContainer = document.createElement('div');
        emptyContainer.classList.add('emptytaskcontainer');
        let newTaskButton = document.createElement('button');
        newTaskButton.innerText = "+";
        emptyContainer.append(newTaskButton);
        newTaskButton.addEventListener('click', () => newTaskDialog.showModal());
        viewMain.append(emptyContainer);
    }

    return {AddTask, DeleteTask, DisplayMain, DisplayTasks};
}

export default List;