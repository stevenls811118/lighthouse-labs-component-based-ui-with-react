const Form = (props) => {
    const handleSubmit = (event) => {
        event.preventDefault();
        props.setTaskList((prev) => {
            const newArr = [...prev, props.newTask];   
            return newArr;
        });
        props.setNewTask('');
    };

    const handleChange = (event) => {
        const newValue = event.target.value;
        props.setNewTask(newValue);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="new-task">
                Enter New To-Do:
                <input
                    id="new-task"
                    type="text"
                    value={props.newTask}
                    onChange={handleChange}
                />
            </label>
            <input type="submit" value="Add Task" />
        </form>
    );
};

export default Form;
