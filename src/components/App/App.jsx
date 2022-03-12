import React from 'react';
import Button from '@ya.praktikum/react-developer-burger-ui-components'
import AppHeader from '../AppHeader/AppHeader.jsx';
import styleApp from './app.module.css'

function App() {
  return (
    <div className={styleApp.appBackground}>
      <AppHeader />
    
    </div>
  );
}

export default App;
