import cardTpl from '../templates/card.hbs';
import refs from './refs';

function updateImageMarkup(imageArray) {
  const markup = cardTpl(imageArray);
  refs.gallery.insertAdjacentHTML('beforeend', markup);
}

export default updateImageMarkup;
