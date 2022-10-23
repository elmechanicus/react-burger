import React from 'react';
import { Button, EmailInput, PasswordInput, Input } from '@ya.praktikum/react-developer-burger-ui-components';


export function Register() {

  const [emailValue, setEmailValue] = React.useState('')
  const onChangeEmail = e => {
    setEmailValue(e.target.value)
  }

  const [passValue, setPassValue] = React.useState('')
  const onChangePass = e => {
    setPassValue(e.target.value);
  }

  const [nameValue, setNameValue] = React.useState('');

  return (
    <>
      <h2 className='text text_type_main-medium'>Регистрация</h2>
      <Input
      type={'text'}
      placeholder={'Ваше имя'}
      onChange={e => setNameValue(e.target.value)}
      value={nameValue}
      name={'Name'}
      error={false}
      errorText={'Ошибка'}
      size={'default'}
    />
      <EmailInput onChange={onChangeEmail} value={emailValue} name={'Email'} />
      <PasswordInput onChange={onChangePass} value={passValue} name={'Password'} />
      <Button type='primary' size='large' htmlType='submit'>
        Зарегистрироваться
      </Button>
      <p className='text text_type_main-default text_color_inactive'>Уже зарегистрированы? Войти</p>
    </>
  )
}