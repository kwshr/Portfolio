import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const Root = () => (
  <div>
     <h1>my portfolio</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Root />);
