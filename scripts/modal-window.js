const buttonOpenModalSearch = document.querySelector('.search__button');
const dialogSearch = document.querySelector('.index__modal-search');


function connectButtonsWithDialog(buttonOpen, dialog) {
  buttonOpen.addEventListener('click', () => {
    dialog.showModal();
    // Скрытие полосы прокрутки основного окна
    document.body.style.overflow = "hidden";
    // Кнопка закрытия окна
    const buttonClose = dialog.querySelector('.modal-close-button');
    buttonClose.onclick = () => {
      dialog.close();
      document.body.style.overflow = "visible";
    };
    // Закрытие модального окна после клика на backdrop и возврат полосы прокрутки
    dialog.onclick = (event) => {
      if (event.target === dialog) {
        dialog.close();
        document.body.style.overflow = "visible";
      }
    };
  });
}

connectButtonsWithDialog(buttonOpenModalSearch, dialogSearch);
