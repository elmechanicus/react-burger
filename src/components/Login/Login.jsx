import React from 'react';
import { Button, EmailInput, PasswordInput } from '@ya.praktikum/react-developer-burger-ui-components';
import loginClass from './login.module.css';


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
    <form className={`${loginClass.content}`}>
      <h2 className='text text_type_main-medium mb-6'>Вход</h2>
      <div className='mb-6'>
        <EmailInput onChange={onChangeEmail} value={emailValue} name={'email'} placeholder='E-mail'/>
      </div>
      <div className='mb-6'>
        <PasswordInput onChange={onChangePass} value={passValue} name={'password'} />
      </div>
      <div className="mb-20">
        <Button type='primary' size='large' htmlType='submit'>
        Войти
        </Button>
      </div>
      <div className={`${loginClass.register}`}>
        <p className={`${loginClass.text} text text_type_main-default text_color_inactive`}>Вы - новый пользователь?</p>
        <div className={`${loginClass.button}`}><Button type='secondary' size='medium' htmlType='button'>Зарегистрироваться</Button></div>
      </div>
      <div className={`${loginClass.register}`}>
        <p className={`${loginClass.text} text text_type_main-default text_color_inactive`}>Забыли пароль? </p>
        <div className={`${loginClass.button}`}><Button type='secondary' size='medium' htmlType='button'>Восстановить пароль</Button></div>
      </div>
      
    </form>
  )
}