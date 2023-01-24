import {useState} from 'react';
import Form from './Form';
import List from './List';

const ToDo = (props) => {
    const [newTask, setNewTask] = useState('');
    const [taskList, setTaskList] = useState([
        'Buy Milk',
        'Practice React'
    ]);

    return (
        <section>
            <h2>{props.heading}</h2>
            <Form
                newTask={newTask}
                setNewTask={setNewTask}
                setTaskList={setTaskList}
            />
            <List todos={taskList} />
        </section>
    );
};

export default ToDo;
