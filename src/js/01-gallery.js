// Add imports above this line
import simpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';
// Change code below this line
const galleryWrap = document.querySelector('.gallery');
const galleryMarkup = creatGalleryImage(galleryItems);
galleryWrap.insertAdjacentHTML('beforeend', galleryMarkup);

function creatGalleryImage(galleryItems) {
  const markup = galleryItems
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
  <a class="gallery__link" data-source="${original}" href="#">
    <img
      class="gallery__image"
      src="${preview}"
     
      alt="${description}"
    />
  </a>
  </div>`;
    })
    .join('');
  return markup;
}
let gallery = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  sourceAttr: 'data-source',
  scrollZoom: false,
  captionDelay: 50,
  doubleTapZoom: 1,
});
