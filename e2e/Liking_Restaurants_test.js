/* eslint-disable no-undef */
const assert = require('assert');

Feature('Liking Restaurants');

Before(({ I }) => {
  I.amOnPage('#/like');
});

Scenario('showing empty liked Restaurants', ({ I }) => {
  I.see('Restaurant Tidak Ditemukan', '#favorite_restaurant_not_found');
});

Scenario('liking one resto', async ({ I }) => {
  I.see('Restaurant Tidak Ditemukan', '#favorite_restaurant_not_found');

  I.amOnPage('/');

  // pause();

  I.seeElement('#card-detail');
  const firstResto = locate('#card-detail').first();
  const firstRestoName = await I.grabTextFrom(firstResto);
  I.click(firstResto);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('#/like');
  I.seeElement('.card');
  const LikedRestoName = await I.grabTextFrom('#card-detail');

  assert.strictEqual(firstRestoName, LikedRestoName);
});

Scenario('unlike one restaurants', async ({ I }) => {
  I.amOnPage('/#');

  I.waitForElement('#card-detail', 10);
  I.seeElement('#card-detail');
  const firstResto = locate('#card-detail').first();
  const firstRestoName = await I.grabTextFrom(firstResto);
  I.click(firstResto);

  I.waitForElement('#likeButton', 5);
  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('#/like');
  I.waitForElement('.card', 10);
  I.seeElement('.card');

  const likedRestaurantName = await I.grabTextFrom('#card-detail'); // perubahan disini
  assert.strictEqual(firstRestoName.trim(), likedRestaurantName.trim());

  I.seeElement('.card');

  const firstRestaurantLiked = locate('.card').first();
  I.click(firstRestaurantLiked);

  I.waitForElement('#likeButton', 5);
  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('#/like');
  I.waitForElement('#favorite_restaurant_not_found', 10);
  I.see('Restaurant Tidak Ditemukan', '#favorite_restaurant_not_found');
});
