import React from 'react';
import navigationStyle from './navigationBar.module.css'
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';

const NavigationBar = () => {
  const [current, setCurrent] = React.useState('one')
  return (
    <nav className={`${navigationStyle.navigation}`}>
      <Tab value="one" active={current === 'one'} onClick={setCurrent}>
        Булки
      </Tab>
      <Tab value="two" active={current === 'two'} onClick={setCurrent}>
        Соусы
      </Tab>
      <Tab value="three" active={current === 'three'} onClick={setCurrent}>
        Начинки
      </Tab>
    </nav>
  )
}

export default NavigationBar