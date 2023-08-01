import axios from 'axios';

export const mainUrl = 'https://api.tvmaze.com/shows';
// Involvement
const appId = 'TKFVOdTNPnpOm8rRkwpM';
export const likesUrl = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appId}/likes/`;
//export const commentsUrl = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appId}/comments/`;

const getItems = async () => {
  try {
    const response = await axios.get(mainUrl);
    const items = response.data;
    return items;
  } catch (error) {
    const errorMessage = `Couldn't fetch the items, ${error}`;
    return Promise.reject(errorMessage);
  }
};

export default getItems;
export const returnItems = () => getItems();
