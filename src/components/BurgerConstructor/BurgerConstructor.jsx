import React from 'react';
import PropTypes from 'prop-types';
import {ConstructorElement, DragIcon, CurrencyIcon} from '@ya.praktikum/react-developer-burger-ui-components';
import ingredientsStyle from './burgerConstructor.module.css'; 
import { Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { IngredientsContext } from '../../utils/ingredientsContext';
import { useSelector, useDispatch } from 'react-redux';
import { removeIngredient } from '../../features/burgerConstructor/burgerConstructorSlice';



function BurgerConstructor({ onOderClick }) {
  const ingredients = React.useContext(IngredientsContext);
  const dispatch = useDispatch();
  const itemIds = useSelector(state => state.burgerConstructor.selectedIngredients); //Пока эти данные будут захардкожены
  
  const removeIngredientHandler = (id) => {
    dispatch(removeIngredient(id));
  }

  //отфильтруем массив объектов по массиву id-шников
  const ingredientsConstructor = ingredients.filter(ingredient => {
    for (let i = 0; i < itemIds.length; i++) {
      if (ingredient._id === itemIds[i]) return ingredient
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
      <ul className={`${ingredientsStyle.grid} ml-10 pt-25 pl-4`}>
        <li className={`mb-4 ml-8 pr-4`}>
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
          <div className={`${ingredientsStyle.overflow}`}>
            <div className='pr-2'>
              {
              ingredients.map((item) => {
                for (let i = 1; i < itemIds.length; i++) {
                  if (item._id === itemIds[i]) {
                    return <div className={`mb-4 ${ingredientsStyle.gridDragIcon}`} key={`nobun${item._id}`}>
                            <DragIcon type="primary" />
                            <ConstructorElement
                              handleClose={()=>removeIngredientHandler(item._id)}
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
            </div>
          </div>
        </li>

        <li className={`ml-8 mb-10 mt-4 pr-4`}>
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

