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
        name: data.name,
      });
    })
    .catch((error) => reject(error));
});

const getArtistStyles = (id) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/artist_styles?artist=${id}`)
    .then((response) => resolve(response.json()))
    .catch((error) => reject(error));
});

const createStyle = (style) => new Promise((resolve, reject) => {
  const styleObj = {
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
    name: style.name,
  };
  fetch(`${clientCredentials.databaseURL}/styles/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
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
  getArtistStyles,
  createStyle,
  updateStyle,
  deleteStyle,
};
