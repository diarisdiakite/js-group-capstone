import './assets/css/style.css';
import displayItemsMain from './modules/mainPage/displayItems.js';
import footerText from './modules/globalElements/footer.js';
import commentPopUp from './modules/mainPage/commentsPop.js';
import { comments } from './modules/mainPage/comments.js';

displayItemsMain();
commentPopUp();
comments();
const myFooter = document.getElementById('footer-section');
myFooter.innerHTML += footerText;
