// import axios from 'axios';
import { clientCredentials } from '../utils/client';

// const dbUrl = clientCredentials.databaseURL;

// GET SHOPS
// const getShops = (uid) => new Promise((resolve, reject) => {
//   axios.get(`${dbUrl}/shops.json?orderBy="uid"&equalTo="${uid}"`)
//     .then((response) => {
//       if (response.data) {
//         resolve(Object.values(response.data));
//       } else {
//         resolve([]);
//       }
//     })
//     .catch((error) => reject(error));
// });

// CREATE SHOP
// const createShop = (shopObj) => new Promise((resolve, reject) => {
//   axios.post(`${dbUrl}/shops.json`, shopObj)
//     .then((response) => {
//       const payload = { firebaseKey: response.data.name };
//       axios.patch(`${dbUrl}/shops/${response.data.name}.json`, payload)
//         .then(resolve);
//     }).catch(reject);
// });

// DELETE SHOP
// const deleteShop = (firebaseKey) => new Promise((resolve, reject) => {
//   axios.delete(`${dbUrl}/shops/${firebaseKey}.json`)
//     .then(() => resolve('deleted'))
//     .catch((error) => reject(error));
// });

// UPDATE SHOP
// const updateShop = (shopObj) => new Promise((resolve, reject) => {
//   axios.patch(`${dbUrl}/shops/${shopObj.firebaseKey}.json`, shopObj)
//     .then(resolve)
//     .catch(reject);
// });

// GET SINGLE SHOP
// const getSingleShop = (firebaseKey) => new Promise((resolve, reject) => {
//   axios.get(`${dbUrl}/shops/${firebaseKey}.json`)
//     .then((response) => resolve(response.data))
//     .catch((error) => reject(error));
// });

// GET SHOP'S ARTISTS
// const getShopArtists = (firebaseKey) => new Promise((resolve, reject) => {
//   axios.get(`${dbUrl}/artists.json?orderBy="shopId"&equalTo="${firebaseKey}"`)
//     .then((response) => resolve(Object.values(response.data)))
//     .catch((error) => reject(error));
// });

const getShops = () => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/shops`)
    .then((response) => response.json())
    .then(resolve)
    .then(reject);
});

const createShop = (shop) => new Promise((resolve, reject) => {
  const shopObj = {
    user: shop.user,
    name: shop.name,
    location: shop.location,
    website: shop.website,
    photo: shop.photo,
  };
  fetch(`${clientCredentials.databaseURL}/shops`, {
    method: 'POST',
    body: JSON.stringify(shopObj),
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => resolve(response.json()))
    .catch((error) => reject(error));
});

const deleteShop = (id) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/shops/${id}`, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
  })
    .then((response) => resolve(response))
    .catch((error) => reject(error));
});

const updateShop = (shop) => new Promise((resolve, reject) => {
  const shopObj = {
    id: shop.id,
    user: shop.user,
    name: shop.name,
    location: shop.location,
    website: shop.website,
    photo: shop.photo,
  };
  fetch(`${clientCredentials.databaseURL}/shops/${shop.id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application' },
    body: JSON.stringify(shopObj),
  })
    .then((response) => resolve(response))
    .catch((error) => reject(error));
});

const getSingleShop = (id) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/shops/${id}`)
    .then((response) => response.json())
    .then((data) => {
      resolve({
        id: data.id,
        user: data.user,
        name: data.name,
        location: data.location,
        website: data.website,
        photo: data.photo,
      });
    })
    .catch((error) => reject(error));
});

const getShopArtists = (id) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/artists?orderBy="shopId"&equalTo="${id}"`)
    .then((response) => resolve(response.json()))
    .catch((error) => reject(error));
});

export {
  getShops,
  createShop,
  deleteShop,
  updateShop,
  getSingleShop,
  getShopArtists,
};
