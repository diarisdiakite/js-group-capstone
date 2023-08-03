import getItems from '../globalElements/api.js';
// import counter from './counter.js';
import commentInput from './createComment.js';
import displayComment from './displayComment.js';

const commentPopUp = () => {
  const container = document.querySelector('.main-items');
  const popUp = document.querySelector('.comment-container');
  container.addEventListener('click', (e) => {
    if (e.target.classList.contains('items-buttons')) {
      const id = parseInt(e.target.getAttribute('data-id'), 10);
      getItems().then((res) => {
        const Item = res.find(((item) => item.id === id));
        if (Item !== undefined) {
          popUp.innerHTML = `
          <div class="comment-pop-up">
        <div class="show-image">
          <img src='${Item.image.original}' alt="">
          <span class="closeBtn">x</span> 
        </div>
        <div class="show-info">
          <h2 class="title">${Item.name}</h2>
          <p class="description">${Item.summary}</p>
        </div>
        <div class="comment-section">
        <h3 class='heading'>comments<span>(0)</span></h3>
        </div>
        <h2>Add a comment</h2>
          <form action="" id="form">
            <input type="text" id="name" placeholder="Your name">
            <textarea name="comment" id="comment"></textarea>
            <input type="submit" id="commentBtn" value="Comment">
          </form>
        </div>
        `;
          popUp.classList.add('open-pop');
          document.querySelector('.closeBtn').addEventListener('click', () => {
            popUp.classList.remove('open-pop');
          });
          commentInput(Item);
          displayComment(Item);
        }
      });
    }
  });
};

export default commentPopUp;
