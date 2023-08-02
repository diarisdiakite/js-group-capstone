import axios from 'axios';
// import { returnLikes } from "../globalElements/api";
import { likesUrl } from '../globalElements/api';

const addNewLike = async (itemId) => {
  try {
    const response = await axios.post(likesUrl, {
      item_id: itemId,
    });
    // return response.data.likes;
    return response.data.item_id;
  } catch (error) {
    const errorMessage = `Couldn't add your like, ${error}`;
    return errorMessage;
  }
};

export default addNewLike;