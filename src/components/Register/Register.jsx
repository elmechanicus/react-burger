import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, EmailInput, PasswordInput, Input } from '@ya.praktikum/react-developer-burger-ui-components';
import registerClass from './register.module.css';
import { useDispatch } from 'react-redux';
import { getUserInfo } from '../../features/register/registerSlice';


export function Register() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [emailValue, setEmailValue] = React.useState('Введите свой e-mail')
  const onChangeEmail = e => {
    setEmailValue(e.target.value)
  }

  const [passValue, setPassValue] = React.useState('')
  const onChangePass = e => {
    setPassValue(e.target.value);
  }

  const [nameValue, setNameValue] = React.useState('');
  const onChangeName = e => {
    setNameValue(e.target.value);
  }

  const comeIn = React.useCallback(
    () => {
      navigate(-1);
    }, [navigate]
  )

  const registerNewUser = (e) => {
    e.preventDefault();
    console.log(emailValue, passValue, nameValue);
    dispatch(getUserInfo(emailValue, passValue, nameValue))
  }

  return (
    <form className={`${registerClass.content}`}>
      <h2 className='text text_type_main-medium mb-6'>Регистрация</h2>
      <div className="mb-6">
        <Input
          type={'text'}
          placeholder={'Ваше имя'}
          onChange={onChangeName}
          value={nameValue}
          name={'Name'}
          error={false}
          errorText={'Ошибка'}
          size={'default'}
        />
      </div>
      <div className="mb-6">
        <EmailInput onChange={onChangeEmail} value={emailValue} name={'Email'} />
      </div>
      <div className="mb-6">
        <PasswordInput onChange={onChangePass} value={passValue} name={'Password'} />
      </div>
      <div className="mb-20">
        <Button type='primary' size='large' htmlType='submit' onClick={registerNewUser}>
        Зарегистрироваться
        </Button>
      </div>
      <div className={`${registerClass.register} mb-4`}>
        <p className={`${registerClass.text} text text_type_main-default text_color_inactive mr-2`}>Уже зарегистрированы?</p>
        <Button className={registerClass.button__newButton} onClick={comeIn} htmlType='button'>Войти</Button>
      </div>
    </form>
  )
}