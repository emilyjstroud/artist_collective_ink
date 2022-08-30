import { deleteArtist, getSingleArtist } from './artistData';
import { getShopArtists, getSingleShop, deleteShop } from './shopData';

// VIEW ARTIST DETAILS
const viewArtistDetails = (artistFirebaseKey) => new Promise((resolve, reject) => {
  getSingleArtist(artistFirebaseKey)
    .then((artistObj) => {
      getSingleArtist(artistObj.firebaseKey)
        .then((shopObj) => {
          resolve({ shopObj, ...artistObj });
        });
    }).catch((error) => reject(error));
});

// VIEW SHOP DETAILS
const viewShopDetails = (shopFirebaseKey) => new Promise((resolve, reject) => {
  Promise.all([getSingleShop(shopFirebaseKey), getShopArtists(shopFirebaseKey)])
    .then(([shopObj, shopArtistArray]) => {
      resolve({ ...shopObj, artists: shopArtistArray });
    }).catch((error) => reject(error));
});

// VIEW SHOP ARTISTS
// const viewShopArtists = () => new Promise((resolve, reject) => {
//   getSingleShop(shopFirebaseKey)
//   .then((shopObj) => {
//     getSingleShop(shopObj.firebaseKey)
//   })
// })

// DELETE SHOP ARTISTS
const deleteShopArtists = (shopId) => new Promise((resolve, reject) => {
  getShopArtists(shopId).then((artistsArray) => {
    const deleteArtistPromises = artistsArray.map((artist) => deleteArtist(artist.firebaseKey));

    Promise.all(deleteArtistPromises).then(() => {
      deleteShop(shopId).then(resolve);
    });
  }).catch((error) => reject(error));
});

export {
  viewArtistDetails,
  viewShopDetails,
  deleteShopArtists,
};
