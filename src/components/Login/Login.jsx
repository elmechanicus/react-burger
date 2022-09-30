import React from 'react';
import { Button, EmailInput, PasswordInput } from '@ya.praktikum/react-developer-burger-ui-components';


export function Login() {

  const [emailValue, setEmailValue] = React.useState('myemail@example.com')
  const onChangeEmail = e => {
    setEmailValue(e.target.value)
  }

  const [passValue, setPassValue] = React.useState('password')
  const onChangePass = e => {
    setPassValue(e.target.value);
  }

  return (
    <>
      <EmailInput onChange={onChangeEmail} value={emailValue} name={'email'} />
      <PasswordInput onChange={onChangePass} value={passValue} name={'password'} />
      <Button type='primary' size='large' htmlType='submit'>
        Войти
      </Button>
    </>
  )
}