import '../pages/index.css';
import { initialCards } from './cards.js';
import { closePopup, openPopup } from './modal.js';
import { createCard, removeCard, pressLike } from './card.js';

// кнопки "редактировать", "добавить", "закрыть"
const editButton = document.querySelector('.profile__edit-button');
const addButton = document.querySelector('.profile__add-button');
const closeButtons = document.querySelectorAll('.popup__close');

// модальные окна 
const popupEdit = document.querySelector('.popup_type_edit');
const popupNewCard = document.querySelector('.popup_type_new-card');
const popupImage = document.querySelector('.popup_type_image');

const popups = [popupEdit, popupNewCard, popupImage];

const editProfile = document.forms.editProfile;
const newPlace = document.forms.newPlace;

const profileTitle = document.querySelector('.profile__title');
const profileDescription = document.querySelector('.profile__description');
const placesList = document.querySelector('.places__list');  

const image = document.querySelector('.popup__image');
const caption = document.querySelector('.popup__caption');

function insertCard(content, method = "prepend") {
  const cardItem = createCard(content, removeCard, pressLike, openImage);
  placesList[method](cardItem);
}

// размещение карточек при загрузке страницы
initialCards.forEach(function (item) {
  insertCard(item, "append");
});

// заполнение полей окна "редактировать"
function fillFields() {
  editProfile.name.value = profileTitle.textContent;
  editProfile.description.value = profileDescription.textContent;
}

editButton.addEventListener('click', function() {
  fillFields();
  openPopup(popupEdit);
});

addButton.addEventListener('click', function() {
  openPopup(popupNewCard);
});

closeButtons.forEach((btn) => {
  const popup = btn.closest('.popup');
  btn.addEventListener('click', () => {
    closePopup(popup);
  });
});

// сборка окна с изображением
function createImagePopup(evt) {
  image.setAttribute('src', evt.target.src);
  image.setAttribute('alt', evt.target.alt);
  caption.textContent = evt.target.alt;
}

// открытия модального окна с картинкой
function openImage(evt) {
  if (evt.target.classList.contains('card__image')) {
    createImagePopup(evt);
    openPopup(popupImage);
  }
}

// редактирование профиля
editProfile.addEventListener('submit', handleProfileFormSubmit);

// добавление новой карточки
newPlace.addEventListener('submit', handleAddNewPlaceFormSubmit);

// обработчик формы окна "добавить"
function handleAddNewPlaceFormSubmit(evt) {
  evt.preventDefault();
  const newName = newPlace.placeName.value;
  const newLink = newPlace.link.value;
  const newItem = {
    name: newName,
    link: newLink,
  };
  insertCard(newItem, "prepend");
  newPlace.reset();
  closePopup(popupNewCard);
}

// обработчик формы окна "редактировать"
function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileTitle.textContent = evt.target.name.value;
  profileDescription.textContent = evt.target.description.value;
  closePopup(popupEdit);
}

// анимация открытия модального окна
popups.forEach((item) => {
  item.classList.add('popup_is-animated');
});
