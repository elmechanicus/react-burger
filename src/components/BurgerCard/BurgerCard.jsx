import {CurrencyIcon} from '@ya.praktikum/react-developer-burger-ui-components';
import cardStyle from './burgerCard.module.css';
import { Counter } from '@ya.praktikum/react-developer-burger-ui-components';
import { useDispatch, useSelector } from 'react-redux';
import { addIngredient } from '../../features/burgerConstructor/burgerConstructorSlice';
import { viewIngredientDetails } from '../../features/ingredientsDetails/ingredientsDetailsSlice';
import { openPopup } from '../../features/popup/popupSlice';


function BurgerCard({ burgerCard }) {
  const dispatch = useDispatch();
  const isBun = useSelector(state => state.burgerConstructor.isBun);
  

  const addIngredientHandler = (card) => {
    if (isBun && card.type === 'bun') {
      console.log('Булочка уже выбрана!')
    } else dispatch(addIngredient(card));
  }

  const onClickIngredient = (burgerCard) => {
    dispatch(viewIngredientDetails({}));//очищаем данные
    dispatch(viewIngredientDetails(burgerCard));//запихиваем новые данные
    dispatch(openPopup(true));//открываем попап
  }

  
  return (
    <li className={`${cardStyle.cardSize}`}>
      <Counter count={1} size="default" />
      <img src={burgerCard.image} alt={burgerCard.name} className={`ml-4 mr-4 ${cardStyle.cardImage}`} onClick={() =>
        onClickIngredient(burgerCard)
      } /> 
      <div className={`${cardStyle.cardPrice}`}>
        <p className={`text text_type_digits-default mr-2`}>{burgerCard.price}</p>
        <CurrencyIcon type="primary" />
      </div>
      <div className={`${cardStyle.cardTitle}`}>
        <p className={`text text_type_main-default ${cardStyle.cardTitleText}`} onClick={() => addIngredientHandler(burgerCard)}>{burgerCard.name}</p>
      </div>
    </li>
  )
}


export default BurgerCard