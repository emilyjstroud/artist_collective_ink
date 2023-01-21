import { deleteArtist, getArtists, getSingleArtist } from './artistData';
import { getShopArtists, getSingleShop, deleteShop } from './shopData';

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
const viewShopDetails = (shopFirebaseKey) => new Promise((resolve, reject) => {
  Promise.all([getSingleShop(shopFirebaseKey), getShopArtists(shopFirebaseKey)])
    .then(([shopObj, shopArtistArray]) => {
      resolve({ ...shopObj, artists: shopArtistArray });
    }).catch((error) => reject(error));
});

// DELETE SHOP ARTISTS
const deleteShopArtists = (shopId) => new Promise((resolve, reject) => {
  getShopArtists(shopId).then((artistsArray) => {
    const deleteArtistPromises = artistsArray.map((artist) => deleteArtist(artist.firebaseKey));

    Promise.all(deleteArtistPromises).then(() => {
      deleteShop(shopId).then(resolve);
    });
  }).catch((error) => reject(error));
});

// GET All ARISTS WITH SHOP NAME
const getArtistsWithShop = (uid) => new Promise((resolve, reject) => {
  getArtists(uid).then((artistsArray) => {
    const artistPromises = artistsArray.map((artistObj) => getSingleShop(artistObj.shopId).then((singleShop) => ({ ...artistObj, shopName: singleShop.shopName })));
    Promise.all(artistPromises).then(resolve);
  }).catch((error) => reject(error));
});

const viewArtistDetails = (artistId) => new Promise((resolve, reject) => {
  getSingleArtist(artistId)
    .then((artistObj) => {
      getSingleShop(artistObj.shopId)
        .then((shopObj) => {
          resolve({ shopObj, ...artistObj });
        });
    }).catch((error) => reject(error));
});

export {
  viewArtistDetails,
  viewShopDetails,
  deleteShopArtists,
  getArtistsWithShop,
  // getArtistsByName,
};
