import counter from '../modules/mainPage/counter.js';

describe('counter function', () => {
  test('should update heading with the correct comment count', () => {
    const heading = document.createElement('h3');
    const commentContainer = document.createElement('div');
    const comments = ['Comment 1', 'Comment 2', 'Comment 3'];
    counter(comments, heading, commentContainer);

    expect(heading.innerHTML).toBe('comments<span>(3)</span>');
  });

  test('should prepend the heading to the comment container', () => {
    const commentContainer = document.createElement('div');
    const heading = document.createElement('h3');
    const comments = ['Comment 1', 'Comment 2'];
    counter(comments, heading, commentContainer);

    expect(commentContainer.firstChild).toBe(heading);
  });
});
