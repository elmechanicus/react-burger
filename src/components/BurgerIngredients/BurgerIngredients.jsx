import React from 'react';
import {ConstructorElement, DragIcon} from '@ya.praktikum/react-developer-burger-ui-components';
import ingredientsStyle from './burgerIngredients.module.css';

function BurgerIngredients(props) {
  return (
    <ul className={`${ingredientsStyle.grid} ml-10 pt-25 pl-4 pr-4`}>
      <li className={`mb-4 ml-8 pl-6`}>
        <ConstructorElement 
          type="top"
          isLocked={true}
          text={`${props.ingredient[0].name} (верх)`}
          price={props.ingredient[0].price}
          thumbnail={props.ingredient[0].image}
        />
      </li>  
      <li className={`mb-4 pl-8 ${ingredientsStyle.dragIcon}`}>
        <DragIcon type="primary" />
        <ConstructorElement
          text={`${props.ingredient[1].name}`}
          price={props.ingredient[1].price}
          thumbnail={props.ingredient[1].image}
        />
      </li>
      <li className={`mb-4 ml-8 pl-6`}>
        <ConstructorElement
          type="bottom"
          isLocked={true}
          text={`${props.ingredient[0].name} (низ)`}
          price={props.ingredient[0].price}
          thumbnail={props.ingredient[0].image}
        />
      </li>
      
    </ul>  
  )
}

export default BurgerIngredients;

