import {CurrencyIcon} from '@ya.praktikum/react-developer-burger-ui-components';
import cardStyle from './burgerCard.module.css';
import { Counter } from '@ya.praktikum/react-developer-burger-ui-components';
import { useDispatch } from 'react-redux';
import { viewIngredientDetails } from '../../features/ingredientsDetails/ingredientsDetailsSlice';
import { openPopup } from '../../features/popup/popupSlice';
import { useDrag } from 'react-dnd';


function BurgerCard({ burgerCard }) {
  const dispatch = useDispatch();
  
  const [, dragRef] = useDrag({
    type: 'constructor',
    item: burgerCard,
  });

  const onClickIngredient = (burgerCard) => {
    dispatch(viewIngredientDetails({}));//очищаем данные
    dispatch(viewIngredientDetails(burgerCard));//запихиваем новые данные
    dispatch(openPopup(true));//открываем попап
  }

  
  return (
    <li className={`${cardStyle.cardSize}`} ref={dragRef}>
      <Counter count={burgerCard.counter} size="default" />
      <img src={burgerCard.image} alt={burgerCard.name} className={`ml-4 mr-4 ${cardStyle.cardImage}`} onClick={() =>
        onClickIngredient(burgerCard)
      } /> 
      <div className={`${cardStyle.cardPrice}`}>
        <p className={`text text_type_digits-default mr-2`}>{burgerCard.price}</p>
        <CurrencyIcon type="primary" />
      </div>
      <div className={`${cardStyle.cardTitle}`}>
        <p className={`text text_type_main-default ${cardStyle.cardTitleText}`}>{burgerCard.name}</p>
      </div>
    </li>
  )
}


export default BurgerCard