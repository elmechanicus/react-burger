import React from 'react';
import contentStyles from './orderDetales.module.css';
import {CheckMarkIcon} from '@ya.praktikum/react-developer-burger-ui-components';
import { OrderNumberContext } from '../../utils/orderContext';

function OrderDetales() {
  const orderNumber = React.useContext(OrderNumberContext);

  return (
    <div className={`${contentStyles.contentText} ml-25 mr-25 mt-30 mb-30`}>
      <h3 className="text text_type_digits-large">{orderNumber}</h3>
      <p className="text text_type_main-medium mt-8">идентификатор заказа</p>
      <div className={`${contentStyles.checkMark} mt-15 mb-15`}><CheckMarkIcon type="primary" /></div>
      <p className="text text_type_main-default">Ваш заказ начали готовить</p>
      <p className="text text_type_main-default text_color_inactive mt-2">Дождитесь готовности на орбитальной станции</p>
    </div>
    
  )
}


export default OrderDetales

