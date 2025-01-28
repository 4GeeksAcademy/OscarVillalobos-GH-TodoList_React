import React from 'react';
import ReactDOM from 'react-dom/client';

// Bootstrap

//https://www.youtube.com/watch?v=c_1WI1iLi3g&list=PLg8h8Ej1e8l3YF-GTW1gxmDISO-qt_RSk&index=2&ab_channel=CodersArts//

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

// index.css
import '../styles/index.css';

// Components
import Home from './components/Home.jsx';

// Render the app
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Home/>
  </React.StrictMode>
);
