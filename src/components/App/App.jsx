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
import { closePopup, closePopupOrder, openPopupOrder } from '../../features/popup/popupSlice';
import { viewIngredientDetails } from '../../features/ingredientsDetails/ingredientsDetailsSlice';

function App() {
  const [ingredients, setIngredients] = useState([]);
  useEffect(() => {//данные прилетают с сервера в момент монтирования
    getIngredients()
      .then((res) => setIngredients(res.data))
      .catch((err) => console.log(err))
  }, []);

  const dispatch = useDispatch();
  
  const isPopup = useSelector(state => state.popup.popupIngredient.isPopupOpened);

  const isPopupOrder = useSelector(state => state.popup.popupOrder.isPopupOpened);
  
  const popupClose = () => {
    dispatch(viewIngredientDetails({}));
    dispatch(closePopup(false));
    setOrderNumber(null);
    dispatch(closePopupOrder(false));
  };
  
  const handleEscClose = (evt) => {
    evt.key === "Escape" && popupClose();
  };
  
  const [orderNumber, setOrderNumber] = useState()

  const popupContentOrder = (ingredientsList) => {
    getNumberOrder({"ingredients": ingredientsList})
      .then(res => setOrderNumber(res.order.number))
      .catch(err => console.log(err))
    dispatch(openPopupOrder(true));
  }
  

  return (
    <>
      <div className={styleApp.appBackground}>
        <AppHeader />
        <div className={styleApp.appContent}>
          <IngredientsContext.Provider value={ingredients}>
            <BurgerIngredients />
            <BurgerConstructor onOrderClick={popupContentOrder}/>
          </IngredientsContext.Provider>
        </div>
      </div>
      {isPopup &&
        (<Popup onEscClose={handleEscClose}>
          <IngredientDetails />
        </Popup>
        )
      };
      {isPopupOrder && (
        <Popup onEscClose={handleEscClose}>
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
