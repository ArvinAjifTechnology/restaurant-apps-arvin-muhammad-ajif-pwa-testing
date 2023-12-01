import restoran from '../public/data/DATA.json';

// eslint-disable-next-line no-console
console.log(restoran);

// eslint-disable-next-line no-shadow
const restaurantList = (restoran) => {
  const restaurantElement = document.querySelector('#list');
  restaurantElement.innerHTML = '';
  restoran.forEach((restaurant) => {
    const {
      name, description, pictureId, city, rating,
    } = restaurant;
    const Listrestaurant = document.createElement('div');

    Listrestaurant.innerHTML = `
        <div class="list-item>
        <h1><a href="#">${name}</a></h1>
        <img src="${pictureId}" alt="${name}">
        <p>City : ${city}</P>
        <p tabindex="0">Rat :${rating}</p>
        <p class="description">${description}</p>
        </div>`;

    restaurantElement.appendChild(Listrestaurant);
  });
};

restaurantList(restoran.restaurants);
