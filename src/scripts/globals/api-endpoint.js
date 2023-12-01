import CONFIG from './config';

const API_ENDPOINT = {
  RESTAURANT_LIST: `${CONFIG.BASE_URL}list`,
  DETAIL: (id) => `${CONFIG.BASE_URL}detail/${id}`,
  POST_REVIEW: `${CONFIG.BASE_URL}review`,
  RESTAURANT_SEARCH: (q) => `${CONFIG.BASE_URL}search?q=${q}`,
};

export default API_ENDPOINT;
