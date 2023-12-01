/* eslint-disable no-undef */
import FavoriteIdb from '../src/scripts/data/favorite-idb';
import * as TestFactory from './helper/test-factory';

describe('Liking A resto', () => {
  const addLikeButtonContainer = () => {
    document.body.innerHTML = '<button id="likeButton"></button>';
  };

  beforeEach(() => {
    addLikeButtonContainer();
    global.structuredClone = jest.fn((val) => JSON.parse(JSON.stringify(val)));
  });

  it('should show the like button when the resto has not been liked before', async () => {
    await TestFactory.createLikeButtonInitWithResto({ id: 1 });

    expect(document.querySelector('[aria-label="like this restaurant"]')).toBeTruthy();
  });

  it('should not show the unlike button when the resto has not been liked before', async () => {
    await TestFactory.createLikeButtonInitWithResto({ id: 1 });

    expect(document.querySelector('[aria-label="unlike this restaurant"]')).toBeFalsy();
  });

  it('should be able to like the resto', async () => {
    await TestFactory.createLikeButtonInitWithResto({ id: 1 });

    document.querySelector('#likeButton').dispatchEvent(new Event('click'));

    // Memastikan film berhasil disukai
    const restaurant = await FavoriteIdb.getRestaurant(1);
    expect(restaurant).toEqual({ id: 1 });

    await FavoriteIdb.deleteRestaurant(1);
  });

  it('should not add a resto again when its already liked', async () => {
    await TestFactory.createLikeButtonInitWithResto({ id: 1 });

    // Tambahkan film dengan ID 1 ke daftar film yang disukai
    await FavoriteIdb.putRestaurant({ id: 1 });

    // Simulasikan pengguna menekan tombol suka film
    document.querySelector('#likeButton').dispatchEvent(new Event('click'));

    // Tidak ada film yang ganda
    expect(await FavoriteIdb.getAllRestaurant()).toEqual([{ id: 1 }]);

    await FavoriteIdb.deleteRestaurant(1);
  });

  it('should not add a resto when it has no id', async () => {
    await TestFactory.createLikeButtonInitWithResto({});

    document.querySelector('#likeButton').dispatchEvent(new Event('click'));

    expect(await FavoriteIdb.getAllRestaurant()).toEqual([]);
  });
});
