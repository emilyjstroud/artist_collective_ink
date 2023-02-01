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

const createArtist = (data) => new Promise((resolve, reject) => {
  const artistObj = {
    shop: data.shopId,
    style: data.styleId,
    name: data.name,
    location: data.location,
    instagram: data.instagram,
    artworkPhoto: data.artworkPhoto,
  };
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

const updateArtist = (artist, id) => new Promise((resolve, reject) => {
  const artistObj = {
    shop: artist.shopId,
    style: artist.styleId,
    name: artist.name,
    location: artist.location,
    instagram: artist.instagram,
    artworkPhoto: artist.artwork_photo,
  };
  fetch(`${clientCredentials.databaseURL}/artists/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(artistObj),
  })
    .then((response) => resolve(response))
    .catch((error) => reject(error));
});

const getSingleArtist = (id) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/artists/${id}`)
  // , {
  //   method: 'POST',
  //   body: JSON.stringify(artistObj),
  //   headers: {
  //     'content-type': 'applicstion/json',
  //   },
  // });
    // .then((response) => resolve(response.json()))
    .then((response) => response.json())
    .then((data) => {
      resolve({
        id: data.id,
        shop: data.shop_id,
        style: data.style_id,
        name: data.name,
        location: data.location,
        instagram: data.instagram,
        artworkPhoto: data.artwork_photo,
      });
    })
    .catch((error) => reject(error));
});

export {
  getArtists,
  createArtist,
  deleteArtist,
  updateArtist,
  getSingleArtist,
};
