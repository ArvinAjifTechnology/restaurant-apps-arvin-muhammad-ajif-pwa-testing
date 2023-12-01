import API_ENDPOINT from '../globals/api-endpoint';

class TheRestaurantDbSource {
  static async restaurantList() {
    const response = await fetch(API_ENDPOINT.RESTAURANT_LIST);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async restaurantSearch(q) {
    const response = await fetch(API_ENDPOINT.RESTAURANT_SEARCH(q));
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async restaurantDetail(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    const responseJson = await response.json();
    return responseJson.restaurant;
  }

  static async postReview(id, name, date, review) {
    const data = {
      id,
      name,
      date,
      review,
    };

    try {
      const response = await fetch(API_ENDPOINT.POST_REVIEW, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error(`Failed to post review: ${response.statusText}`);
      }

      return response.json();
    } catch (error) {
      console.error('Error posting review:', error);
      throw error; // rethrow the error for further handling if needed
    }
  }
}

export default TheRestaurantDbSource;
