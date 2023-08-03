import axios from 'axios';

export const mainUrl = 'https://api.tvmaze.com/shows';
// Involvement
export const appId = 'o489efAMFwz4kpcDZkaq';
export const likesUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/o489efAMFwz4kpcDZkaq/likes/';
// export const likesUrl = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appId}/likes/`;
// export const commentsUrl = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/o489efAMFwz4kpcDZkaq/comments/`;

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

const getLikes = async () => {
  try {
    const response = await axios.get(likesUrl);
    const itemsLikesCount = response.data;
    return itemsLikesCount;
  } catch (error) {
    const errorMessage = `Couldn't fetch the items, ${error}`;
    return Promise.reject(errorMessage);
  }
};

export { getLikes };
export const returnLikes = () => getLikes();