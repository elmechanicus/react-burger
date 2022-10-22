import React from 'react';
import { Button, EmailInput } from '@ya.praktikum/react-developer-burger-ui-components';


export function ForgotPassword() {

  const [emailValue, setEmailValue] = React.useState('')
  const onChangeEmail = e => {
    setEmailValue(e.target.value)
  }


  return (
    <>
      <h2 className='text text_type_main-medium'>Восстановление пароля</h2>
      <EmailInput onChange={onChangeEmail} value={emailValue} name={'e-mail'} placeholder='Укажите e-mail'/>
      <Button type='primary' size='large' htmlType='submit'>
        Восстановить
      </Button>
      <p className='text text_type_main-default text_color_inactive'>Вспомнили пароль? Войти</p>
    </>
  )
}