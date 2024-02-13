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
        DisplayAllTasks();
    }

    let DeleteTask = (index) =>
    {
        tasks.splice(index,1);
        DisplayAllTasks();
    }

    let DisplayMain = (navbarMain, DeleteList, ChangeSelectedList, listID) =>
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
        listEditButton.addEventListener('click', () => {
            ChangeSelectedList(listID);
        })

        let listButtons = document.createElement('div');
        listButtons.append(listEditButton, listDeleteButton);
        container.append(listText, listButtons);
        navbarMain.append(container);
    }

    let DisplayAllTasks = () => 
    {
        viewMain.innerHTML = "";
        listNameDisplay.innerText = listName
        tasks.forEach((task, index) => 
        {
            task.DisplayTask(viewMain, DeleteTask, index, DisplayAllTasks);
        });
        let emptyContainer = document.createElement('div');
        emptyContainer.classList.add('emptytaskcontainer');
        let newTaskButton = document.createElement('button');
        newTaskButton.innerText = "+";
        emptyContainer.append(newTaskButton);
        newTaskButton.addEventListener('click', () => newTaskDialog.showModal());
        viewMain.append(emptyContainer);
    }

    //testing
    AddTask("Test");

    return {AddTask, DeleteTask, DisplayMain, DisplayAllTasks};
}

export default List;