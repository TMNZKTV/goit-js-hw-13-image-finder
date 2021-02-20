export default {
  searchValue: '',
  page: 1,
  apiKey: '20317342-a65a0e490607ec4c6c667e05c',

  fetchImages() {
    const url = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${this.searchValue}&page=${this.page}&per_page=12&key=${this.apiKey}`;

    return fetch(url).then(res =>
      res.json().then(({ hits }) => {
        this.page += 1;
        return hits;
      }),
    );
  },

  resetPage() {
    this.page = 1;
  },

  get value() {
    return this.searchValue;
  },
  set value(newValue) {
    this.searchValue = newValue;
  },
};
