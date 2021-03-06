import React from 'react';
import PropTypes from 'prop-types';
import burgerStyles from './burgerIngredients.module.css';
import NavigationBar from '../NavigationBar/NavigationBar';
import BurgerCard from '../BurgerCard/BurgerCard';
import {objectIngredientPropTypes} from '../../utils/constants'

function BurgerIngredients(props) {
  const { ingredients, onClickIngredient } = props;
  return (
    <div className={`${burgerStyles.content}`}>
      <h1 className="text text_type_main-large mt-10 mb-5">Соберите бургер</h1>
      <NavigationBar />
      <div className={burgerStyles.scrollBar}>
        <div className={burgerStyles.overflow}>
          <h2 id='buns' className='text text_type_main-medium'>Булки</h2>
          <ul className={`pt-6 pb-10 pl-4 ${burgerStyles.gridCard}`}>
            {ingredients.map((element) => {
              if (element.type === "bun") return <BurgerCard burgerCard={element} key={element._id} onClickIngredient={onClickIngredient}/> 
              })
            }
          </ul>
          <h2 id='sauces' className='text text_type_main-medium'>Соусы</h2>
          <ul className={`pt-6 pb-10 pl-4 ${burgerStyles.gridCard}`}>
            {ingredients.map((element) => {
                if (element.type === "sauce") return <BurgerCard burgerCard={element} key={element._id} onClickIngredient={onClickIngredient}/> 
              })
            }
          </ul>
          <h2 id='fillings' className='text text_type_main-medium'>Начинки</h2>
          <ul className={`pt-6 pb-10 pl-4 ${burgerStyles.gridCard}`}>
            {ingredients.map((element) => {
                if (element.type === "main") return <BurgerCard burgerCard={element} key={element._id} onClickIngredient={onClickIngredient}/> 
              })
            }
          </ul>
        </div>
      </div>
    </div>
  )
}

BurgerIngredients.propTypes = {
  ingredients: PropTypes.arrayOf(objectIngredientPropTypes).isRequired,
  onClickIngredient: PropTypes.func.isRequired
}

export default BurgerIngredients;

