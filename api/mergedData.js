import { clientCredentials } from '../utils/client';
import { getArtists } from './artistData';
import { getSingleShop } from './shopData';
// import { deleteArtist, getArtists } from './artistData';
// import { getShopArtists, deleteShop } from './shopData';

// VIEW ARTIST DETAILS
// const viewArtistDetails = (artistFirebaseKey) => new Promise((resolve, reject) => {
//   getSingleArtist(artistFirebaseKey)
//     .then((artistObj) => {
//       getSingleShop(artistObj.shopId)
//         .then((shopObj) => {
//           resolve({ shopObj, ...artistObj });
//         });
//     }).catch((error) => reject(error));
// });

// VIEW SHOP DETAILS
// const viewShopDetails = (shopFirebaseKey) => new Promise((resolve, reject) => {
//   Promise.all([getSingleShop(shopFirebaseKey), getShopArtists(shopFirebaseKey)])
//     .then(([shopObj, shopArtistArray]) => {
//       resolve({ ...shopObj, artists: shopArtistArray });
//     }).catch((error) => reject(error));
// });

// DELETE SHOP ARTISTS
// const deleteShopArtists = (shopId) => new Promise((resolve, reject) => {
//   getShopArtists(shopId).then((artistsArray) => {
//     const deleteArtistPromises = artistsArray.map((artist) => deleteArtist(artist.firebaseKey));

//     Promise.all(deleteArtistPromises).then(() => {
//       deleteShop(shopId).then(resolve);
//     });
//   }).catch((error) => reject(error));
// });

// GET All ARISTS WITH SHOP NAME
const getArtistsWithShop = (uid) => new Promise((resolve, reject) => {
  getArtists(uid).then((artistsArray) => {
    const artistPromises = artistsArray.map((artistObj) => getSingleShop(artistObj.shopId).then((singleShop) => ({ ...artistObj, shopName: singleShop.shopName })));
    Promise.all(artistPromises).then(resolve);
  }).catch((error) => reject(error));
});

const viewArtistDetails = (id) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/artists/${id}/`)
    .then((response) => response.json())
    .then(resolve)
    .catch(reject);
});

const viewShopDetails = (id) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databseURL}/shops/${id}/`)
    .then((response) => response.json())
    .then(resolve)
    .catch(reject);
});

const deleteShopArtists = (shopId) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/artists/${shopId}`, {
    method: 'DELETE',
  })
    .then(resolve)
    .catch(reject);
});

export {
  viewArtistDetails,
  viewShopDetails,
  deleteShopArtists,
  getArtistsWithShop,
  // getArtistsByName,
};
