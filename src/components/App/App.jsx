import React from 'react';
import AppHeader from '../AppHeader/AppHeader.jsx';
import styleApp from './app.module.css';
import BurgerConstructor from '../BurgerConstructor/BurgerConstructor.jsx';
import BurgerIngredients from '../BurgerIngredients/BurgerIngredients.jsx';
import { dataArray } from '../../utils/data.jsx';
import NavigationBar from '../NavigationBar/NavigationBar.jsx';

function App() {
  const cardData = JSON.stringify(dataArray);
  const cards = JSON.parse(cardData);
  console.log(cards);
  return (
    <div className={styleApp.appBackground}>
      <AppHeader />
      <div className={styleApp.appContent}>
        <BurgerConstructor card={cards}/>
        <BurgerIngredients ingredient={cards}/>
      </div>
    </div>
  );
}

export default App;
