import {CurrencyIcon} from '@ya.praktikum/react-developer-burger-ui-components';
import cardStyle from './burgerCard.module.css';
import { Counter } from '@ya.praktikum/react-developer-burger-ui-components';
import { useDispatch, useSelector } from 'react-redux';
import { plusCounter, minusCounter } from '../../features/burgerIngredients/burgerIngredientsSlice';
import { addIngredient, removeIngredient} from '../../features/burgerConstructor/burgerConstructorSlice';
import { viewIngredientDetails } from '../../features/ingredientsDetails/ingredientsDetailsSlice';
import { openPopup } from '../../features/popup/popupSlice';


function BurgerCard({ burgerCard }) {
  const dispatch = useDispatch();
  const ingredients = useSelector(state => state.burgerConstructor.selectedIngredients);


  const addIngredientHandler = (card) => {
    if (card.type === 'bun' && ingredients.length === 0) {//если прилетает булка и конструктор пустой
      addIngredientCard(card);
    } else if (card.type === 'bun' && ingredients.length > 0 && card._id !== ingredients[ingredients.findIndex(ingredient => ingredient.type === 'bun')]._id ) { //если прилетает булка, конструктор НЕ пустой и НЕ совпадают IDшники
      dispatch(removeIngredient(ingredients[ingredients.findIndex(ingredient => ingredient.type === 'bun')].constructorId));//удаляем булку
      dispatch(minusCounter(ingredients[ingredients.findIndex(ingredient => ingredient.type === 'bun')]._id));//минусуем счётчик
      addIngredientCard(card);
    } else if (card.type === 'bun' && ingredients.length > 0 && card._id === ingredients[ingredients.findIndex(ingredient => ingredient.type === 'bun')]._id) {//если прилетает булка, конструктор не пустой и совпадают IDшники
      alert('Эта булочка уже выбрана!');
    }
    if (card.type !== 'bun') {
      addIngredientCard(card);
    }
  }

  const addIngredientCard = (card) => {
    dispatch(addIngredient(card));//вставляем булку
    dispatch(plusCounter(card._id));//плюсуем счётчик
}



  const onClickIngredient = (burgerCard) => {
    dispatch(viewIngredientDetails({}));//очищаем данные
    dispatch(viewIngredientDetails(burgerCard));//запихиваем новые данные
    dispatch(openPopup(true));//открываем попап
  }

  
  return (
    <li className={`${cardStyle.cardSize}`}>
      <Counter count={burgerCard.counter} size="default" />
      <img src={burgerCard.image} alt={burgerCard.name} className={`ml-4 mr-4 ${cardStyle.cardImage}`} onClick={() =>
        onClickIngredient(burgerCard)
      } /> 
      <div className={`${cardStyle.cardPrice}`}>
        <p className={`text text_type_digits-default mr-2`}>{burgerCard.price}</p>
        <CurrencyIcon type="primary" />
      </div>
      <div className={`${cardStyle.cardTitle}`}>
        <p className={`text text_type_main-default ${cardStyle.cardTitleText}`} onClick={() => {
          addIngredientHandler(burgerCard);
        }}>{burgerCard.name}</p>
      </div>
    </li>
  )
}


export default BurgerCard