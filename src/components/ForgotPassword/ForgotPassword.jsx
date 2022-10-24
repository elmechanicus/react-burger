import React from 'react';
import { Button, EmailInput } from '@ya.praktikum/react-developer-burger-ui-components';
import forgotPassClass from './forgotPassword.module.css';
import { useNavigate } from 'react-router-dom';


export function ForgotPassword() {

  const navigate = useNavigate();

  const [emailValue, setEmailValue] = React.useState('')
  const onChangeEmail = e => {
    setEmailValue(e.target.value)
  }

  const comeIn = React.useCallback(
    () => {
      navigate(-1);
    }, [navigate]
  );

  return (
    <form className={`${forgotPassClass.content}`}>
      <div className="mb-6">
        <h2 className='text text_type_main-medium'>Восстановление пароля</h2>
      </div>
      <div className="mb-6">
        <EmailInput onChange={onChangeEmail} value={emailValue} name={'e-mail'} placeholder='Укажите e-mail'/>
      </div>
      <div className="mb-20">
        <Button type='primary' size='large' htmlType='submit'>
        Восстановить
        </Button>
      </div>
      <div className={`${forgotPassClass.register} mb-4`}>
        <p className={`${forgotPassClass.text} text text_type_main-default text_color_inactive mr-2`}>Вспомнили пароль?</p>
        <Button className={forgotPassClass.button__newButton} onClick={comeIn} htmlType='button'>Войти</Button>
      </div>
    </form>
  )
}