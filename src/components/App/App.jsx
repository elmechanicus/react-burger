import React from 'react';
import AppHeader from '../AppHeader/AppHeader.jsx';
import styleApp from './app.module.css';
import BurgerConstructor from '../BurgerIngredients/BurgerIngredients.jsx';
import BurgerIngredients from '../BurgerConstructor/BurgerConstructor.jsx';
import { dataArray } from '../../utils/data.jsx';

function App() {
  const cardData = JSON.stringify(dataArray);
  const cards = JSON.parse(cardData);
  // console.log(cards);
  return (
    <div className={styleApp.appBackground}>
      <AppHeader />
      <div className={styleApp.appContent}>
        <BurgerConstructor ingredients={cards} />
        <BurgerIngredients ingredients={cards} />
      </div>
    </div>
  );
}

export default App;
