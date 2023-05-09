import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox'; // Видаліть /dist/simple-lightbox.min.js з імпорту
import 'simplelightbox/dist/simple-lightbox.min.css';

console.log(galleryItems);

const galleryEl = document.querySelector('.gallery');
const imgGallery = createImgCard(galleryItems);

galleryEl.insertAdjacentHTML('beforeend', imgGallery);

function createImgCard(galleryItems) {
return galleryItems
    .map(({ preview, original, description }) => `
    <li class="gallery__item">
        <a class="gallery__link" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>
    </li>
    `)
    .join('');
}

function onImgOriginslCard(event) {
event.preventDefault();

if (event.target.nodeName !== 'IMG') {
    return;
}

const instance = new SimpleLightbox('.gallery a', {
    onShow: () => document.addEventListener('keydown', onCloseModal),
    onClose: () => document.removeEventListener('keydown', onCloseModal),
});

instance.open();
}

function onCloseModal(event) {
if (event.code === 'Escape') {
    instance.close();
}
}

galleryEl.addEventListener('click', onImgOriginslCard);
