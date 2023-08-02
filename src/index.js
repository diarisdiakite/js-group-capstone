import './assets/css/style.css';
import displayItemsMain, { mainPageItemsCounter } from './modules/mainPage/displayItems.js';
import footerText from './modules/globalElements/footer.js';
import commentPopUp from './modules/mainPage/commentsPop.js';
import { comments } from './modules/mainPage/comments.js';

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
