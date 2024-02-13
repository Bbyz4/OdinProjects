function Task(name)
{
    let taskName = name;
    let isDone = false;

    let ChangeStatus = () =>
    {
        isDone = !isDone;
    }

    let DisplayTask = (viewMain, DeleteTask) =>
    {
        let container = document.createElement('div');
        container.classList.add('taskcontainer');
        let taskTitle = document.createElement('p');
        taskTitle.innerText = taskName;
        container.append(taskTitle);
        viewMain.append(container);
    }

    return {taskName, ChangeStatus, DisplayTask};
}

export default Task;