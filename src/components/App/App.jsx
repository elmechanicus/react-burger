import React, { useState } from 'react';
import AppHeader from '../AppHeader/AppHeader.jsx';
import styleApp from './app.module.css';
import BurgerIngredients  from '../BurgerIngredients/BurgerIngredients.jsx';
import BurgerConstructor from '../BurgerConstructor/BurgerConstructor.jsx';
import { getIngredients } from '../../utils/api.js';
import Popup from '../Popup/Popup.jsx';
import IngredientDetales from '../IngredientDetales/IngredientDetales.jsx';
import OrderDetales from '../OrderDetales/OrderDetales.jsx';

function App() {                                                          
  const [ingredients, setIngredients] = useState([]);
  React.useEffect(() => {//данные прилетают с сервера в момент монтирования
    getIngredients()
      .then((res) => setIngredients(res.data))
      .catch((err) => console.log(err))
  }, []);

  const [isPopupOpened, setIsPopupOpened] = useState(false);
  const popupClose = () => { setIsPopupOpened(false) };
  const popupOpen = () => { setIsPopupOpened(true) };
  const handleEscClose = (evt) => {
    evt.key === "Escape" && popupClose();
  };

  const [clickedIngredient, setClickedIngredient] = useState({});
  const handleIngredientClick = (ingredient) => {
    setClickedIngredient(ingredient);
    popupOpen();
  }

  return (
    <>
      <div className={styleApp.appBackground}>
        <AppHeader />
        <div className={styleApp.appContent}>
          <BurgerIngredients ingredients={ingredients} onClickIngredient={handleIngredientClick}/>
          <BurgerConstructor ingredients={ingredients} onOpenClick={popupOpen} />
        </div>
      </div>
      {isPopupOpened &&
        (<Popup onCloseClick={popupClose} onEscClose={handleEscClose}>
        {/* <OrderDetales /> */}
        <IngredientDetales />
        </Popup>
        )
      };
      
    </>
    
  );
}

export default App;
