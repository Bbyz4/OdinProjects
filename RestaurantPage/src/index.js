import LoadHome from "./home";
import LoadMenu from "./menu";
import LoadContact from "./contact";

const content = document.getElementById('content');
let tabs = Array.from(document.querySelectorAll('button'));

tabs[0].addEventListener('click', () => 
{
    content.innerHTML = "";
    content.append(LoadHome());
});

tabs[1].addEventListener('click', () => 
{
    content.innerHTML = "";
    content.append(LoadMenu());
});

tabs[2].addEventListener('click', () => 
{
    content.innerHTML = "";
    content.append(LoadContact());
});

content.append(LoadHome());