import List from "./list";

const newTaskDialog = document.querySelector('#new-task');
const newListDialog = document.querySelector('#new-list');
const navbarMain = document.querySelector('.navbar-main');
const viewMain = document.querySelector('.view-main');
const listNameDisplay = document.querySelector('.list-name');

function ListManager()
{
    const lists = [];
    let selectedListIndex = null;

    let Initialize = () =>
    {
        const newListButton = document.querySelector('#new-list-button');
        newListButton.addEventListener('click' , () => newListDialog.showModal());
        const newListForm = document.querySelector('#new-list-form');
        newListForm.addEventListener('submit', (e) => {
            e.preventDefault();
            newListDialog.close();
            const formData = Object.fromEntries(new FormData(newListForm));
            AddList(formData.listTitle);
            newListForm.reset();
        });
        const newTaskForm = document.querySelector('#new-task-form');
        newTaskForm.addEventListener('submit', (e) => {
            e.preventDefault();
            newTaskDialog.close();
            const formData = Object.fromEntries(new FormData(newTaskForm));
            lists[selectedListIndex].AddTask(formData.taskTitle);
            newTaskForm.reset();
        });

        DisplayAllLists();
    }

    let AddList = (name) =>
    {
        lists.push(List(name));
        selectedListIndex = lists.length-1;
        DisplayAllLists();
    }

    let DeleteList = (index) =>
    {
        if(index==selectedListIndex)
        {
            selectedListIndex = 0;
        }
        else if(index < selectedListIndex)
        {
            selectedListIndex--;
        }
        lists.splice(index,1);
        DisplayAllLists();
    }

    let ChangeSelectedList = (index) =>
    {
        if(index!=selectedListIndex)
        {
            selectedListIndex = index;
            DisplayAllLists();
        }
    }

    let DisplayAllLists = () =>
    {
        navbarMain.innerHTML = "";
        lists.forEach((list, index) => 
        {
            list.DisplayMain(navbarMain, DeleteList, ChangeSelectedList ,index);
        })
        if(lists.length>0)
        {
            lists[selectedListIndex].DisplayAllTasks();
        }
        else
        {
            viewMain.innerHTML = "";
            listNameDisplay.innerText = "Create a list";
        }
    }

    return {Initialize, AddList, DeleteList, DisplayAllLists};
}

const LM = ListManager();
LM.Initialize();
LM.AddList("Default");

//testing