import AppHeader from '../AppHeader/AppHeader.jsx';
import styleApp from './app.module.css';
import BurgerIngredients  from '../BurgerIngredients/BurgerIngredients.jsx';
import BurgerConstructor from '../BurgerConstructor/BurgerConstructor.jsx';
import Popup from '../Popup/Popup.jsx';
import IngredientDetails from '../IngredientDetales/IngredientDetails.jsx';
import OrderDetales from '../OrderDetales/OrderDetales.jsx';
import { useSelector, useDispatch } from 'react-redux';
import { closePopup, closePopupOrder } from '../../features/popup/popupSlice';
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";



function App() {
  const dispatch = useDispatch();

  const isPopup = useSelector(state => state.popup.popupIngredient.isPopupOpened);

  const isPopupOrder = useSelector(state => state.popup.popupOrder.isPopupOpened);
  
  const popupClose = () => {
    dispatch(closePopup(false));
    dispatch(closePopupOrder(false));
  };
  
  const handleEscClose = (evt) => {
    evt.key === "Escape" && popupClose();
  };
  

  return (
    <>
      <DndProvider backend={HTML5Backend}>
        <div className={styleApp.appBackground}>
          <AppHeader />
          <div className={styleApp.appContent}>
              <BurgerIngredients />
              <BurgerConstructor />
          </div>
        </div>
      </DndProvider>
        
      {isPopup &&
        (<Popup onEscClose={handleEscClose}>
          <IngredientDetails />
        </Popup>
        )
      }
      {isPopupOrder && (
        <Popup onEscClose={handleEscClose}>
          <OrderDetales />
        </Popup>
        )
      }
      
    </>
    
  );
}

export default App;
