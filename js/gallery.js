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
const galleryListRef = document.querySelector('.js-gallery');
galleryListRef.append(...gallery);

