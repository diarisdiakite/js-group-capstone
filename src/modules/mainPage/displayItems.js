import { returnItems } from '../globalElements/api.js';

export const initializeItemsDivHTML = () => document.querySelector('.main-items');
export const itemsDivHTML = initializeItemsDivHTML();

const displayItemsMain = async () => {
  try {
    const items = await await returnItems();
    // Adding the items dynamically
    for (let i = 0; i < 10; i += 1) {
      const item = items[i];
      const itemCardHtml = document.createElement('div');
      itemCardHtml.classList.add('item');
      itemCardHtml.innerHTML = `
                    
        <div class="item-image">
          <img class="img-placeholder" src=${item.image.meduim} alt="item-image" placeholder="image for item 1">
          </img>
        </div>
        
        <div class="item-wrapped-text">
          <div class="sections-title">
            <h3>
              ${item.name}
            </h3>
            <p>
              ${item.language}
            </p>
          </div>
          <button class="items-buttons" data-item-index="${i}" id="itemPopup">See item</button>
        </div>
        <div id="item-image" class="item-image"></div>
      </div>`;

      /* const itemImage = document.createElement('div');
        itemImage.setAttribute('blur', '100');

        if (window.innerWidth < 768) {
          itemImage.src = `${item.mobileImageUrls[0]}`;
          itemCardHtml.appendChild(itemImage);
          // itemCardHtml.classList.add('js-mobile-itemCards');
        } else {
          itemImage.src = `${item.desktopImageUrls[0]}`;
          itemCardHtml.appendChild(itemImage);
          // itemCardHtml.classList.add('js-desktop-itemCards');
        }
        itemsDivHTML.innerHtml += itemCardHtml; */
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
