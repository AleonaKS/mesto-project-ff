export function createCard(cardContent, user, showImage, hdc, hlb) {

  const cardTemplate = document.querySelector('#card-template').content;

  const cardItem = cardTemplate.querySelector('.card').cloneNode(true);
  const cardImage = cardItem.querySelector('.card__image');
  const cardTitle = cardItem.querySelector('.card__title')
  const deleteButton = cardItem.querySelector('.card__delete-button');
  const likeButton = cardItem.querySelector('.card__like-button');
  const likeCount = cardItem.querySelector('.card__like-count');

  cardImage.src = cardContent.link;
  cardImage.alt = cardContent.name;
  cardTitle.textContent = cardContent.name;

// проверка: является ли пользователь автором карточки
  if (cardContent.owner._id !== user._id) {
    deleteButton.style.display = 'none';
    deleteButton.disabled = true;
  } else {
    deleteButton.addEventListener('click', () => hdc(cardItem, cardContent));
  };

  // проверка лайка у пользователя
  const matchUserId = cardContent.likes.some((id) => {return id._id === user._id});
  if (matchUserId) {
    likeButton.classList.add('card__like-button_is-active');
  };

  // обновление счетчиков лайков
  likeCount.textContent = cardContent.likes.length;

  likeButton.addEventListener('click', evt => hlb(evt.target, cardContent._id));
  cardImage.addEventListener('click', showImage);

  return cardItem;
};

// удаление карточки
export function deleteCard(element, message) {
  element.remove();
  console.log(message);
}

// проверка наличия лайка
export const statusLikeBtn = (likeBtn) => {
  return likeBtn.classList.contains('card__like-button_is-active');
};

// обновление состояния кнопки like и счетчика
export const updateLike = (btn, count) => {
  btn.classList.toggle('card__like-button_is-active')
  btn.nextElementSibling.textContent = count.likes.length;
}
 