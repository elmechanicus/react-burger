import AppHeader from '../AppHeader/AppHeader.jsx';
import styleApp from './app.module.css';
import BurgerIngredients  from '../BurgerIngredients/BurgerIngredients.jsx';
import BurgerConstructor from '../BurgerConstructor/BurgerConstructor.jsx';
import { useSelector, useDispatch } from 'react-redux';
import { closePopup, closePopupOrder } from '../../features/popup/popupSlice';
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";


function App() {

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
        
      
      
    </>
    
  );
}

export default App;
