import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, EmailInput, PasswordInput } from '@ya.praktikum/react-developer-burger-ui-components';
import loginClass from './login.module.css';


export function Login() {
  const navigate = useNavigate();

  const [emailValue, setEmailValue] = React.useState('Введите свой e-mail')
  const onChangeEmail = e => {
    setEmailValue(e.target.value)
  }

  const [passValue, setPassValue] = React.useState('')
  const onChangePass = e => {
    setPassValue(e.target.value);
  }

  const registration = React.useCallback(
    () => {
      navigate('/register');
      }, [navigate]
  )
    

  const forgotPassword = React.useCallback(
    () => {
      navigate('/forgot-password');
    }, [navigate]
  )

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
      <div className={`${loginClass.register} mb-4`}>
        <p className={`${loginClass.text} text text_type_main-default text_color_inactive mr-2`}>Вы - новый пользователь?</p>
        <Button className={loginClass.button__button} onClick={registration} htmlType='button'>Зарегистрироваться</Button>
      </div>
      <div className={`${loginClass.register}`}>
        <p className={`${loginClass.text} text text_type_main-default text_color_inactive mr-2`}>Забыли пароль? </p>
      <Button className={loginClass.button__button} onClick={forgotPassword} htmlType='button'>Восстановить пароль</Button>
      </div>
      
    </form>
  )
}