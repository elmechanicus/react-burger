import React from 'react';
import profileClass from './profile.module.css'


export function Profile() {
  return (
    <div className={profileClass.main}>
      <ul className={`${profileClass.column__lateral} mr-15`}>
        <li className={`${profileClass.column__menu} text text_type_main-medium`}>Профиль</li>
        <li className={`${profileClass.column__menu} text text_type_main-medium text_color_inactive`}>История заказов</li>
        <li className={`${profileClass.column__menu} text text_type_main-medium text_color_inactive mb-20`}>Выход</li>
        <li className={`${profileClass.column__text} text text_type_main-default`}>В этом разделе вы можете изменить&nbsp;свои персональные данные</li>
      </ul>
      <div className={`${profileClass.column__center} mr-15`}>Profile</div>
      <div className={`${profileClass.column__lateral}`}></div>
    </div>
    
  )
}
