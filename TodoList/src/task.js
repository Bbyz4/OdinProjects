function Task(name)
{
    let taskName = name;
    let isDone = false;

    let ChangeStatus = () =>
    {
        isDone = !isDone;
    }

    let DisplayTask = (viewMain, DeleteTask, index, DisplayAllTasks) =>
    {
        let container = document.createElement('div');
        container.classList.add('taskcontainer');
        if(isDone)
        {
            container.classList.add('taskdone');
        }
        let taskTitle = document.createElement('p');
        taskTitle.innerText = taskName;

        let statusButton = document.createElement('button');
        statusButton.innerHTML = `<span class="material-symbols-outlined">
        done
        </span>`;
        statusButton.addEventListener('click', () => {
            ChangeStatus();
            DisplayAllTasks();
        });
        let removeButton = document.createElement('button');
        removeButton.innerHTML = `<span class="material-symbols-outlined">
        close
        </span>`;
        removeButton.addEventListener('click', () => DeleteTask(index));

        let taskButtons = document.createElement('div');
        taskButtons.append(statusButton, removeButton);
        container.append(taskTitle, taskButtons);
        viewMain.append(container);
    }

    return {taskName, ChangeStatus, DisplayTask};
}

export default Task;