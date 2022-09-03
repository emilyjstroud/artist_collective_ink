import axios from 'axios';
import { clientCredentials } from '../utils/client';

const dbUrl = clientCredentials.databaseURL;

// GET SHOPS
const getShops = (uid) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/shops.json?orderBy="uid"&equalTo="${uid}"`)
    .then((response) => {
      if (response.data) {
        resolve(Object.values(response.data));
      } else {
        resolve([]);
      }
    })
    .catch((error) => reject(error));
});

// CREATE SHOP
const createShop = (shopObj) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/shops.json`, shopObj)
    .then((response) => {
      const payload = { firebaseKey: response.data.name };
      axios.patch(`${dbUrl}/shops/${response.data.name}.json`, payload)
        .then(resolve);
    }).catch(reject);
});

// DELETE SHOP
const deleteShop = (firebaseKey) => new Promise((resolve, reject) => {
  axios.delete(`${dbUrl}/shops/${firebaseKey}.json`)
    .then(() => resolve('deleted'))
    .catch((error) => reject(error));
});

// UPDATE SHOP
const updateShop = (shopObj) => new Promise((resolve, reject) => {
  axios.patch(`${dbUrl}/shops/${shopObj.firebaseKey}.json`, shopObj)
    .then(resolve)
    .catch(reject);
});

// GET SINGLE SHOP
const getSingleShop = (firebaseKey) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/shops/${firebaseKey}.json`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

// GET SHOP'S ARTISTS
const getShopArtists = (firebaseKey) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/artists.json?orderBy="shopId"&equalTo="${firebaseKey}"`)
    .then((response) => resolve(Object.values(response.data)))
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
