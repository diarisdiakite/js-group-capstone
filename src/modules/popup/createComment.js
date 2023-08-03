import displayComment from './displayComment.js';

const commentInput = (Item) => {
  const form = document.querySelector('#form');
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const insight = document.getElementById('comment').value.trim();
    if (name === '' || insight === '') {
      return;
    }
    await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/qERiOUdIIcsyXktZm12r/comments/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ item_id: Item.id, username: name, comment: insight }),
    });
    document.getElementById('name').value = '';
    document.getElementById('comment').value = '';
    await displayComment(Item);
  });
};

export default commentInput;
