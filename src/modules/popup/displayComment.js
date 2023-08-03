import counter from './counter.js';

const displayComment = async (Item) => {
  await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/o489efAMFwz4kpcDZkaq/comments?item_id=${Item.id}`).then((res) => res.json()).then((data) => {
    const comments = data;
    const commentContainer = document.querySelector('.comment-section');
    const heading = document.querySelector('.heading');
    if (comments.length > 0) {
      let commentHtml = '';
      comments.forEach((comment) => {
        commentHtml += `
        <p class="comment">${comment.creation_date} ${comment.username}: ${comment.comment}</p>`;
        commentContainer.innerHTML = commentHtml;
        counter(comments, heading, commentContainer);
      });
    }
  });
};
export default displayComment;
