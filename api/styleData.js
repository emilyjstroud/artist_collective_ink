import { clientCredentials } from '../utils/client';

const getAllStyles = () => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/styles`)
    .then((response) => response.json())
    .then(resolve)
    .then(reject);
});

const getSingleStyle = (id) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/styles/${id}`)
    // .then((response) => resolve(response.json()))
    .then((response) => response.json())
    .then((data) => {
      resolve({
        id: data.id,
        shop: data.shop_id,
        name: data.name,
      });
    })
    .catch((error) => reject(error));
});

const getStyleByArtistId = (ArtistId) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/styles/${ArtistId}`)
    .then((response) => resolve(response.json()))
    .catch((error) => reject(error));
});

const createStyle = (style) => new Promise((resolve, reject) => {
  const styleObj = {
    id: style.id,
    shop: style.shop_id,
    name: style.name,
  };
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

const updateStyle = (style, id) => new Promise((resolve, reject) => {
  const styleObj = {
    id: style.id,
    shop: style.shop_id,
    name: style.name,
  };
  fetch(`${clientCredentials.databaseURL}/styles/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application' },
    body: JSON.stringify(styleObj),
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
