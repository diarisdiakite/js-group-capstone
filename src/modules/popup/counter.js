const counter = (comments) => {
  const heading = document.querySelector('.heading');
  const commentContainer = document.querySelector('.comment-section');
  if (comments.length > 0) {
    heading.innerHTML = `comments<span>(${comments.length})</span`;
    commentContainer.prepend(heading);
  }
};

export default counter;