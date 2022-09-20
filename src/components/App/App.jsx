import AppHeader from '../AppHeader/AppHeader.jsx';
import styleApp from './app.module.css';
import BurgerIngredients  from '../BurgerIngredients/BurgerIngredients.jsx';
import BurgerConstructor from '../BurgerConstructor/BurgerConstructor.jsx';
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function App() {

  return (
    <Router>
      <Switch>
        <DndProvider backend={HTML5Backend}>
          <div className={styleApp.appBackground}>
            <AppHeader />
              <div className={styleApp.appContent}>
                <BurgerIngredients />
                <BurgerConstructor />
              </div>
            </div>
          </DndProvider> 
        </Switch>
      
    </Router>
  );
}

export default App;
