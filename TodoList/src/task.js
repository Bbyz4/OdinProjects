function Task(name)
{
    let taskName = name;
    let isDone = false;

    let ChangeStatus = () =>
    {
        isDone = !isDone;
    }

    return {ChangeStatus};
}

export default Task;