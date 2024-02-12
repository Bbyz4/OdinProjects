function Task(name)
{
    let taskName = name;
    let isDone = false;

    let ChangeStatus = () =>
    {
        isDone = !isDone;
    }

    return {taskName, ChangeStatus};
}

export default Task;