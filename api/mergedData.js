import { clientCredentials } from '../utils/client';
import { getSingleArtist } from './artistData';
import { getSingleShop, getShopArtists } from './shopData';
// import { getArtistStyles } from './styleData';
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
// const getArtistsWithShop = (uid) => new Promise((resolve, reject) => {
//   getArtists(uid).then((artistsArray) => {
//     const artistPromises = artistsArray.map((artistObj) => getSingleShop(artistObj.shopId).then((singleShop) => ({ ...artistObj, shopName: singleShop.shopName })));
//     Promise.all(artistPromises).then(resolve);
//   }).catch((error) => reject(error));
// });

// const getArtistsWithShop = (id) => new Promise((resolve, reject) => {
//   fetch(`${clientCredentials.databaseURL}/artists?shop=${id}`)
//     .then((response) => response.json())
//     .then(resolve)
//     .catch(reject);
// });

const getArtistsWithShop = (shopId) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/artists?shopId=${shopId}`)
    .then((response) => response.json())
    .then(resolve)
    .catch(reject);
});

const getArtistsWithStyle = (styleId) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/artists?styleId=${styleId}`)
    .then((response) => response.json())
    .then(resolve)
    .catch(reject);
});

const getShopDetailsWithArtist = (shopId) => new Promise((resolve, reject) => {
  getSingleShop(shopId)
    .then((shopData) => {
      getArtistsWithShop(shopId)
        .then((artistData) => {
          resolve({ shopData, artistData });
        });
    }).catch((error) => reject(error));
});

// const viewArtistDetails = (id) => new Promise((resolve, reject) => {
//   fetch(`${clientCredentials.databaseURL}/artists/${id}/`)
//     .then((response) => response.json())
//     .then(resolve)
//     .catch(reject);
// });

// const viewShopDetails = (id) => new Promise((resolve, reject) => {
//   fetch(`${clientCredentials.databaseURL}/shops/${id}/`)
//     .then((response) => response.json())
//     .then(resolve)
//     .catch(reject);
// });

const deleteShopArtists = (shopId) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/artists/${shopId}`, {
    method: 'DELETE',
  })
    .then(resolve)
    .catch(reject);
});

const deleteArtistStyles = (styleId) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/artists/${styleId}`, {
    method: 'DELETE',
  })
    .then(resolve)
    .catch(reject);
});

// const viewShopDetails = (shopId) => new Promise((resolve, reject) => {
//   Promise.all([getSingleShop(shopId), getShopArtists(shopId)])
//     .then(([shopObj, shopArtistArray]) => {
//       resolve({ ...shopObj, artists: shopArtistArray });
//     }).catch((error) => reject(error));
// });

const viewShopDetails = (shopId) => new Promise((resolve, reject) => {
  getSingleShop(shopId)
    .then((shopData) => {
      getShopArtists(shopId)
        .then((artistData) => {
          resolve({ shopData, artistData });
        });
    }).catch((error) => reject(error));
});

const viewArtistDetails = (artistId) => new Promise((resolve, reject) => {
  getSingleArtist(artistId)
    .then((artistData) => {
      getArtistsWithShop(artistId);
      getArtistsWithStyle(artistId)
        .then((styleData) => {
          resolve({ artistData, styleData });
        });
    }).catch((error) => reject(error));
});

// const viewArtistDetails = (artistId) => new Promise((resolve, reject) => {
//   getSingleArtist(artistId)
//     .then((artistObj) => {
//       getSingleShop(artistObj.shopId)
//         .then((shopObj) => {
//           resolve({ shopObj, ...artistObj });
//         });
//     }).catch((error) => reject(error));
// });

// const viewArtistDetails = (artistId) => new Promise((resolve, reject) => {
//   Promise.all([getSingleArtist(artistId), getArtistStyles(artistId)])
//     .then(([artistObj, artistArray]) => {
//       resolve({ ...artistObj, style: artistArray });
//     }).catch((error) => reject(error));
// });

export {
  viewArtistDetails,
  viewShopDetails,
  deleteShopArtists,
  getArtistsWithShop,
  getArtistsWithStyle,
  getShopDetailsWithArtist,
  deleteArtistStyles,
  // getArtistsByName,
};
