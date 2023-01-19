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

const createStyle = (styleObj) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/styles`, {
    method: 'POST',
    body: JSON.stringify(styleObj),
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => resolve(response.json()))
    .catch((error) => reject(error));
});

const updateStyle = (data, id) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/styles/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application' },
    body: JSON.stringify(data),
  })
    .then((response) => resolve(response))
    .catch((error) => reject(error));
});

const deleteStyle = (id) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/styles/${id}`, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
  })
    .then((response) => resolve(response))
    .catch((error) => reject(error));
});

export {
  getAllStyles,
  getSingleStyle,
  getStyleByArtistId,
  createStyle,
  updateStyle,
  deleteStyle,
};
