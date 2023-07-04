const buttonOpenModalSearch = document.querySelector('.search__button');
const dialogSearch = document.querySelector('.index__modal-search');


function connectButtonsWithDialog(buttonOpen, dialog) {
  buttonOpen.addEventListener('click', () => {
    dialog.showModal();
    // Кнопка закрытия окна
    const buttonClose = dialog.querySelector('.modal-close-button');
    buttonClose.onclick = () => {
      dialog.close();
    };
    // Закрытие модального окна после клика на backdrop
    dialog.onclick = (event) => {
      if (event.target === dialog) dialog.close();
    };
  });
}

connectButtonsWithDialog(buttonOpenModalSearch, dialogSearch);
