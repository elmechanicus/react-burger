import BurgerIngredients from '../components/BurgerIngredients/BurgerIngredients';
import BurgerConstructor from '../components/BurgerConstructor/BurgerConstructor';
import styleHome from './home.module.css';
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";


export function HomePage() {
  return (
    <>
      <DndProvider backend={HTML5Backend}>
        <div className={styleHome.homeContent}>
          <BurgerIngredients />
          <BurgerConstructor />
        </div>
      </DndProvider>
    </>
  )
}
