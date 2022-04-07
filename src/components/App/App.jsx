import React from 'react';
import AppHeader from '../AppHeader/AppHeader.jsx';
import styleApp from './app.module.css';
import BurgerConstructor from '../BurgerIngredients/BurgerIngredients.jsx';
import BurgerIngredients from '../BurgerConstructor/BurgerConstructor.jsx';
import { getIngredients } from '../../utils/api.js';
// import { dataArray } from '../../utils/data.jsx';

function App() {                                                          
  const [ingredients, setIngredients] = React.useState([]);
  React.useEffect(() => {
    getIngredients()
      .then((res) => setIngredients(res.data))
      .catch((err) => console.log(err))
  }, []);
  
  
  
  // const cardData = JSON.stringify(dataArray);
  // const cards = JSON.parse(cardData);
  return (
    <div className={styleApp.appBackground}>
      <AppHeader />
      <div className={styleApp.appContent}>
        <BurgerConstructor ingredients={ingredients} />
        <BurgerIngredients ingredients={ingredients} />
      </div>
    </div>
  );
}

export default App;
