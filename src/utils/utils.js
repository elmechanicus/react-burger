//проверим результат запроса
export function checkResult(result) {
if (result.ok) {
        return result.json();
      }
      return Promise.reject(`Ой! Что-то пошло не так - ошибка: ${result.status}`);
}

