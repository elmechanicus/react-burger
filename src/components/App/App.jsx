import { useState, useEffect } from 'react';
import AppHeader from '../AppHeader/AppHeader.jsx';
import styleApp from './app.module.css';
import BurgerIngredients  from '../BurgerIngredients/BurgerIngredients.jsx';
import BurgerConstructor from '../BurgerConstructor/BurgerConstructor.jsx';
import { getNumberOrder } from '../../utils/api.js';
import { OrderNumberContext } from '../../utils/orderContext.js';
import Popup from '../Popup/Popup.jsx';
import IngredientDetails from '../IngredientDetales/IngredientDetails.jsx';
import OrderDetales from '../OrderDetales/OrderDetales.jsx';
import { useSelector, useDispatch } from 'react-redux';
import { closePopup, closePopupOrder, openPopupOrder } from '../../features/popup/popupSlice';
import { viewIngredientDetails } from '../../features/ingredientsDetails/ingredientsDetailsSlice';
import { fetchIngredients } from '../../features/burgerIngredients/burgerIngredientsSlice.js';


function App() {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(fetchIngredients());
  })

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
            <BurgerIngredients />
            <BurgerConstructor onOrderClick={popupContentOrder}/>
        </div>
      </div>
      {isPopup &&
        (<Popup onEscClose={handleEscClose}>
          <IngredientDetails />
        </Popup>
        )
      }
      {isPopupOrder && (
        <Popup onEscClose={handleEscClose}>
          <OrderNumberContext.Provider value={orderNumber}>
            <OrderDetales />
          </OrderNumberContext.Provider>
        </Popup>
        )
      }
      
    </>
    
  );
}

export default App;
