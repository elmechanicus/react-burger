import { useState, useEffect } from 'react';
import AppHeader from '../AppHeader/AppHeader.jsx';
import styleApp from './app.module.css';
import BurgerIngredients  from '../BurgerIngredients/BurgerIngredients.jsx';
import BurgerConstructor from '../BurgerConstructor/BurgerConstructor.jsx';
import { getIngredients, getNumberOrder } from '../../utils/api.js';
import { IngredientsContext } from '../../utils/ingredientsContext.js';
import { OrderNumberContext } from '../../utils/orderContext.js';
import Popup from '../Popup/Popup.jsx';
import IngredientDetails from '../IngredientDetales/IngredientDetails.jsx';
import OrderDetales from '../OrderDetales/OrderDetales.jsx';
import { useSelector, useDispatch } from 'react-redux';
import { closePopup } from '../../features/popup/popupSlice';

function App() {
  const [ingredients, setIngredients] = useState([]);
  useEffect(() => {//данные прилетают с сервера в момент монтирования
    getIngredients()
      .then((res) => setIngredients(res.data))
      .catch((err) => console.log(err))
  }, []);

  const dispatch = useDispatch();
  
  const isPopup = useSelector(state => state.popup.isPopupOpened);

  const [isPopupOrderOpened, setIsPopupOrderOpen] = useState(false);
  
  const popupClose = () => {
    dispatch(closePopup(false));
    setOrderNumber(null);
    setIsPopupOrderOpen(false);
  };
  
  const handleEscClose = (evt) => {
    evt.key === "Escape" && popupClose();
  };
  
  const [orderNumber, setOrderNumber] = useState()

  const popupContentOrder = (ingredientsList) => {
    getNumberOrder({"ingredients": ingredientsList})
      .then(res => setOrderNumber(res.order.number))
      .catch(err => console.log(err))
    setIsPopupOrderOpen(true);
  }
  

  return (
    <>
      <div className={styleApp.appBackground}>
        <AppHeader />
        <div className={styleApp.appContent}>
          <IngredientsContext.Provider value={ingredients}>
            <BurgerIngredients />
            <BurgerConstructor onOderClick={popupContentOrder}/>
          </IngredientsContext.Provider>
        </div>
      </div>
      {isPopup &&
        (<Popup onEscClose={handleEscClose}>
          <IngredientDetails />
        </Popup>
        )
      };
      {isPopupOrderOpened && (
        <Popup onCloseClick={popupClose} onEscClose={handleEscClose}>
          <OrderNumberContext.Provider value={orderNumber}>
            <OrderDetales />
          </OrderNumberContext.Provider>
        </Popup>
        )
      };
      
    </>
    
  );
}

export default App;
