import { returnItems } from '../globalElements/api.js';

export const initializeItemsDivHTML = () => document.querySelector('.main-items');
export const itemsDivHTML = initializeItemsDivHTML();

const displayItemsMain = async () => {
  try {
    const items = await await returnItems();
    // Adding the items dynamically
    for (let i = 0; i < 24; i += 1) {
      const item = items[i];
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
          <p>
            ${item.language}
          </p>
        </div>
          <button class="items-buttons" data-item-index="${i}" id="itemPopup">Comments</button>
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
      itemsDivHTML.innerHtml += itemCardHtml;
      itemsDivHTML.appendChild(itemCardHtml);
    }
    return items;
  } catch (error) {
    const errorMessage = `Couldn't display the items, ${error}`;
    return Promise.reject(errorMessage);
  }
};

export const itemsButtons = document.querySelectorAll('.items-buttons');
export default displayItemsMain;
