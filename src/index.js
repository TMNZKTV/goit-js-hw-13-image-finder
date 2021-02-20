import './styles.css';

import fetchService from './js/fetch-service';
import updateImageMarkup from './js/update-markup';
import refs from './js/refs';

import debounce from 'lodash.debounce';

const debouncedInput = debounce(event => {
  const searchField = event.target;
  fetchService.value = searchField.value;

  // Прячем кнопку, когда поле ввода пусто
  if (fetchService.value === '') {
    clearImagesContainer();
    refs.loadMoreBtn.classList.add('is-hidden');
    return;
  }

  clearImagesContainer();
  fetchService.resetPage();
  getMorePictures();
}, 300);

refs.searchForm.addEventListener('input', debouncedInput);
refs.loadMoreBtn.addEventListener('click', getMorePictures);

function clearImagesContainer() {
  refs.gallery.innerHTML = '';
}
function getMorePictures() {
  fetchService.fetchImages().then(hits => {
    updateImageMarkup(hits);
    refs.loadMoreBtn.classList.remove('is-hidden');

    // Добавляем плавный скролл на высоту страницы
    window.scrollTo({
      top: document.documentElement.offsetHeight,
      behavior: 'smooth',
    });
  });
}
