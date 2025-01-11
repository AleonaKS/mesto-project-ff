/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scripts/card.js":
/*!*****************************!*\
  !*** ./src/scripts/card.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createCard: () => (/* binding */ createCard),\n/* harmony export */   pressLike: () => (/* binding */ pressLike),\n/* harmony export */   removeCard: () => (/* binding */ removeCard)\n/* harmony export */ });\n// генерация карточек\nfunction createCard(cardContent, deleteCard, likeToggle, openImageToggle) {\n  var cardTemplate = document.querySelector('#card-template').content;\n  var cardItem = cardTemplate.querySelector('.card').cloneNode(true);\n  var cardImage = cardItem.querySelector('.card__image');\n  var cardTitle = cardItem.querySelector('.card__title');\n  var deleteButton = cardItem.querySelector('.card__delete-button');\n  var cardLikeButton = cardItem.querySelector('.card__like-button');\n  var placesList = document.querySelector('.places__list');\n  cardImage.setAttribute('src', cardContent.link);\n  cardImage.setAttribute('alt', cardContent.name);\n  cardTitle.textContent = cardContent.name;\n  deleteButton.addEventListener('click', function () {\n    deleteCard(cardItem);\n  });\n  cardLikeButton.addEventListener('click', likeToggle);\n  placesList.addEventListener('click', openImageToggle);\n  return cardItem;\n}\n;\n\n// удаление карточки\nfunction removeCard(card) {\n  card.remove();\n}\n\n// обработка like\nfunction pressLike(evt) {\n  evt.target.classList.toggle('card__like-button_is-active');\n}\n\n\n//# sourceURL=webpack://mesto-project-ff/./src/scripts/card.js?");

/***/ }),

/***/ "./src/scripts/cards.js":
/*!******************************!*\
  !*** ./src/scripts/cards.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   initialCards: () => (/* binding */ initialCards)\n/* harmony export */ });\nvar initialCards = [{\n  name: \"Архыз\",\n  link: \"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg\"\n}, {\n  name: \"Челябинская область\",\n  link: \"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg\"\n}, {\n  name: \"Иваново\",\n  link: \"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg\"\n}, {\n  name: \"Камчатка\",\n  link: \"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg\"\n}, {\n  name: \"Холмогорский район\",\n  link: \"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg\"\n}, {\n  name: \"Байкал\",\n  link: \"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg\"\n}];\n\n//# sourceURL=webpack://mesto-project-ff/./src/scripts/cards.js?");

/***/ }),

/***/ "./src/scripts/index.js":
/*!******************************!*\
  !*** ./src/scripts/index.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _pages_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../pages/index.css */ \"./src/pages/index.css\");\n/* harmony import */ var _cards_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cards.js */ \"./src/scripts/cards.js\");\n/* harmony import */ var _modal_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modal.js */ \"./src/scripts/modal.js\");\n/* harmony import */ var _card_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./card.js */ \"./src/scripts/card.js\");\n\n\n\n\n\n// кнопки \"редактировать\", \"добавить\", \"закрыть\"\nvar editButton = document.querySelector('.profile__edit-button');\nvar addButton = document.querySelector('.profile__add-button');\nvar closeButtons = document.querySelectorAll('.popup__close');\n\n// модальные окна \nvar popupEdit = document.querySelector('.popup_type_edit');\nvar popupNewCard = document.querySelector('.popup_type_new-card');\nvar popupImage = document.querySelector('.popup_type_image');\nvar popups = [popupEdit, popupNewCard, popupImage];\nvar editProfile = document.forms.editProfile;\nvar newPlace = document.forms.newPlace;\nvar profileTitle = document.querySelector('.profile__title');\nvar profileDescription = document.querySelector('.profile__description');\nvar placesList = document.querySelector('.places__list');\nvar image = document.querySelector('.popup__image');\nvar caption = document.querySelector('.popup__caption');\nfunction insertCard(content) {\n  var method = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : \"prepend\";\n  var cardItem = (0,_card_js__WEBPACK_IMPORTED_MODULE_3__.createCard)(content, _card_js__WEBPACK_IMPORTED_MODULE_3__.removeCard, _card_js__WEBPACK_IMPORTED_MODULE_3__.pressLike, openImage);\n  placesList[method](cardItem);\n}\n\n// размещение карточек при загрузке страницы\n_cards_js__WEBPACK_IMPORTED_MODULE_1__.initialCards.forEach(function (item) {\n  insertCard(item, \"append\");\n});\n\n// заполнение полей окна \"редактировать\"\nfunction fillFields() {\n  editProfile.name.value = profileTitle.textContent;\n  editProfile.description.value = profileDescription.textContent;\n}\neditButton.addEventListener('click', function () {\n  fillFields();\n  (0,_modal_js__WEBPACK_IMPORTED_MODULE_2__.openPopup)(popupEdit);\n});\naddButton.addEventListener('click', function () {\n  (0,_modal_js__WEBPACK_IMPORTED_MODULE_2__.openPopup)(popupNewCard);\n});\ncloseButtons.forEach(function (btn) {\n  var popup = btn.closest('.popup');\n  btn.addEventListener('click', function () {\n    (0,_modal_js__WEBPACK_IMPORTED_MODULE_2__.closePopup)(popup);\n  });\n});\n\n// сборка окна с изображением\nfunction createImagePopup(evt) {\n  image.setAttribute('src', evt.target.src);\n  image.setAttribute('alt', evt.target.alt);\n  caption.textContent = evt.target.alt;\n}\n\n// открытия модального окна с картинкой\nfunction openImage(evt) {\n  if (evt.target.classList.contains('card__image')) {\n    createImagePopup(evt);\n    (0,_modal_js__WEBPACK_IMPORTED_MODULE_2__.openPopup)(popupImage);\n  }\n}\n\n// редактирование профиля\neditProfile.addEventListener('submit', handleProfileFormSubmit);\n\n// добавление новой карточки\nnewPlace.addEventListener('submit', handleAddNewPlaceFormSubmit);\n\n// обработчик формы окна \"добавить\"\nfunction handleAddNewPlaceFormSubmit(evt) {\n  evt.preventDefault();\n  var newName = newPlace.placeName.value;\n  var newLink = newPlace.link.value;\n  var newItem = {\n    name: newName,\n    link: newLink\n  };\n  insertCard(newItem, \"prepend\");\n  newPlace.reset();\n  (0,_modal_js__WEBPACK_IMPORTED_MODULE_2__.closePopup)(popupNewCard);\n}\n\n// обработчик формы окна \"редактировать\"\nfunction handleProfileFormSubmit(evt) {\n  evt.preventDefault();\n  profileTitle.textContent = evt.target.name.value;\n  profileDescription.textContent = evt.target.description.value;\n  (0,_modal_js__WEBPACK_IMPORTED_MODULE_2__.closePopup)(popupEdit);\n}\n\n// анимация открытия модального окна\npopups.forEach(function (item) {\n  item.classList.add('popup_is-animated');\n});\n\n//# sourceURL=webpack://mesto-project-ff/./src/scripts/index.js?");

/***/ }),

/***/ "./src/scripts/modal.js":
/*!******************************!*\
  !*** ./src/scripts/modal.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   closePopup: () => (/* binding */ closePopup),\n/* harmony export */   openPopup: () => (/* binding */ openPopup)\n/* harmony export */ });\n// отрытие модального окна\nfunction openPopup(popup) {\n  popup.classList.add('popup_is-opened');\n  document.addEventListener('keydown', escapeHandler);\n  popup.addEventListener('click', closeByOverlay);\n}\n;\n\n// закрытиe модального окна\nfunction closePopup(popup) {\n  popup.classList.remove('popup_is-opened');\n  document.removeEventListener('keydown', escapeHandler);\n  popup.removeEventListener('click', closeByOverlay);\n}\n;\n\n// закрытие по Esc\nfunction escapeHandler(evt) {\n  if (evt.key === \"Escape\") {\n    closePopup(document.querySelector('.popup_is-opened'));\n  }\n  ;\n}\n;\n\n// Закрытие модального окна по оверлей\nfunction closeByOverlay(item) {\n  if (item.target === item.currentTarget) {\n    closePopup(item.target);\n  }\n}\n;\n\n\n//# sourceURL=webpack://mesto-project-ff/./src/scripts/modal.js?");

/***/ }),

/***/ "./src/pages/index.css":
/*!*****************************!*\
  !*** ./src/pages/index.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://mesto-project-ff/./src/pages/index.css?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/scripts/index.js");
/******/ 	
/******/ })()
;