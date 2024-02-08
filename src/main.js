import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import axios from 'axios';
const form = document.querySelector('.search-form');
const container = document.querySelector('.gallery');
const loaderContainer = document.querySelector('.loader');
const loadMoreButton = document.querySelector('.load-more-btn');

let page = 1;
const limit = 15;
const totalPages = Math.ceil(500 / limit);
let query = '';
loaderContainer.style.display = 'none';

form.addEventListener('submit', onFormSubmit);
loadMoreButton.addEventListener('click', onLoadMore);

function onFormSubmit(e) {
  e.preventDefault();
  page = 1;
  query = e.target.elements.searchQuery.value.trim();
  if (!query) {
    iziToast.warning({
      position: 'topRight',
      message: 'Please enter a search query.',
    });
    return;
  } else {
    loadMoreButton.style.display = 'none';
  }
  container.innerHTML = '';
  loaderContainer.style.display = 'block';
  searchImages(query)
    .then(data => renderImages(data))
    .catch(error =>
      iziToast.error({
        position: 'topRight',
        message: `Error: ${error}`,
      })
    )
    .finally(() => {
      e.target.reset();
      loaderContainer.style.display = 'none';
    });
}

async function onLoadMore() {
  loaderContainer.style.display = 'block';
  const data = await searchImages(query);
  renderImages(data);
  loaderContainer.style.display = 'none';

  const galleryCard = document.querySelector('.photo-card');
  const cardHeight = galleryCard.getBoundingClientRect().height;

  window.scrollBy({
    top: cardHeight * 2,
    behavior: 'smooth',
  });

  if (page > totalPages) {
    iziToast.info({
      position: 'topRight',
      message: "We're sorry, but you've reached the end of search results.",
    });
    loadMoreButton.style.display = 'none';
  }
}

async function searchImages(q) {
  const response = await axios.get('https://pixabay.com/api/', {
    params: {
      key: '42192602-d8808410d4367b6455b886704',
      q,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      page,
      per_page: limit,
    },
  });
  page += 1;
  return response.data;
}

function imageTemplate(images) {
  const {
    webformatURL,
    largeImageURL,
    tags,
    likes,
    views,
    comments,
    downloads,
  } = images;
  return `
    <div class="photo-card">
      <a class="photo-card-link" href="${webformatURL}">
        <img
          class="photo-card__img"
          src="${largeImageURL}" 
          alt="${tags}" 
        />
      </a>
      <div class="info">
        <p class="info-item">
          <b class="info-item-title">Likes</b>
          <span class="info-item-value">${likes}</span>
        </p>
        <p class="info-item">
          <b class="info-item-title">Views</b>
          <span class="info-item-value">${views}</span>
        </p>
        <p class="info-item">
          <b class="info-item-title">Comments</b>
          <span class="info-item-value">${comments}</span>
        </p>
        <p class="info-item">
          <b class="info-item-title">Downloads</b>
          <span class="info-item-value">${downloads}</span>
        </p>
      </div>
    </div>
    `;
}

function renderImages({ hits }) {
  if (hits.length > 0) {
    const markup = hits.map(imageTemplate).join('');
    container.insertAdjacentHTML('beforeend', markup);
    const lightbox = new SimpleLightbox('.photo-card-link', {
      captionDelay: 250,
      captionsData: 'alt',
    });
    lightbox.refresh();
    loadMoreButton.style.display = 'block';
  } else {
    iziToast.error({
      position: 'topRight',
      message:
        'Sorry, there are no images matching your search query. Please try again!',
    });
  }
}
