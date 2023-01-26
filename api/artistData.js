// import axios from 'axios';
import { clientCredentials } from '../utils/client';

// const dbUrl = clientCredentials.databaseURL;

// GET ALL ARTISTS
// const getArtists = (uid) => new Promise((resolve, reject) => {
//   axios.get(`${dbUrl}/artists.json?orderBy="uid"&equalTo="${uid}"`)
//     .then((response) => {
//       if (response.data) {
//         resolve(Object.values(response.data));
//       } else {
//         resolve([]);
//       }
//     })
//     .catch((error) => reject(error));
// });

// CREATE ARTIST
// const createArtist = (artistObj) => new Promise((resolve, reject) => {
//   axios.post(`${dbUrl}/artists.json`, artistObj)
//     .then((response) => {
//       const payload = { firebaseKey: response.data.name };
//       axios.patch(`${dbUrl}/artists/${response.data.name}.json`, payload)
//         .then(resolve);
//     }).catch(reject);
// });

// DELETE ARTIST
// const deleteArtist = (firebaseKey) => new Promise((resolve, reject) => {
//   axios.delete(`${dbUrl}/artists/${firebaseKey}.json`)
//     .then(() => resolve('deleted'))
//     .catch((error) => reject(error));
// });

// UPDATE ARTIST
// const updateArtist = (artistObj) => new Promise((resolve, reject) => {
//   axios.patch(`${dbUrl}/artists/${artistObj.firebaseKey}.json`, artistObj)
//     .then(resolve)
//     .catch(reject);
// });

// GET A SINGLE ARTIST
// const getSingleArtist = (firebaseKey) => new Promise((resolve, reject) => {
//   axios.get(`${dbUrl}/artists/${firebaseKey}.json`)
//     .then((response) => resolve(response.data))
//     .catch((error) => reject(error));
// });

const getArtists = () => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/artists`)
    .then((response) => response.json())
    .then(resolve)
    .then(reject);
});

const createArtist = (artistObj) => new Promise((resolve, reject) => {
  // const artistObj = {
  //   shop: artist.shop_id,

  // }
  fetch(`${clientCredentials.databaseURL}/artists`, {
    method: 'POST',
    body: JSON.stringify(artistObj),
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => resolve(response.json()))
    .catch((error) => reject(error));
});

const deleteArtist = (id) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/artists/${id}`, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
  })
    .then((response) => resolve(response))
    .catch((error) => reject(error));
});

const updateArtist = (data, id) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/artists/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application' },
    body: JSON.stringify(data),
  })
    .then((response) => resolve(response))
    .catch((error) => reject(error));
});

const getSingleArtist = (artistObj) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/artists`, {
    method: 'POST',
    body: JSON.stringify(artistObj),
    headers: {
      'content-type': 'applicstion/json',
    },
  })
    .then((response) => resolve(response.json()))
    .catch((error) => reject(error));
});

export {
  getArtists,
  createArtist,
  deleteArtist,
  updateArtist,
  getSingleArtist,
};
