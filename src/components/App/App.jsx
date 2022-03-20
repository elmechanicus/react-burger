import React from 'react';

import AppHeader from '../AppHeader/AppHeader.jsx';
import styleApp from './app.module.css';
import BurgerConstructor from '../BurgerConstructor/BurgerConstructor.jsx';
import BurgerIngredients from '../BurgerIngredients/BurgerIngredients.jsx';
import { dataArray } from '../../utils/data.jsx';

function App() {
  const cardData = JSON.stringify(dataArray);
  const card = JSON.parse(cardData);
  return (
    <div className={styleApp.appBackground}>
      <AppHeader />
      <div className={styleApp.appContent}>
        <BurgerConstructor card={card}/>
        <BurgerIngredients ingredient={card}/>
      </div>
    </div>
  );
}

export default App;
