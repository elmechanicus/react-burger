import React from 'react';
import { Button, EmailInput, PasswordInput } from '@ya.praktikum/react-developer-burger-ui-components';


export function Login() {

  const [emailValue, setEmailValue] = React.useState('')
  const onChangeEmail = e => {
    setEmailValue(e.target.value)
  }

  const [passValue, setPassValue] = React.useState('')
  const onChangePass = e => {
    setPassValue(e.target.value);
  }

  return (
    <>
      <h2 className='text text_type_main-medium'>Вход</h2>
      <EmailInput onChange={onChangeEmail} value={emailValue} name={'email'} placeholder='E-mail'/>
      <PasswordInput onChange={onChangePass} value={passValue} name={'password'} />
      <Button type='primary' size='large' htmlType='submit'>
        Войти
      </Button>
      <p className='text text_type_main-default text_color_inactive'>Вы - новый пользователь? Зарегистрироваться</p>
      <p className='text text_type_main-default text_color_inactive'>Забыли пароль? Восстановить пароль</p>
    </>
  )
}