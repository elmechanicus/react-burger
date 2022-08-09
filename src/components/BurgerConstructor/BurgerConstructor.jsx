import {ConstructorElement, CurrencyIcon} from '@ya.praktikum/react-developer-burger-ui-components';
import ingredientsStyle from './burgerConstructor.module.css'; 
import { Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { useSelector, useDispatch } from 'react-redux';
import { addIngredient, removeIngredient, clearConstructor } from '../../features/burgerConstructor/burgerConstructorSlice';
import { plusCounter, minusCounter } from '../../features/burgerIngredients/burgerIngredientsSlice';
import { getOrderNumber, setOrderNumber } from '../../features/orderDetails/orderDetailsSlice';
import { openPopupOrder, closePopup, closePopupOrder } from '../../features/popup/popupSlice';
import OrderDetales from '../OrderDetales/OrderDetales.jsx';
import Popup from '../Popup/Popup.jsx';
import { useDrop } from 'react-dnd';
import ConstructorCard from '../ConstructorCard/ConstructorCard';
import { useCallback, useMemo } from 'react';


function BurgerConstructor() {
  const dispatch = useDispatch();
  const isPopupOrder = useSelector(state => state.popup.popupOrder.isPopupOpened);
  const ingredientsConstructor = useSelector(state => state.burgerConstructor.selectedIngredients);
  const cardIds = ingredientsConstructor.map(item => { return item._id });
  
  const popupClose = () => {
    dispatch(closePopup(false));
    dispatch(closePopupOrder(false));
  };
  
  const handleEscClose = (evt) => {
    evt.key === "Escape" && popupClose();
  };
  const popupContentOrder = (ingredientsListIds) => {
    dispatch(setOrderNumber(null));//очищаем номер заказа
    dispatch(getOrderNumber(ingredientsListIds));//получаем новый номер
    dispatch(openPopupOrder(true));//открываем попап
  }

  const [, dropRef] = useDrop({
    accept: 'constructorOfBurger',
    drop(burgerCard) {
      addIngredientHandler(burgerCard);
    }
  })

  const moveBurgerListElement = useCallback((dragIndex, hoverIndex) => {
    const dragElement = ingredientsConstructor[dragIndex];
    const hoverElement = ingredientsConstructor[hoverIndex];
    const updatedConstructor = [...ingredientsConstructor];
    updatedConstructor[dragIndex] = hoverElement;
    updatedConstructor[hoverIndex] = dragElement;
    dispatch(clearConstructor());
    updatedConstructor.forEach(element=>dispatch(addIngredient(element)))
  }, [ingredientsConstructor, dispatch],
  )

  const addIngredientHandler = (card) => {
    if (card.type === 'bun' && ingredientsConstructor.length === 0) {//если прилетает булка и конструктор пустой
      addIngredientCard(card);
    } else if (card.type === 'bun' && ingredientsConstructor.length > 0 && card._id !== ingredientsConstructor[ingredientsConstructor.findIndex(ingredient => ingredient.type === 'bun')]._id ) { //если прилетает булка, конструктор НЕ пустой и НЕ совпадают IDшники
      dispatch(removeIngredient(ingredientsConstructor[ingredientsConstructor.findIndex(ingredient => ingredient.type === 'bun')].constructorId));//удаляем булку
      dispatch(minusCounter(ingredientsConstructor[ingredientsConstructor.findIndex(ingredient => ingredient.type === 'bun')]._id));//минусуем счётчик
      addIngredientCard(card);
    } else if (card.type === 'bun' && ingredientsConstructor.length > 0 && card._id === ingredientsConstructor[ingredientsConstructor.findIndex(ingredient => ingredient.type === 'bun')]._id) {//если прилетает булка, конструктор не пустой и совпадают IDшники
      alert('Эта булочка уже выбрана!');
    }
    if (card.type !== 'bun') {
      addIngredientCard(card);
    }
  }

  const addIngredientCard = (card) => {
    const cardOfElement = {...card, constructorId: (Math.random() * 100000).toFixed(0)}
    dispatch(addIngredient(cardOfElement));//вставляем
    dispatch(plusCounter(cardOfElement._id));//плюсуем счётчик
  }

  //получим суммарный чек
  const summaryPrice = useMemo(() => {
    ingredientsConstructor.map(item => {
      return item.type === 'bun' ? item.price * 2 : item.price
    }).reduce((price, currentPrice) => {
      return price + currentPrice
    }, 0);
  }, [ingredientsConstructor]);
  

  

  return (
    <>
      <ul className={`${ingredientsStyle.grid} ml-10 pt-25 pl-4`}>
          <div ref={dropRef}>
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

            <li className={`${ingredientsStyle.dragIcon}`} >
              <div className={`${ingredientsStyle.overflow}`}>
                <div className='pr-2' >
                  {ingredientsConstructor.map((item, index) => {
                    for (let i = 0; i < ingredientsConstructor.length; i++) {
                      if (item.type !== 'bun') {
                        return <ConstructorCard
                          cardElement={item}
                          index={index}
                          key={item.constructorId}
                          moveListElement={moveBurgerListElement}
                        />
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
          </div>
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

      {isPopupOrder && (
        <Popup onEscClose={handleEscClose}>
          <OrderDetales />
        </Popup>
        )
      }
    </>
  )
}


export default BurgerConstructor;

