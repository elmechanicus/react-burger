import React from 'react';
import PropTypes from 'prop-types';
import {CurrencyIcon} from '@ya.praktikum/react-developer-burger-ui-components';
import cardStyle from './burgerCard.module.css';
import { Counter } from '@ya.praktikum/react-developer-burger-ui-components';


function BurgerCard(props) {
  return (
    <li className={`${cardStyle.cardSize}`}>
      <Counter count={1} size="default" />
      <img src={props.burgerCard.image} alt={props.burgerCard.name} className={`ml-4 mr-4 ${cardStyle.cardImage}`} />
      <div className={`${cardStyle.cardPrice}`}>
        <p className={`text text_type_digits-default mr-2`}>{props.burgerCard.price}</p>
        <CurrencyIcon type="primary" />
      </div>
      <div className={`${cardStyle.cardTitle}`}>
        <p className={`text text_type_main-default ${cardStyle.cardTitleText}`}>{props.burgerCard.name}</p>
      </div>
    </li>
  )
}

BurgerCard.propTypes = {
  burgerCard: PropTypes.object.isRequired
}

export default BurgerCard