import './assets/css/style.css';
import displayItemsMain from './modules/mainPage/displayItems.js';
import mainPageItemsCounter from './modules/mainPage/itemsCounter.js';
import footerText from './modules/globalElements/footer.js';
import commentPopUp from './modules/popup/commentsPop.js';
import { comments } from './modules/popup/comments.js';

const mainPageCounterDisplayHTML = document.getElementById('counter');
const updateSelectedItemsCount = async () => {
  const count = await mainPageItemsCounter();
  mainPageCounterDisplayHTML.textContent = count;
};

window.addEventListener('load', updateSelectedItemsCount);
displayItemsMain();
commentPopUp();
comments();

const myFooter = document.getElementById('footer-section');
myFooter.innerHTML += footerText;
