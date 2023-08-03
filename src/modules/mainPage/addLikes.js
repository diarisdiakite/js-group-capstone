import axios from 'axios';
import { likesUrl } from '../globalElements/api.js';

const addNewLike = async (itemId) => {
  try {
    const response = await axios.post(likesUrl, {
      item_id: itemId,
    });
    window.location.reload();
    return response.data.item_id; //or return likes
  } catch (error) {
    const errorMessage = `Couldn't add your like, ${error}`;
    return errorMessage;
  }
};

export default addNewLike;