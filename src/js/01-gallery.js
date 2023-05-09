import { galleryItems } from './gallery-items.js';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

console.log(galleryItems);

const gallery = document.querySelector('.gallery');

function createGalleryItem({ preview, original, description }) {
    return `
        <li class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img class="gallery__image" src="${preview}" alt="${description}" />
            </a>
        </li>
    `;
}

function renderGalleryItems(galleryItems) {
    const galleryItemsMarkup = galleryItems
        .map(item => createGalleryItem(item))
        .join('');

    gallery.insertAdjacentHTML('beforeend', galleryItemsMarkup);
}

renderGalleryItems(galleryItems);

const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
});

gallery.addEventListener('click', event => {
    event.preventDefault();
    if (event.target.tagName === 'IMG') {
        lightbox.open();
    }
});
