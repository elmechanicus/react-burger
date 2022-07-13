import React from 'react';
import PropTypes from 'prop-types';
import {ConstructorElement, DragIcon, CurrencyIcon} from '@ya.praktikum/react-developer-burger-ui-components';
import ingredientsStyle from './burgerConstructor.module.css'; 
import { Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { IngredientsContext } from '../../utils/ingredientsContext';


function BurgerConstructor({ onOderClick }) {
  const ingredients = React.useContext(IngredientsContext);
  const itemIds = ["60d3b41abdacab0026a733c6", "60d3b41abdacab0026a733d1", "60d3b41abdacab0026a733cf", "60d3b41abdacab0026a733d3", "60d3b41abdacab0026a733c9"]; //Пока эти данные будут захардкожены
  
  //отфильтруем массив объектов по массиву id-шников
  const ingredientsConstructor = ingredients.filter(ingredient => {
    for (let i = 0; i < itemIds.length; i++) {
      if (ingredient._id === itemIds[i]) { return ingredient }
    }
  })
  
  //соберём все цены ингредиентов в одном массиве
  const burgerConstructorPrice = ingredientsConstructor.map(item => {
    return item.price
  })

  //получим суммарный чек
  const summaryPrice = burgerConstructorPrice.reduce((price, currentPrice) => {
    return price + currentPrice
  }, 0);

  return (
    <>
      <ul className={`${ingredientsStyle.grid} ml-10 pt-25 pl-4 pr-4`}>
        <li className={`mb-4 ml-8`}>
          {ingredients.map((item) => {
            if (item.type === 'bun' && item._id === itemIds[0]) {
              
              return <ConstructorElement
                type="top"
                isLocked={true}
                text={`${item.name} (верх)`}
                price={item.price}
                thumbnail={item.image}
                key={item._id}
              />
            }
          })}
        </li>

        <li className={`${ingredientsStyle.dragIcon}`}>
          {
            ingredients.map((item) => {
              for (let i = 1; i < itemIds.length; i++) {
                if (item._id === itemIds[i]) {
                  return <div className={`mb-4 ${ingredientsStyle.gridDragIcon}`} key={`nobun${item._id}`}>
                    <DragIcon type="primary" />
                    <ConstructorElement
                    text={item.name}
                    price={item.price}
                    thumbnail={item.image}
                    key={item._id}
                    />
                  </div>
                }
              }
            })
          }
        </li>

        <li className={`ml-8 mb-10`}>
          {ingredients.map((item) => {
            if (item.type === 'bun' && item._id === itemIds[0]) {
              
              return <ConstructorElement
                type="bottom"
                isLocked={true}
                text={`${item.name} (низ)`}
                price={item.price}
                thumbnail={item.image}
                key={item._id}
              />
            }
          })}
        </li>
        <li className={`${ingredientsStyle.order}`}>
          <p className='text text_type_digits-medium'>{summaryPrice}
            <span className={`${ingredientsStyle.largeIcon}`}>
              <CurrencyIcon type="primary" />
            </span>
          </p>
          <div className='ml-10'>
            <Button type="primary" size="large" onClick={() => onOderClick(itemIds)}>Оформить заказ</Button>
          </div>
        </li>
      </ul>
      
    </>
  )
}

BurgerConstructor.propTypes = {
  onOderClick: PropTypes.func.isRequired
}


export default BurgerConstructor;

