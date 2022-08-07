import {ConstructorElement, DragIcon, CurrencyIcon} from '@ya.praktikum/react-developer-burger-ui-components';
import ingredientsStyle from './burgerConstructor.module.css'; 
import { Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { useSelector, useDispatch } from 'react-redux';
import { removeIngredient } from '../../features/burgerConstructor/burgerConstructorSlice';
import { minusCounter } from '../../features/burgerIngredients/burgerIngredientsSlice';
import { getOrderNumber, setOrderNumber } from '../../features/orderDetails/orderDetailsSlice';
import { openPopupOrder } from '../../features/popup/popupSlice';



function BurgerConstructor() {
  const dispatch = useDispatch();
  
  const ingredientsConstructor = useSelector(state => state.burgerConstructor.selectedIngredients);
  const cardIds = ingredientsConstructor.map(item => { return item._id });

  const removeIngredientHandler = (constructorId, ingredientId) => {
    dispatch(removeIngredient(constructorId));
    dispatch(minusCounter(ingredientId));
  }

  const popupContentOrder = (ingredientsListIds) => {
    dispatch(setOrderNumber(null));//очищаем номер заказа
    dispatch(getOrderNumber(ingredientsListIds));//получаем новый номер
    dispatch(openPopupOrder(true));//открываем попап
  }

  
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
          {ingredientsConstructor.map((item) => {
            if (item.type === 'bun') {
              return <ConstructorElement
                type="top"
                isLocked={true}
                text={`${item.name} (верх)`}
                price={item.price}
                thumbnail={item.image}
                key={item.constructorId}
              />
            }
          })}
        </li>

        <li className={`${ingredientsStyle.dragIcon}`}>
          <div className={`${ingredientsStyle.overflow}`}>
            <div className='pr-2'>
              {ingredientsConstructor.map((item) => {
                for (let i = 0; i < ingredientsConstructor.length; i++) {
                  if (item.type !== 'bun') {
                    return <div className={`mb-4 ${ingredientsStyle.gridDragIcon}`} key={item.constructorId}>
                            <DragIcon type="primary" />
                            <ConstructorElement
                              handleClose={()=>removeIngredientHandler(item.constructorId, item._id)}
                              text={item.name}
                              price={item.price}
                              thumbnail={item.image}
                              key={item.constructorId}
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
          {ingredientsConstructor.map((item) => {
            if (item.type === 'bun') {
              return <ConstructorElement
                type="bottom"
                isLocked={true}
                text={`${item.name} (низ)`}
                price={item.price}
                thumbnail={item.image}
                key={item.constructorId}
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
            <Button type="primary" size="large" onClick={() => popupContentOrder(cardIds)}>Оформить заказ</Button>
          </div>
        </li>
      </ul>
      
    </>
  )
}


export default BurgerConstructor;

