import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

// import Header from './components/Header';
// import ParagraphWithProps from './components/ParagraphWithProps';
// import Counter from './components/Counter';
// import Counter2 from './components/Counter2';

import ToDo from './components/ToDo';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <ToDo heading="Our LHL To-Do List" />

    {/*<Header />*/} {/* Header() */}

    {/* <Counter2 />

    <Counter />

    <ParagraphWithProps text="Hi there! I am a P." />
    
    <ParagraphWithProps>
      This is enclosed text.
      <a href="https://google.com">Google.com</a>
    </ParagraphWithProps> */}
  </React.StrictMode>
);
