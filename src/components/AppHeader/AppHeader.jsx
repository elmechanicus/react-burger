import React  from 'react';
import {Box} from '@ya.praktikum/react-developer-burger-ui-components';
import {Logo} from '@ya.praktikum/react-developer-burger-ui-components';
import {BurgerIcon, ListIcon, ProfileIcon} from '@ya.praktikum/react-developer-burger-ui-components';
import {Typography} from '@ya.praktikum/react-developer-burger-ui-components';
import headerStyles from './appHeader.module.css'


function AppHeader() {
  return (
    <header className={`pt-4 pb-4 ${headerStyles.header}`}>
      <div className={`${headerStyles.content}`}>
        <nav className={`${headerStyles.nav}`}>
          <div className={`${headerStyles.nav__link} pl-5 pr-5 pt-4 pb-4`}>
            <BurgerIcon type="primary" />
            <p className='text text_type_main-default ml-2'>Конструктор</p>
          </div>
          <div className={`${headerStyles.nav__link} pl-5 pr-5 pt-4 pb-4 ml-2`}>
            <ListIcon type="secondary" />
            <p className={`text text_type_main-default ml-2 ${headerStyles.text__color_default}`}>Лента заказов</p>
          </div>
        </nav>
        <div className={`${headerStyles.logo}`}>
          <Logo />
        </div>
        <div className={`${headerStyles.nav__link} pl-5 pr-5 pt-4 pb-4`}>
          <ProfileIcon type="secondary" />
          <p className={`text text_type_main-default ml-2 ${headerStyles.text__color_default}`}>Личный кабинет</p>
        </div>
      </div>
    </header>
  )
}

export default AppHeader;