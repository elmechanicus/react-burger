import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Input, PasswordInput } from '@ya.praktikum/react-developer-burger-ui-components';
import resetClass from './resetPassword.module.css';


export function ResetPassword() {
  const navigate = useNavigate();

  const [codeValue, setCodeValue] = React.useState('')
  const onChangeCode = e => {
    setCodeValue(e.target.value)
  }

  const [newPassValue, setNewPassValue] = React.useState('')
  const onChangeNewPass = e => {
    setNewPassValue(e.target.value);
  }

  const comeIn = React.useCallback(
    () => {
      navigate(-2);
    }, [navigate]
  )

  return (
    <form className={`${resetClass.content}`}>
      <h2 className='text text_type_main-medium mb-6'>Восстановление пароля</h2>
      <div className='mb-6'>
        <PasswordInput onChange={onChangeNewPass} value={newPassValue} name={'newPassword'} />
      </div>
      <div className='mb-6'>
        <Input type='text' onChange={onChangeCode} value={codeValue} name={'code'} placeholder='Введите код из письма'/>
      </div>
      <div className="mb-20">
        <Button type='primary' size='large' htmlType='submit'>
        Сохранить
        </Button>
      </div>
      <div className={`${resetClass.register} mb-4`}>
        <p className={`${resetClass.text} text text_type_main-default text_color_inactive mr-2`}>Вспомнили пароль?</p>
        <Button className={resetClass.button__newButton} onClick={comeIn} htmlType='button'>Войти</Button>
      </div>
    </form>
  )
}