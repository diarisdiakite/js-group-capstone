const counter = (comments, heading, commentContainer) => {
  heading.innerHTML = `comments<span>(${comments.length})</span>`;
  commentContainer.prepend(heading);
};

export default counter;
