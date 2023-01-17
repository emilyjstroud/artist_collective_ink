import { clientCredentials } from '../utils/client';

const getAllStyles = () => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/styles`)
    .then((response) => response.json())
    .then(resolve)
    .then(reject);
});

const getSingleStyle = (id) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/styles/${id}`)
    .then((response) => resolve(response.json()))
    .catch((error) => reject(error));
});

const getStyleByArtistId = (ArtistId) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/styles/${ArtistId}`)
    .then((response) => resolve(response.json()))
    .catch((error) => reject(error));
});

export {
  getAllStyles,
  getSingleStyle,
  getStyleByArtistId,
};
