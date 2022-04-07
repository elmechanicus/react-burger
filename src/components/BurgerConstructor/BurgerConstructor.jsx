import React from 'react';
import PropTypes from 'prop-types';
import {ConstructorElement, DragIcon, CurrencyIcon} from '@ya.praktikum/react-developer-burger-ui-components';
import ingredientsStyle from './burgerConstructor.module.css'; 
import { Button } from '@ya.praktikum/react-developer-burger-ui-components';

function BurgerConstructor({ ingredients }) {

  return (
    <>
      <ul className={`${ingredientsStyle.grid} ml-10 pt-25 pl-4 pr-4`}>
        <li className={`mb-4 ml-8`}>
          <ConstructorElement 
            type="top"
            isLocked={true}
            text={`${ingredients.name} (верх)`}
            price={ingredients.price}
            thumbnail={ingredients.image}
          />
        </li>  
        <li className={`mb-4 ${ingredientsStyle.dragIcon}`}>
          <DragIcon type="primary" />
          <ConstructorElement
            text={`${ingredients.name}`}
            price={ingredients.price}
            thumbnail={ingredients.image}
          />
        </li>
        <li className={`ml-8 mb-10`}>
          <ConstructorElement
            type="bottom"
            isLocked={true}
            text={`${ingredients.name} (низ)`}
            price={ingredients.price}
            thumbnail={ingredients.image}
          />
        </li>
        <li className={`${ingredientsStyle.order}`}>
          <p className='text text_type_digits-medium'>{ingredients.price * 2 + ingredients.price}<span className={`${ingredientsStyle.largeIcon}`}><CurrencyIcon type="primary" /></span></p>
          <div className='ml-10'>
            <Button type="primary" size="large">Нажми на меня</Button>
          </div>
        </li>
      </ul>
      
    </>
  )
}

BurgerConstructor.propTypes = {
  ingredients: PropTypes.arrayOf(PropTypes.object).isRequired
}


export default BurgerConstructor;

