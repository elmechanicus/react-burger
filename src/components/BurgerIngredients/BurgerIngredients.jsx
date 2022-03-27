import React from 'react';
import PropTypes from 'prop-types';
import {ConstructorElement, DragIcon, CurrencyIcon} from '@ya.praktikum/react-developer-burger-ui-components';
import ingredientsStyle from './burgerIngredients.module.css'; 
import { Button } from '@ya.praktikum/react-developer-burger-ui-components';

function BurgerIngredients(props) {
  return (
    <>
      <ul className={`${ingredientsStyle.grid} ml-10 pt-25 pl-4 pr-4`}>
        <li className={`mb-4 ml-8`}>
          <ConstructorElement 
            type="top"
            isLocked={true}
            text={`${props.ingredient[0].name} (верх)`}
            price={props.ingredient[0].price}
            thumbnail={props.ingredient[0].image}
          />
        </li>  
        <li className={`mb-4 ${ingredientsStyle.dragIcon}`}>
          <DragIcon type="primary" />
          <ConstructorElement
            text={`${props.ingredient[1].name}`}
            price={props.ingredient[1].price}
            thumbnail={props.ingredient[1].image}
          />
        </li>
        <li className={`ml-8 mb-10`}>
          <ConstructorElement
            type="bottom"
            isLocked={true}
            text={`${props.ingredient[0].name} (низ)`}
            price={props.ingredient[0].price}
            thumbnail={props.ingredient[0].image}
          />
        </li>
        <li className={`${ingredientsStyle.order}`}>
          <p className='text text_type_digits-medium'>{props.ingredient[0].price * 2 + props.ingredient[1].price}<span className={`${ingredientsStyle.largeIcon}`}><CurrencyIcon type="primary" /></span></p>
          <div className='ml-10'>
            <Button type="primary" size="large">Нажми на меня</Button>
          </div>
        </li>
      </ul>
      
    </>
  )
}

BurgerIngredients.propTypes = {
  name: PropTypes.string,
  price: PropTypes.number,
  image: PropTypes.string,
}


export default BurgerIngredients;

