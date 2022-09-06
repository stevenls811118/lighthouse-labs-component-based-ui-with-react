import { useState } from 'react';
import './Counter.css';

function Counter(props) {
    const [count, setCount] = useState(0);
    
    return (
        <section>
            <h2>{props.heading}</h2>
            <button className="counter" onClick={() => {setCount(prev => prev + 1);}}>
                Clicked {count} Times!
            </button>
        </section>
    );
}

// Counter.propTypes = {
//     heading: PropTypes.string
// };

export default Counter;
