// const config = {
//     baseUrl: 'https://nomoreparties.co/v1/wff-cohort-mag-4',
//     headers: {
//       authorization: '84299558-2d35-4255-81ed-1ece867540fe',
//       'Content-Type': 'application/json'
//     }
//   }
//   return fetch('https://nomoreparties.co/v1/cohort-42/cards', {
//   headers: {
//     authorization: 'c56e30dc-2883-4270-a59e-b2f7bae969c6'
//   }
// })
//   .then(res => res.json())
//   .then((result) => {
//     console.log(result);
//   }); 
// return fetch('https://nomoreparties.co/v1/cohort-mag-4/cards', {
//   headers: {
//     authorization: '84299558-2d35-4255-81ed-1ece867540fe',
//     'Content-Type': 'application/json'
//   }
// })
//   .then(handleResponse) // Используем handleResponse для обработки ответа
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.error(error); // Обработка ошибок
//   });

const config = {
    baseUrl: 'https://nomoreparties.co/v1/cohort-mag-4',
    headers: {
      authorization: '84299558-2d35-4255-81ed-1ece867540fe',
      'Content-Type': 'application/json'
    }
  }

const handleResponse = (res) => {
    if (res.ok) {
      return res.json()
    }
      return Promise.reject(`Ошибка: ${res.status}`);
  };

// Запрос массива карточек
export const getCards = () => {
    return fetch (`${config.baseUrl}/cards`, {
      headers: config.headers
    })
    .then(handleResponse)
  }
  
  // Запрос данных пользователя
  export const getUser = () => {
    return fetch (`${config.baseUrl}/users/me`, {
      headers: config.headers
    })
    .then(handleResponse)
  }
  
  // Запрос на удаление карточки
  export const deleteCardAPI = (cardId) => {
    return fetch(`${config.baseUrl}/cards/${cardId}`, {
      method: 'DELETE',
      headers:  config.headers,
    })
    .then(handleResponse)
  }
  
  // Запрос на размещение новой карточки
  export const postCard = (newName, newLink) => {
    return fetch(`${config.baseUrl}/cards`, {
      method: 'POST',
      headers: config.headers,
      body: JSON.stringify({
        name: newName,
        link: newLink
      })
    })
    .then(handleResponse)
  }
  
  // Запрос при постановке лайка
  export const putLike = (cardId) => {
    return fetch(`${config.baseUrl}/cards/likes/${cardId}`, {
      method: 'PUT',
      headers: config.headers,
    })
    .then(handleResponse)
  }
  
  // Запрос при снятии лайка
  export const deleteLike = (cardId) => {
    return fetch(`${config.baseUrl}/cards/likes/${cardId}`, {
      method: 'DELETE',
      headers: config.headers,
    })
    .then(handleResponse)
  }
  
  // редактирование профиля
  export const editUser = (newName, newDecription) => {
    return fetch(`${config.baseUrl}/users/me`, {
      method: 'PATCH',
      headers: config.headers,
      body: JSON.stringify({
        name: newName,
        about: newDecription
      })
    })
    .then(handleResponse)
  };
  
  // редактирование аватара
  export const editAvatar = (newAvatar) => {
    return fetch(`${config.baseUrl}/users/me/avatar`, {
      method: 'PATCH',
      headers: config.headers,
      body: JSON.stringify({
        avatar: newAvatar
      })
    })
    .then(handleResponse)
  };