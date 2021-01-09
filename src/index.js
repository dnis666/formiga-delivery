import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Header from './header'
import Menu from './menu';
import Home from './home'

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Home />
    <Menu />
  </React.StrictMode>,
  document.getElementById('root')
);
