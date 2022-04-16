import { checkResult } from './utils.js';
import { URL } from './constants.js'


//получение данных с сервера
export const getIngredients = () => {
return fetch(`${URL}`, {
      headers: { "Content-Type": "application/json" }
    })
      .then((res) => checkResult(res))
}