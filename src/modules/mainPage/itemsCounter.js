import { returnItems } from '../globalElements/api.js';

// Implementing the counter
const mainPageItemsCounter = async () => {
  const items = await returnItems();
  return items.length;
};

export default mainPageItemsCounter;