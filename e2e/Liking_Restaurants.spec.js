/* eslint-disable no-undef */
const assert = require('assert');

Feature('Liking Restaurants');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

const emptyCase = 'Tidak ada restaurant untuk ditampilkan';

Scenario('showing empty liked restaurants', ({ I }) => {
  I.seeElement('#restaurants');
  I.see(emptyCase, '.restaurants');
});

Scenario('like a restaurant', async ({ I }) => {
  I.see(emptyCase, '#restaurants');
  I.amOnPage('/');
  I.seeElement('h3 a');

  const firstItem = locate('h3').first();
  const firstItemTitle = await I.grabTextFrom(firstItem);

  I.click(firstItemTitle);
  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('#restaurants');

  const likedItemTitle = await I.grabTextFrom('h3');

  assert.strictEqual(firstItemTitle, likedItemTitle);
});

Scenario('Unlike a Restaurant', async ({ I }) => {
  I.see(emptyCase, '#restaurants');
  I.amOnPage('/');
  I.seeElement('h3 a');

  const firstItem = locate('h3').first();
  const firstItemTitle = await I.grabTextFrom(firstItem);

  I.click(firstItemTitle);
  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('#restaurants');

  const likedItemTitle = await I.grabTextFrom('h3');

  assert.strictEqual(firstItemTitle, likedItemTitle);

  I.click(likedItemTitle);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('#restaurants');

  const emptyLikedRestaurant = await I.grabTextFrom('#restaurants');

  assert.strictEqual(emptyLikedRestaurant, emptyCase);
});
