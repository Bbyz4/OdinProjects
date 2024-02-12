import List from "./list";

const newListDialog = document.querySelector('#new-list');
const navbarMain = document.querySelector('.navbar-main');

function ListManager()
{
    const lists = [];

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

        DisplayAllLists();
    }

    let AddList = (name) =>
    {
        lists.push(List(name));
        DisplayAllLists();
    }

    let DisplayAllLists = () =>
    {
        navbarMain.innerHTML = "";
        lists.forEach((list) => 
        {
            list.DisplayMain(navbarMain);
        })
    }

    return {Initialize, AddList, DisplayAllLists};
}

const LM = ListManager();
LM.Initialize();
LM.AddList("Default");