// import { NavLink } from 'react-router-dom';
import { Logo } from '@ya.praktikum/react-developer-burger-ui-components';
import {BurgerIcon, ListIcon} from '@ya.praktikum/react-developer-burger-ui-components';
import headerStyles from './appHeader.module.css';
import { ProfileLink } from '../ProfileLink/ProfileLink';


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
            <p className={`text text_type_main-default ml-2 text_color_inactive`}>Лента заказов</p>
          </div>
        </nav>
        <div className={`${headerStyles.logo}`}>
          <Logo />
        </div>
        <ProfileLink to='/profile' >
          Личный кабинет
        </ProfileLink>
      </div>
    </header>
  )
}

export default AppHeader;