import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import Counter from './components/Counter';
import ComponentWithChildren from './components/ComponentWithChildren';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <h1>React Practice</h1>
    
    {/* Counter({heading: "Our Second Counter"}) */}
    <Counter heading="Our Second Counter" />
    
    <ComponentWithChildren heading="This Component has Children">
      <p>This is a child element.</p>
      <Counter heading="Nested Counter" />
    </ComponentWithChildren>
  </React.StrictMode>
);
