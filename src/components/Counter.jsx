import {useState} from 'react';

const Counter = () => {
    const counterState = useState(0); // zero is default state
    const count = counterState[0]; // Current value of state
    const setCount = counterState[1]; // 

    const clickHandler = () => {
        // count++;
        setCount(count + 1); // Triggers a re-render on change.
        console.log('Clicked!', count + 1);
    };

    return (
        <button onClick={clickHandler}>
            Clicked {count} times!
        </button>
    );
};

export default Counter;
