import Task from "./task";

function List(name)
{
    let listName = name;
    let tasks = [];

    let AddTask = (name) =>
    {
        //adding
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

    return {AddTask, DeleteTask, DisplayMain};
}

export default List;