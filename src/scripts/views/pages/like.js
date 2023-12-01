/* eslint-disable no-unused-vars */
import FavoriteIdb from '../../data/favorite-idb';
import TheRestaurantDbSource from '../../data/therestaurantdb-source';
import { createRestaurantItemTemplate, createSearchBarTemplate } from '../templates/template-creator';

const Like = {
  async render() {
    return `
      <div class="content">
      ${createSearchBarTemplate()}
        <div id="restaurants" class="restaurants">
        </div>
      </div>
    `;
  },

  async afterRender() {
    const searchInput = document.querySelector('#searchInput');

    // Load initial restaurant list
    const originalRestaurants = await FavoriteIdb.getAllRestaurant();
    let displayedRestaurants = [...originalRestaurants];
    this.showRestaurants(displayedRestaurants);

    // Add event listener for input change (detect when the user types or deletes in the search bar)
    searchInput.addEventListener('input', async () => {
      const query = searchInput.value.trim();
      if (query !== '') {
        displayedRestaurants = await TheRestaurantDbSource.restaurantSearch(query);
      } else {
        // If the search input is empty, show the original restaurant list
        displayedRestaurants = [...originalRestaurants];
      }
      this.showRestaurants(displayedRestaurants);
    });
  },

  showRestaurants(restaurants) {
    const restaurantsContainer = document.querySelector('#restaurants');
    restaurantsContainer.innerHTML = '';

    // Tambahkan pengecekan jika hasil pencarian kosong
    if (restaurants.length === 0) {
      restaurantsContainer.innerHTML = '<p id="favorite_restaurant_not_found">Restaurant Tidak Ditemukan</p>';
      return;
    }

    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default Like;
