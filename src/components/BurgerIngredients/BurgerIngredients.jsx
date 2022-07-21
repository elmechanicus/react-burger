import React from 'react';
import burgerStyles from './burgerIngredients.module.css';
import NavigationBar from '../NavigationBar/NavigationBar';
import BurgerCard from '../BurgerCard/BurgerCard';
import { IngredientsContext } from '../../utils/ingredientsContext';
import { useInView } from 'react-intersection-observer';




function BurgerIngredients() {
  const ingredients = React.useContext(IngredientsContext);

  const { ref: fillingsRef, inView: fillingsInView } = useInView({
    threshold: 0.52,
  });
  const { ref: saucesRef, inView: saucesInView } = useInView({
    threshold: 1,
  });
  const { ref: bunsRef, inView: bunsInView } = useInView({
    threshold: 0.2,
  });
  

  return (
    <div className={burgerStyles.content}>
      <h1 className="text text_type_main-large mt-10 mb-5">Соберите бургер</h1>
      <NavigationBar />
      <div className={`${burgerStyles.scrollBar} mt-10`}>
        {/* <div className={burgerStyles.overflow}> */}
          <h2 id='buns' className='text text_type_main-medium'>Булки{` ${bunsInView}`}</h2>
          <ul ref={bunsRef} className={`pt-6 pb-10 pl-4 ${burgerStyles.gridCard}`}>
            {ingredients.map((element) => {
              if (element.type === "bun") return <BurgerCard burgerCard={element} key={element._id} /> 
              })
            }
          </ul>
          <h2 id='sauces' className='text text_type_main-medium'>Соусы{` ${saucesInView}`}</h2>
          <ul ref={saucesRef} className={`pt-6 pb-10 pl-4 ${burgerStyles.gridCard}`}>
            {ingredients.map((element) => {
                if (element.type === "sauce") return <BurgerCard burgerCard={element} key={element._id} /> 
              })
            }
          </ul>
          <h2  id='fillings' className='text text_type_main-medium'>Начинки{` ${fillingsInView}`}</h2>
          <ul ref={fillingsRef} className={`pt-6 pb-10 pl-4 ${burgerStyles.gridCard}`}>
            {ingredients.map((element) => {
                if (element.type === "main") return <BurgerCard burgerCard={element} key={element._id} /> 
              })
            }
          </ul>
        {/* </div> */}
      </div>
    </div>
  )
}



export default BurgerIngredients;

