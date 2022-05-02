import { checkResult } from './utils.js';
import { URL } from './constants.js'


//получение данных с сервера
export const getIngredients = () => {
return fetch(`${URL}ingredients`, {
      headers: { "Content-Type": "application/json" }
    })
      .then((res) => checkResult(res))
}

//получение номера заказа
export const getNumberOrder = (orderItems) => {
  return fetch(`${URL}orders`, {
    method: 'POST',
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(orderItems),
  })
    .then(res => checkResult(res));
}