import React, { Children, useState } from 'react';
import AppHeader from '../AppHeader/AppHeader.jsx';
import styleApp from './app.module.css';
import BurgerIngredients  from '../BurgerIngredients/BurgerIngredients.jsx';
import BurgerConstructor from '../BurgerConstructor/BurgerConstructor.jsx';
import { getIngredients } from '../../utils/api.js';
import Popup from '../Popup/Popup.jsx';
import IngredientDetails from '../IngredientDetales/IngredientDetails.jsx';
import OrderDetales from '../OrderDetales/OrderDetales.jsx';

function App() {                                                          
  const [ingredients, setIngredients] = useState([]);
  React.useEffect(() => {//данные прилетают с сервера в момент монтирования
    getIngredients()
      .then((res) => setIngredients(res.data))
      .catch((err) => console.log(err))
  }, []);

  const [isPopupIngredientOpened, setIsPopupIngredientOpened] = useState(false);
  const [isPopupOrderOpened, setIsPopupOrderOpen] = useState(false);
  
  const popupClose = () => {
    setIsPopupIngredientOpened(false);
    setIsPopupOrderOpen(false);
  };
  
  const handleEscClose = (evt) => {
    evt.key === "Escape" && popupClose();
  };

  const [clickedIngredient, setClickedIngredient] = useState({});
  
  const popupContentIngredient = (ingredient) => {
    setClickedIngredient(ingredient);
    setIsPopupIngredientOpened(true);
  }
  
  const popupContentOrder = () => {
    setIsPopupOrderOpen(true);
  }
  

  return (
    <>
      <div className={styleApp.appBackground}>
        <AppHeader />
        <div className={styleApp.appContent}>
          <BurgerIngredients ingredients={ingredients} onClickIngredient={popupContentIngredient}/>
          <BurgerConstructor ingredients={ingredients} onOderClick={popupContentOrder}/>
        </div>
      </div>
      {isPopupIngredientOpened &&
        (<Popup onCloseClick={popupClose} onEscClose={handleEscClose}>
          <IngredientDetails ingredient={clickedIngredient}/>
        </Popup>
        )
      };
      {isPopupOrderOpened && (
        <Popup onCloseClick={popupClose} onEscClose={handleEscClose}>
          <OrderDetales/>
        </Popup>
        )
      };
      
    </>
    
  );
}

export default App;
