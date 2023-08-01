import axios from 'axios';

export const mainUrl = 'https://api.tvmaze.com/shows';
export const commentsUrl = '';
export const likesUrl = '';

const getItems = async () => {
  try {
    const response = await axios.get(mainUrl);
    const items = response.data;
    return items;
  } catch (error) {
    const errorMessage = `Couldn't create the score, ${error}`;
    return Promise.reject(errorMessage);
  }
};

export default getItems;
export const returnItems = () => getItems();
