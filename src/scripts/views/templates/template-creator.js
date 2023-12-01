import CONFIG from '../../globals/config';

const createRestaurantDetailTemplate = (restaurant) => `
<h2 class="restaurant__name">${restaurant.name}</h2>
<div tabindex="0" class="container-info">
  <div class="restaurant__poster">
      <picture>
        <source
          class="restaurant__poster lazyload"
          data-src="${CONFIG.BASE_IMAGE_SMALL_URL + restaurant.pictureId}"
          type="image/webp"
          media="all and (max-width: 300px)"
        />
        <source
          class="restaurant__poster lazyload"
          data-src="${CONFIG.BASE_IMAGE_SMALL_URL + restaurant.pictureId}"
          type="image/jpeg"
          media="all and (max-width: 300px)"
        />
        <source
          class="restaurant__poster lazyload"
          data-src="${CONFIG.BASE_IMAGE_SMALL_URL + restaurant.pictureId}"
          type="image/webp"
          media="all and (min-width: 301px)"
        />
        <source
          class="restaurant__poster lazyload"
          data-src="${CONFIG.BASE_IMAGE_SMALL_URL + restaurant.pictureId}"
          type="image/jpeg"
          media="all and (min-width: 301px)"
        />
        <source
          class="restaurant__poster lazyload"
          data-src="${CONFIG.BASE_IMAGE_MEDIUM_URL + restaurant.pictureId}"
          type="image/webp"
          media="all and (min-width: 700px) and (max-width: 900px)"
        />
        <source
          class="restaurant__poster lazyload"
          data-src="${CONFIG.BASE_IMAGE_MEDIUM_URL + restaurant.pictureId}"
          type="image/jpeg"
          media="all and (min-width: 700px) and (max-width: 900px)"
        />
        <source
          class="restaurant__poster lazyload"
          data-src="${CONFIG.BASE_IMAGE_LARGE_URL + restaurant.pictureId}"
          type="image/webp"
          media="all and (min-width: 901px)"
        />
        <source
          class="restaurant__poster lazyload"
          data-src="${CONFIG.BASE_IMAGE_LARGE_URL + restaurant.pictureId}"
          type="image/jpeg"
          media="all and (min-width: 901px)"
        />
        <img class="restaurant__poster lazyload" data-src="${CONFIG.BASE_IMAGE_MEDIUM_URL + restaurant.pictureId}" alt="${restaurant.name}" />
      </picture>
  <div class="">
  <h3>${restaurant.rating}</h4>
    <h3>${restaurant.address}</h3>
    <h3>${restaurant.city}</h3>
    <h4>${restaurant.description}</h4>
  </div>
  <div tabindex="0" class="">
      <div class="">
        <h4>Food</h4>
        <table>
          <tr>
            <th>Food Item</th>
          </tr>
          ${restaurant.menus.foods
    .map(
      (food) => `
                <tr>
                  <td>${food.name}</td>
                </tr>
              `,
    )
    .join('')}
        </table>
      </div>

      <div class="">
        <h4>Drink</h4>
        <table>
          <tr>
            <th>Drink Item</th>
          </tr>
          ${restaurant.menus.drinks
    .map(
      (drink) => `
                <tr>
                  <td>${drink.name}</td>
                </tr>
              `,
    )
    .join('')}
        </table>
      </div>
    </div>
  <div class="container-review">
      <h3 tabindex="0" class="title-review">Reviews</h3>
      <div tabindex="0" class="detail-review">
        <table>
          <tr>
            <th>User</th>
            <th>Date</th>
            <th>Review</th>
          </tr>
          ${restaurant.customerReviews
    .map(
      (review) => `
                <tr>
                  <td>${review.name}</td>
                  <td>${review.date}</td>
                  <td>${review.review}</td>
                </tr>
              `,
    )
    .join('')}
        </table>
      </div>
    </div>
</div>
`;

const createRestaurantItemTemplate = (restaurant) => `
<div class="restaurant-item">
<article tabindex="0" class="card">
    <div class="restaurant-item__header">
      <img class="restaurant-item__header__poster lazyload" alt="${restaurant.name}"
           data-src="${restaurant.pictureId ? CONFIG.BASE_IMAGE_URL + restaurant.pictureId : 'https://restaurant-api.dicoding.dev/images/medium/'}">
      <div class="restaurant-item__header__rating">
        <p>⭐️<span class="restaurant-item__header__rating__score">${restaurant.rating}</span></p>
      </div>
    </div>
    <div class="restaurant-item__content">
      <h3><a href="/#/detail/${restaurant.id}" id="card-detail">${restaurant.name}</a></h3>
    </div>
  </div>

`;

const createLikeButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;
const createPostRestaurantReviewTemplate = () => `
<div class="post-review-container">
<h2 class="post-review-title">Post Your Review</h2>
<form id="postReviewForm" class="post-review-form">
  <label for="userName">Your Name:</label>
  <input type="text" id="name" name="name" required>
  
  <label for="userReview">Your Review:</label>
  <textarea id="review" name="review" rows="4" required></textarea>

  <button type="submit" class="post-review-button">Submit Review</button>
</form>
</div>>
`;

const createSearchBarTemplate = () => `
  <div class="search-bar" tab-index="0">
    <input type="text" id="searchInput" placeholder="Search for restaurants...">
    <button type="button" id="searchButton" aria-label="Search"><i class="fa fa-search"></i></button>
  </div>
`;

export {
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
  createPostRestaurantReviewTemplate,
  createSearchBarTemplate,
};
