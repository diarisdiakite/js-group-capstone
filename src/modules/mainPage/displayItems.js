import { returnItems, returnLikes } from '../globalElements/api.js';
import addNewLike from './addLikes.js';

export const initializeItemsDivHTML = () => document.querySelector('.main-items');
export const itemsDivHTML = initializeItemsDivHTML();
const selectedItems = [];

// Display Items
const displayItemsMain = async () => {
  const items = await returnItems();
  const likes = await returnLikes();

  try {
    // Adding the items dynamically
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
            data-id=${item.id} 
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

      const likesCountHTML = document.createElement('div');
      const itemsLikes = likes.find((like) => like.item_id === item.id);
      const likesCounts = itemsLikes ? itemsLikes.likes : 0;
      likesCountHTML.textContent = likesCounts || 0;
      itemCardHtml.querySelector('.item-wrapped-elements').appendChild(likesCountHTML);

      likeButton.addEventListener('click', () => {
        addNewLike(item.id);
      });

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
