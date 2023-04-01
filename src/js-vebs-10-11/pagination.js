import { JSONPlaceholderAPI } from './js-placeholder-api';
import { refs } from './refs-posts';
import postTMPL from '../templates/posts.hbs';

const jsonplaceholderapi = new JSONPlaceholderAPI();
const POST_COUNT = 100;

async function handleLoadPosts() {
  try {
    const data = await jsonplaceholderapi.fetchPhotos();
    console.log('data:', data);
    renderPostsMarkup(data);

    // if (POST_COUNT / jsonplaceholderapi.count === jsonplaceholderapi.page) {
    //   refs.loadMoreBtn.disabled = true;
    // }
    if (POST_COUNT / jsonplaceholderapi.count === jsonplaceholderapi.page) {
      refs.loadMoreBtn.remove();
      return;
    }
    jsonplaceholderapi.incrementPage();
  } catch (error) {
    console.log('error:', error);
  }
}

handleLoadPosts();

function renderPostsMarkup(data) {
  refs.postWrapperEl.insertAdjacentHTML('beforeend', postTMPL(data));
}

refs.loadMoreBtn.addEventListener('click', handleLoadPosts);
