import './assets/css/style.css';
import displayItemsMain, { mainPageItemsCounter } from './modules/mainPage/displayItems.js';
import footerText from './modules/globalElements/footer.js';

const mainPageCounterDisplayHTML = document.getElementById('counter');
const updateSelectedItemsCount = async () => {
  const count = await mainPageItemsCounter();
  mainPageCounterDisplayHTML.textContent = count;
};

window.addEventListener('load', updateSelectedItemsCount);
displayItemsMain();

const myFooter = document.getElementById('footer-section');
myFooter.innerHTML += footerText;
