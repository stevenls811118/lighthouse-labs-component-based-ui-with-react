import { useState } from 'react';
import './Counter.css';

export default function Counter({heading}) { // heading = props.heading
    const [count, setCount] = useState(0);
    
    return (
        <section>
            <h2>{heading}</h2>
            <button className="counter" onClick={() => {setCount(prev => prev + 1);}}>
                Clicked {count} Times!
            </button>
        </section>
    );
}
