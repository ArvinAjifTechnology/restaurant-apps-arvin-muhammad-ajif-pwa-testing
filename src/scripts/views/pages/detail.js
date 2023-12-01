import UrlParser from '../../routes/url-parser';
import { createPostRestaurantReviewTemplate, createRestaurantDetailTemplate } from '../templates/template-creator';
import LikeButtonInitiator from '../../utils/like-button-initiator';
import TheRestaurantDbSource from '../../data/therestaurantdb-source';

const Detail = {
  async render() {
    return `
      <div id="restaurant" class="restaurant"></div>
      <div id="likeButtonContainer"></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await TheRestaurantDbSource.restaurantDetail(url.id);
    const restaurantContainer = document.querySelector('#restaurant');
    restaurantContainer.innerHTML = createRestaurantDetailTemplate(restaurant);
    const restaurantPostReview = createPostRestaurantReviewTemplate();
    restaurantContainer.insertAdjacentHTML('beforeend', restaurantPostReview);
    console.log(restaurantContainer);
    const postReviewForm = document.getElementById('postReviewForm');
    const date = new Date().toLocaleDateString('id-ID', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
    // Function to update the HTML content with the submitted review
    function updateReviewInDOM(reviewData) {
      const reviewContainer = document.querySelector('.detail-review table');

      // Create a new table row with the submitted review
      const newRow = document.createElement('tr');
      newRow.innerHTML = `
    <td>${reviewData.name}</td>
    <td>${date}</td>
    <td>${reviewData.review}</td>
  `;

      // Append the new row to the existing reviews table
      reviewContainer.appendChild(newRow);
    }
    postReviewForm.addEventListener('submit', async (event) => {
      event.preventDefault();

      const formData = new FormData(postReviewForm);
      const reviewData = {};

      formData.forEach((value, key) => {
        reviewData[key] = value;
      });

      try {
        await TheRestaurantDbSource.postReview(
          restaurant.id,
          reviewData.name,
          date,
          reviewData.review,
        );
        // Update the HTML content with the submitted review

        // Optionally, you can display a success message or update the UI
        console.log('Review submitted successfully!');

        updateReviewInDOM(reviewData);
        // Reset the form
        postReviewForm.reset();
      } catch (error) {
        console.error('Error submitting review:', error);
      }
    });

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant: {
        id: restaurant.id,
        name: restaurant.name,
        description: restaurant.description,
        pictureId: restaurant.pictureId,
        rating: restaurant.rating,
      },
    });

    const skipLinkElem = document.querySelector('.skip-link');
    skipLinkElem.addEventListener('click', (event) => {
      event.preventDefault();
      document.querySelector('#mainContent').focus();
    });
  },
};

export default Detail;
