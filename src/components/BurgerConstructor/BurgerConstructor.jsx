import React from 'react';
import PropTypes from 'prop-types';
import {ConstructorElement, DragIcon, CurrencyIcon} from '@ya.praktikum/react-developer-burger-ui-components';
import ingredientsStyle from './burgerConstructor.module.css'; 
import { Button } from '@ya.praktikum/react-developer-burger-ui-components';
import {objectIngredientPropTypes} from '../../utils/constants'

function BurgerConstructor(props) {
  const { ingredients, onOderClick} = props;
  
  return (
    <>
      <ul className={`${ingredientsStyle.grid} ml-10 pt-25 pl-4 pr-4`}>
        <li className={`mb-4 ml-8`}>
          {ingredients.map((item) => {
            if (item._id === '60d3b41abdacab0026a733c6')
            return <ConstructorElement 
                    type="top"
                    isLocked={true}
                    text={`${item.name} (верх)`}
                    price={item.price}
                    thumbnail={item.image}
                    key={item._id}
                  />
          })}
          
        </li>  
        <li className={`mb-4 ${ingredientsStyle.dragIcon}`}>
          <DragIcon type="primary" />
          {ingredients.map((item) => {
            if (item._id === '60d3b41abdacab0026a733c9')
              return <ConstructorElement
                      text={`${item.name}`}
                      price={item.price}
                      thumbnail={item.image}
                      key={item._id}
                    />
          })}
          
        </li>
        <li className={`ml-8 mb-10`}>
          {ingredients.map((item) => {
            if (item._id === '60d3b41abdacab0026a733c6')
            return <ConstructorElement 
                    type="bottom"
                    isLocked={true}
                    text={`${item.name} (низ)`}
                    price={item.price}
                    thumbnail={item.image}
                    key={item._id}
                  />
          })}
        </li>
        <li className={`${ingredientsStyle.order}`}>
          <p className='text text_type_digits-medium'>{100500}<span className={`${ingredientsStyle.largeIcon}`}><CurrencyIcon type="primary" /></span></p>
          <div className='ml-10'>
            <Button type="primary" size="large" onClick={onOderClick}>Оформить заказ</Button>
          </div>
        </li>
      </ul>
      
    </>
  )
}

BurgerConstructor.propTypes = {
  ingredients: PropTypes.arrayOf(objectIngredientPropTypes).isRequired,
  onOderClick: PropTypes.func.isRequired
}


export default BurgerConstructor;

