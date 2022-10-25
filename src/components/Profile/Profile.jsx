import React from 'react';
import profileClass from './profile.module.css';
import { Input } from '@ya.praktikum/react-developer-burger-ui-components';


export function Profile() {


  const [firstNameValue, setFirstNameValue] = React.useState('');
  const [loginValue, setLoginValue] = React.useState('');
  const [passwordValue, setPasswordValue] = React.useState('');

  const handleSetName = (e) => {
    setFirstNameValue(e.target.value);
  }

  const handleSetLogin = (e) => {
    setLoginValue(e.target.value);
  }

  const handleSetPassword = (e) => {
    setPasswordValue(e.target.value);
  }

  return (
    <div className={profileClass.main}>
      <ul className={`${profileClass.column__lateral} ${profileClass.column} mr-15`}>
        <li className={`${profileClass.column__menu} text text_type_main-medium`}>Профиль</li>
        <li className={`${profileClass.column__menu} text text_type_main-medium text_color_inactive`}>История заказов</li>
        <li className={`${profileClass.column__menu} text text_type_main-medium text_color_inactive mb-20`}>Выход</li>
        <li className={`${profileClass.column__text} text text_type_main-default`}>В этом разделе вы можете изменить&nbsp;свои персональные данные</li>
      </ul>
      <ul className={`${profileClass.column} ${profileClass.column__center} mr-15`}>
        <li className="mb-6">
          <Input type='text' placeholder='Имя' name='firstname' icon='EditIcon' size='default' onChange={handleSetName} value={firstNameValue} />
        </li>
        <li className="mb-6">
          <Input type='text' placeholder='Логин' name='login' icon='EditIcon' size='default' onChange={handleSetLogin} value={loginValue} />
        </li>
        <li>
          <Input type='password' placeholder='Пароль' name='password' icon='EditIcon' size='default' onChange={handleSetPassword} value={passwordValue} />
        </li>
      </ul>
      <div className={`${profileClass.column__lateral}`}></div>
    </div>
    
  )
}
