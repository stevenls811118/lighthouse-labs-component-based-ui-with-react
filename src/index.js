import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import Header from './components/Header';
import ParagraphWithProps from './components/ParagraphWithProps';
import Counter from './components/Counter';
import Counter2 from './components/Counter2';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header /> {/* Header() */}

    <Counter2 />

    <Counter />

    <ParagraphWithProps text="Hi there! I am a P." />
    
    <ParagraphWithProps>
      This is enclosed text.
      <a href="https://google.com">Google.com</a>
    </ParagraphWithProps>
  </React.StrictMode>
);
