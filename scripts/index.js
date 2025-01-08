// @todo: Темплейт карточки
const cardTemplate = document.querySelector('#card-template').content;

// @todo: DOM узлы
const placesList = document.querySelector('.places__list');

// @todo: Функция создания карточки
function createCard(cardData, handleDelete) {
    const cardElement = cardTemplate.cloneNode(true).firstElementChild;;

    const cardImage = cardElement.querySelector('.card__image');
    const cardTitle = cardElement.querySelector('.card__title');
    const deleteButton = cardElement.querySelector('.card__delete-button');

    // Установка данных карточки
    cardImage.src = cardData.link;  
    cardImage.alt = cardData.name;   
    cardTitle.textContent = cardData.name;  

    // Обработчик клика для удаления карточки
    deleteButton.addEventListener('click', () => {
        handleDelete(cardElement);
    });

    return cardElement;
}

// @todo: Функция удаления карточки
function deleteCard(cardElement) {
    cardElement.remove();
}

// @todo: Вывести карточки на страницу
initialCards.forEach(cardData => {
    const cardElement = createCard(cardData, deleteCard);
    placesList.append(cardElement);
});
