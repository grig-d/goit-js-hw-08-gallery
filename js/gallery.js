// https://github.com/goitacademy/javascript-homework/tree/master/homework-08
// https://monosnap.com/file/KKoRHdov8Thm2oWpzURSOg2L6iDCp3

// Создание и рендер разметки по массиву данных и предоставленному шаблону.
// Реализация делегирования на галерее ul.js-gallery и получение url большого изображения.
// Открытие модального окна по клику на элементе галереи.
// Подмена значения атрибута src элемента img.lightbox__image.
// Закрытие модального окна по клику на кнопку button[data-action="close-lightbox"].
// Очистка значения атрибута src элемента img.lightbox__image.
// Это необходимо для того, чтобы при следующем открытии модального окна, пока грузится изображение, мы не видели предыдущее.
// Ссылка на оригинальное изображение должна храниться в data-атрибуте source на элементе img, и указываться в href ссылки (это необходимо для доступности)

// Дополнительно
// Закрытие модального окна по клику на div.lightbox__overlay
// Закрытие модального окна по нажатию клавиши ESC
// Пролистывание изображений галереи в открытом модальном окне клавишами "влево" и "вправо"

import galleryItems from './gallery-items.js';

const refs = {
  galleryList: document.querySelector('.js-gallery'),
  modal: document.querySelector('.js-lightbox'),
  modalImage: document.querySelector('.lightbox__image'),
  closeBtn: document.querySelector('button[data-action="close-lightbox"]'),
};

// gallery rendering
const createGalleryItem = item => {
  const galleryItemRef = document.createElement('li');
  galleryItemRef.classList.add('gallery__item');

  const galleryLinkRef = document.createElement('a');
  galleryLinkRef.classList.add('gallery__link');
  galleryLinkRef.href = item.original;

  const galleryImageRef = document.createElement('img');
  galleryImageRef.classList.add('gallery__image');
  galleryImageRef.src = item.preview;
  galleryImageRef.dataset.source = item.original;
  galleryImageRef.alt = item.description;

  galleryLinkRef.append(galleryImageRef);
  galleryItemRef.append(galleryLinkRef);

  return galleryItemRef;
};

const gallery = galleryItems.map(galleryItem => createGalleryItem(galleryItem));
refs.galleryList.append(...gallery);

// delegation and open modal window
refs.galleryList.addEventListener('click', event => {
  event.preventDefault();
  if (event.target.nodeName === 'IMG') {
    const urlCurrent = event.target.dataset.source;
    refs.modalImage.src = urlCurrent;
    openModalHandler();
  }
});

// close modal
refs.closeBtn.addEventListener('click', closeModalHandler);

// functions
function openModalHandler() {
  window.addEventListener('keydown', pressedEscapeHandler);
  refs.modal.classList.add('is-open');
}

function closeModalHandler() {
  window.removeEventListener('keydown', pressedEscapeHandler);
  refs.modal.classList.remove('is-open');
  refs.modalImage.src = '';
}

function pressedEscapeHandler(event) {
  if (event.code === 'Escape') {
      closeModalHandler();
  }
}
