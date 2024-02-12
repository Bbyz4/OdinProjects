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

    let DisplayMain = (navbarMain) =>
    {
        let container = document.createElement('div');
        container.classList.add('listcontainer');
        let lt = document.createElement('p');
        lt.innerText = listName;
        container.append(lt);
        navbarMain.append(container);
        console.log(listName);
    }

    return {AddTask, DeleteTask, DisplayMain};
}

export default List;