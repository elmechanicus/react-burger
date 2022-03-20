import React from 'react';
import burgerStyles from './burgerConstructor.module.css';
import NavigationBar from '../NavigationBar/NavigationBar';
import BurgerCard from '../BurgerCard/BurgerCard';

function BurgerConctructor(props) {
  return (
    <div className={`${burgerStyles.content}`}>
      <h1 className="text text_type_main-large mt-10 mb-5">Соберите бургер</h1>
      <NavigationBar />
      <div className={burgerStyles.scrollBar}>
        <div className={burgerStyles.overflow}>
          <h2 className='text text_type_main-medium'>Булки</h2>
          <ul className={`pt-6 pb-10 pl-4 ${burgerStyles.gridCard}`}>
            {props.card.map((element) => {
                if (element.type === "bun") return <BurgerCard burgerCard={element} key={element._id} /> 
              })
            }
          </ul>
          <h2 className='text text_type_main-medium'>Соусы</h2>
          <ul className={`pt-6 pb-10 pl-4 ${burgerStyles.gridCard}`}>
            {props.card.map((element) => {
                if (element.type === "sauce") return <BurgerCard burgerCard={element} key={element._id} /> 
              })
            }
          </ul>
          <h2 className='text text_type_main-medium'>Начинки</h2>
          <ul className={`pt-6 pb-10 pl-4 ${burgerStyles.gridCard}`}>
            {props.card.map((element) => {
                if (element.type === "main") return <BurgerCard burgerCard={element} key={element._id} /> 
              })
            }
          </ul>
        </div>
      </div>
    </div>
  )
}



export default BurgerConctructor;

