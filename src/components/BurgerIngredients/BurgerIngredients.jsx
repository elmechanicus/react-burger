import {useState, useEffect} from 'react';
import burgerStyles from './burgerIngredients.module.css';
import NavigationBar from '../NavigationBar/NavigationBar';
import BurgerCard from '../BurgerCard/BurgerCard';
import { useSelector, useDispatch} from 'react-redux';
import { useInView } from 'react-intersection-observer';
import { fetchIngredients } from '../../features/burgerIngredients/burgerIngredientsSlice.js';
import Popup from '../Popup/Popup.jsx';
import IngredientDetails from '../IngredientDetales/IngredientDetails.jsx';
import { closePopup, closePopupOrder } from '../../features/popup/popupSlice';


function BurgerIngredients() {
  const dispatch = useDispatch();

  const ingredients = useSelector(state => state.burgerIngredients.ingredients);

  const isPopup = useSelector(state => state.popup.popupIngredient.isPopupOpened);

  const popupClose = () => {
    dispatch(closePopup(false));
    dispatch(closePopupOrder(false));
  };
  
  const handleEscClose = (evt) => {
    evt.key === "Escape" && popupClose();
  };

  useEffect(() => {
    dispatch(fetchIngredients());
  }, [dispatch])

  const [current, setCurrent] = useState('Булки');

  const { ref: fillingsRef, inView: fillingsInView } = useInView({
    threshold: 0.52,
    onChange: ()=>{changeScrollHandle()}
  });
  const { ref: saucesRef, inView: saucesInView } = useInView({
    threshold: 1,
    onChange: ()=>{changeScrollHandle()}
  });
  const { ref: bunsRef, inView: bunsInView } = useInView({
    threshold: 0.2,
    onChange: ()=>{changeScrollHandle()}
  });
  
  const changeScrollHandle = () => {
    if (bunsInView && !saucesInView && !fillingsInView) setCurrent('Булки');
    if (!bunsInView && saucesInView && !fillingsInView) setCurrent('Соусы');
    if (!bunsInView && !saucesInView && fillingsInView) setCurrent('Начинки');
  }
  
  
  return (
    <>
    <div className={burgerStyles.content}>
      <h1 className="text text_type_main-large mt-10 mb-5">Соберите бургер</h1>
      <NavigationBar current={current} setCurrent={setCurrent} />
      <div className={`${burgerStyles.scrollBar} mt-10`} >
          <h2 id='buns' className='text text_type_main-medium'>Булки</h2>
          <ul ref={bunsRef} className={`pt-6 pb-10 pl-4 ${burgerStyles.gridCard}`}>
            {ingredients.map((element) => {
              if (element.type === "bun") return <BurgerCard burgerCard={element} key={element._id}  />
              })
            }
          </ul>
          <h2 id='sauces' className='text text_type_main-medium'>Соусы</h2>
          <ul ref={saucesRef} className={`pt-6 pb-10 pl-4 ${burgerStyles.gridCard}`}>
            {ingredients.map((element) => {
              if (element.type === "sauce") return <BurgerCard burgerCard={element} key={element._id}  />
              })
            }
          </ul>
          <h2  id='fillings' className='text text_type_main-medium'>Начинки</h2>
          <ul ref={fillingsRef} className={`pt-6 pb-10 pl-4 ${burgerStyles.gridCard}`}>
            {ingredients.map((element) => {
              if (element.type === "main") return <BurgerCard burgerCard={element} key={element._id} /> 
              })
            }
          </ul>
      </div>
    </div>

    {isPopup &&
        (<Popup onEscClose={handleEscClose}>
          <IngredientDetails />
        </Popup>
        )
      }
    </>
  )
}


export default BurgerIngredients;