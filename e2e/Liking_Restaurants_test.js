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
