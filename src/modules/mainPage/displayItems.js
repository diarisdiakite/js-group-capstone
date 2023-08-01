import { returnItems } from '../globalElements/api.js';

export const initializeItemsDivHTML = () => document.querySelector('.main-items');
export const itemsDivHTML = initializeItemsDivHTML();
const selectedItems = [];

// Implementing the counter
export const returnSelectedItems = async () => {
  if (selectedItems.length === 0) {
    try {
      const items = await await returnItems();
      // Adding the items dynamically
      for (let i = 0; i < 24; i += 1) {
        selectedItems.push(items[i]);
      }
      return selectedItems;
    } catch (error) {
      const errorMessage = `couldn't find the items. ${error}`;
      return Promise.reject(errorMessage);
    }
  } else {
    return selectedItems;
  }
};

export const mainPageItemsCounter = async () => {
  await returnSelectedItems();
  return selectedItems.length;
};

(async () => {
  const selectedItems = await returnSelectedItems();
  return selectedItems.length;
})();

// Display Items
const displayItemsMain = async () => {
  try {
    const items = await await returnItems();
    for (let i = 0; i < 24; i += 1) {
      const item = items[i];
      selectedItems.push(items[i]);

      const itemCardHtml = document.createElement('div');
      itemCardHtml.classList.add('item');
      itemCardHtml.innerHTML = `

        <img class="item-image" 
          src=${item.image.medium} 
          alt="item-image" 
          placeholder="image for item 1">
        </img>
        
        
        <div class="item-wrapped-elements">
          <h3>
            ${item.name}
          </h3>
          
        </div>
          <button 
            class="items-buttons" 
            data-item-index="${i}" 
            id="itemPopup"
          >
            Comments
          </button>
        </div>`;

      const itemImage = document.createElement('div');
      itemImage.setAttribute('blur', '100');

      if (window.innerWidth < 768) {
        itemImage.src = `${item.image.medium}`;
        itemCardHtml.appendChild(itemImage);
      } else {
        itemImage.src = `${item.image.original}`;
        itemCardHtml.appendChild(itemImage);
      }

      // Adding the like button and image
      const likeButton = document.createElement('button');
      likeButton.classList.add('like-buttons');
      likeButton.dataset.itemIndex = i;
      likeButton.id = 'itemLike';

      const likeImage = document.createElement('img');
      likeImage.src = '../assets/images/like-btn.png';

      likeButton.appendChild(likeImage);
      itemCardHtml.querySelector('.item-wrapped-elements').appendChild(likeButton);

      itemsDivHTML.innerHtml += itemCardHtml;
      itemsDivHTML.appendChild(itemCardHtml);
    }
    return selectedItems;
  } catch (error) {
    const errorMessage = `Couldn't display the items, ${error}`;
    return Promise.reject(errorMessage);
  }
};

// Adding likes
export const itemsLikes = document.querySelectorAll('.like-buttons');
export const itemsButtons = document.querySelectorAll('.items-buttons');
export default displayItemsMain;
