import './assets/css/style.css';
import displayItemsMain from './modules/mainPage/displayItems.js';
import footerText from './modules/globalElements/footer.js';

displayItemsMain();

const myFooter = document.getElementById('footer-section');
myFooter.innerHTML += footerText;
