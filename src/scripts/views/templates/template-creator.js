import CONFIG from '../../globals/config';

const createRestoDetailTemplate = (data) => `
  <h2 class="restaurant__title">${data.name}</h2>
  <img class="restaurant__poster" src="${CONFIG.BASE_IMAGE_URL + data.pictureId}" alt="${data.name}" />
  <div class="restaurant__info">
  <h3>Information</h3>
    <h4>Alamat</h4>
    <p>${data.address}, ${data.city}</p>
    <h4>Kategori</h4>
    ${data.categories.map((categorie) => ` ${categorie.name}`)}
    <h4>Menu</h4>
    <hr>
    <h5>Makanan</h5>
    ${data.menus.foods.map((food) => `<li>${food.name}</li>`).join('')}
    <h5>Minuman</h5>
    ${data.menus.drinks.map((drink) => `<li>${drink.name}</li>`).join('')}
    <h4>Rating</h4>
    <p>&#11088; ${data.rating}</p>
    
  </div>
  <div class="restaurant__overview">
    <h3>Description</h3>
    <p>${data.description}</p>
    <br>
    <h4>Customer Review</h4>
    ${data.customerReviews.map((review) => `
    <p>${review.date} </p>
    <p>Nama : ${review.name}</p>
    <p>Review : ${review.review}</p>
    <hr>
    `).join('')}
    
  </div>
  
`;

const createSkeletonRestoTemplate = (count) => {
  const firstItem = (numbIndex) => numbIndex === 0 && count % 2 !== 0;
  let template = '';

  for (let i = 0; i < count; i += 1) {
    template += `
      <div class="restaurant-item ${firstItem(i) ? 'item-ganjil' : ''}">
        <div class="restaurant-item__header">
            <img class="restaurant-item__header__poster" width="100%" height="350px" src="./images/placeholder.png" alt="skeleton">
        </div>
        <div class="restaurant-item__content">
            <h3 class="skeleton">Lorem ipsum dolor sit.</a></h3>
            <p class="truncate ${firstItem(i) ? '2' : ''}">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A adipisci alias aspernatur, assumenda aut consectetur consequuntur debitis deleniti dicta dolorem dolorum eos exercitationem labore laboriosam magni nihil, nobis obcaecati optio perspiciatis placeat qui recusandae saepe sapiente sequi totam ullam ut.</p>
        </div>
      </div>
  `;
  }
  return template;
};

const createRestoItemTemplate = (data, index, lastIndex) => {
  const firstItem = (numbIndex) => numbIndex === 0 && lastIndex % 2 !== 0;
  return `
  <div class="restaurant-item ${firstItem(index) ? 'item-ganjil' : ''}">
    <div class="restaurant-item__header">
        <img class="restaurant-item__header__poster lazyload" width="100%" heigth="350px" alt="${data.name}"
            data-src="${data.pictureId ? CONFIG.BASE_IMAGE_URL + data.pictureId : 'https://picsum.photos/id/10/400/400'}" src="./images/placeholder-small.jpg" >
        <div class="restaurant-item__header__rating">
            <p>${data.city} ⭐️<span class="restaurant-item__header__rating__score">${data.rating}</span></p>
        </div>
    </div>
    <div class="restaurant-item__content">
        <h3><a href="${`/#/detail/${data.id}`}">${data.name}</a></h3>
        <p>${data.description}</p>
        <p class="truncate${firstItem(index) ? '2' : ''}">${data.description}</p>
    </div>
  </div>
  `;
};

const createLikeRestaurantButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createUnlikeRestaurantButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createSkeletonRestoTemplate,
  createRestoItemTemplate,
  createRestoDetailTemplate,
  createLikeRestaurantButtonTemplate,
  createUnlikeRestaurantButtonTemplate,
};
