import '../pages/index.css';
import {closePopup, openPopup} from './modal.js';
import {createCard, deleteCard, updateLike, statusLikeBtn} from './card.js';
import {getCards,
        getUser,
        deleteCardAPI,
        postCard,
        putLike,
        deleteLike,
        editUser,
        editAvatar
        } from './api.js';
import {enableValidation,
        clearValidation
        } from './validation.js';
import {config} from './validationConfig.js'

// кнопки "редактировать", "добавить", "закрыть"
const editButton = document.querySelector('.profile__edit-button');
const addButton = document.querySelector('.profile__add-button');
const closeButtons = document.querySelectorAll('.popup__close');
const avatarButton = document.querySelector('.profile__image-button');

// модальные окна  
const popupEdit = document.querySelector('.popup_type_edit');
const popupNewCard = document.querySelector('.popup_type_new-card');
const popupImage = document.querySelector('.popup_type_image');
const popupAvatar = document.querySelector('.popup_type_avatar');
 
const popups = [popupEdit, popupNewCard, popupImage, popupAvatar];
 
const editProfile = document.forms.editProfile;
const newPlace = document.forms.newPlace;
const newAvatar = document.forms.newAvatar;

const profileTitle = document.querySelector('.profile__title');
const profileDescription = document.querySelector('.profile__description');
const profileAvatar = document.querySelector('.profile__image');
 
const placesList = document.querySelector('.places__list');

// заполнение полей в модальном окне профиля
function typeFields () {
  editProfile.name.value = profileTitle.textContent;
  editProfile.description.value = profileDescription.textContent;
};

// слушатель на кнопке "профиль"
editButton.addEventListener('click', function() {
  clearValidation(popupEdit, config);
  typeFields();  
  openPopup(popupEdit);
});

// слушатель на кнопке "добавить" 
addButton.addEventListener('click', function() {
  clearValidation(popupNewCard, config);
  openPopup(popupNewCard);
});

// слушатель на кнопке "аватар"
avatarButton.addEventListener('click', function() {
  clearValidation(popupAvatar, config);
  openPopup(popupAvatar);
})

// слушатель на копку "закрыть"
closeButtons.forEach((btn) => {
  const popup = btn.closest('.popup')
  btn.addEventListener('click', () => {
      closePopup(popup);
  });
});

// сборка окна с изображением
function createImagePopup (evt) {
  const image = document.querySelector('.popup__image');
  const caption = document.querySelector('.popup__caption');
  image.src = evt.target.src;
  image.alt = evt.target.alt
  caption.textContent = evt.target.alt;
}

// открытия окна с изображением
function showImage (evt) {
  if (evt.target.classList.contains('card__image')) {
    createImagePopup(evt);
    openPopup(popupImage);
  };
}

// слушатель окна с "профилем"
editProfile.addEventListener('submit', profileFormSubmit);

// обработчик формы модальног окна "профиль"
function profileFormSubmit(evt) {
  evt.preventDefault();  
  renderLoad(true, evt.target);
  editUser(editProfile.name.value, editProfile.description.value)
  .then(data => {
    profileTitle.textContent = data.name;  
    profileDescription.textContent = data.about;  
    console.log(`Имя: ${data.name}\nОписание: ${data.about}`);
  })
  .then(() => {
    closePopup(popupEdit)
  })
  .catch((err) => console.log(err))
  .finally(() => {
    renderLoad(false, evt.target);
  });
};

// слушалетль на форме новой карточки
newPlace.addEventListener('submit', newPlaceFormSubmit);

// обработчик формы модального окна новой карточки
function newPlaceFormSubmit(evt){
  evt.preventDefault();  
  renderLoad(true, evt.target); 
 
  postCard(newPlace.placeName.value, newPlace.link.value)
  .then((card) => {
    const cardItem = createCard(card, card.owner, showImage, handlerOfDeleteButton, handlerOfLikeButton);
    placesList.prepend(cardItem);
    newPlace.reset();
    closePopup(popupNewCard);
  })
  .catch(err => console.log(err))
  .finally(() => {
    renderLoad(false, evt.target);
  })
};

// редактирование аватарки
newAvatar.addEventListener('submit', (evt) => {
  evt.preventDefault();
  renderLoad(true, evt.target);
  editAvatar(evt.target.avatar.value)
  .then(data => {
    profileAvatar.style.background = `url(${data.avatar}) center / cover`;
    console.log('Ссылка на аватар ' + data.avatar)
  })
  .then(() => {
    closePopup(popupAvatar);
  })
  .catch(err => console.log(err))
  .finally(() => {
    renderLoad(false, evt.target);
  })
});

// анимация открытия модального окна
popups.forEach((item) => {
  item.classList.add('popup_is-animated');
})
 
function renderLoad(isLoad, form) {
  form.button.textContent = isLoad ? 'Сохранение...' : 'Сохранить'; 
};

// первоначальная загрузка карточек-пользователь
Promise.all([
  getCards(),
  getUser()
])
.then(([cards, user]) => { 
  profileTitle.textContent = user.name;
  profileDescription.textContent = user.about;
  profileAvatar.style.background = `url(${user.avatar}) center / cover`;
  cards.forEach((card) => {
    const cardItem = createCard(card, user, showImage, handlerOfDeleteButton, handlerOfLikeButton);
    placesList.append(cardItem);
  })
})
.catch((err) => console.log(err));
 
const handlerOfDeleteButton = (item, cardId) => {
  deleteCardAPI(cardId._id)
  .then((data) => deleteCard(item, data.message))
  .catch((err) => console.log(err));
}
 
const handlerOfLikeButton = (buttonNoLike, cardId) => {
  if(statusLikeBtn(buttonNoLike)) {
    deleteLike(cardId)
    .then((data) => {
      updateLike(buttonNoLike, data);
      console.log('отсутствие лайка \n' + 'счетчик: ' + data.likes.length);
    })
    .catch((err) => console.log(err));
  } else {
    putLike(cardId)
    .then((data) => {
      updateLike(buttonNoLike, data);
      console.log('лайк \n' + 'счетчик: ' + data.likes.length);
    })
    .catch((err) => console.log(err));
  }
};

enableValidation(config); 
