import React from 'react';
import PropTypes from 'prop-types';
import {CurrencyIcon} from '@ya.praktikum/react-developer-burger-ui-components';
import cardStyle from './burgerCard.module.css';
import { Counter } from '@ya.praktikum/react-developer-burger-ui-components';
import { objectIngredientPropTypes } from '../../utils/constants';
import { useDispatch } from 'react-redux';
import { addIngredient } from '../../features/burgerConstructor/burgerConstructorSlice';


function BurgerCard(props) {
  const dispatch = useDispatch();
  
  const addIngredientHandler = () => {
    const ingredient = {
      id: burgerCard._id,
    }
    dispatch(addIngredient(ingredient));
  }
  
  const { burgerCard, onClickIngredient } = props;
  
  return (
    <li className={`${cardStyle.cardSize}`}>
      <Counter count={1} size="default" />
      <img src={burgerCard.image} alt={burgerCard.name} className={`ml-4 mr-4 ${cardStyle.cardImage}`} onClick={() => onClickIngredient(burgerCard)}  /> 
      <div className={`${cardStyle.cardPrice}`}>
        <p className={`text text_type_digits-default mr-2`}>{burgerCard.price}</p>
        <CurrencyIcon type="primary" />
      </div>
      <div className={`${cardStyle.cardTitle}`}>
        <p className={`text text_type_main-default ${cardStyle.cardTitleText}`} onClick={() => addIngredientHandler()}>{burgerCard.name}</p>
      </div>
    </li>
  )
}

BurgerCard.propTypes = {
  burgerCard: objectIngredientPropTypes,
  onClickIngredient: PropTypes.func.isRequired
}

export default BurgerCard