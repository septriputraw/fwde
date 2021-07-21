import TheRestaurantSource from '../../data/therestodb-source';
import { createRestoItemTemplate, createSkeletonRestoTemplate } from '../templates/template-creator';

const Home = {
  async render() {
    return `
      <div class="content">
        <h2 class="content__heading">Loading</h2>
        <div id="restaurants" class="restaurants">
          ${createSkeletonRestoTemplate(20)}
        </div>
      </div>
    `;
  },

  async afterRender() {
    const heading = document.querySelector('.content__heading');
    heading.style.display = 'none';
    const restaurants = await TheRestaurantSource.getList();
    const restaurantsContainer = document.querySelector('#restaurants');
    restaurantsContainer.innerHTML = '';
    restaurants.forEach((resto) => {
      restaurantsContainer.innerHTML += createRestoItemTemplate(resto);
    });
  },
};

export default Home;
