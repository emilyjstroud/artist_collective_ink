import axios from 'axios';
import { clientCredentials } from '../utils/client';

const dbUrl = clientCredentials.databaseURL;

// GET ALL ARTISTS
const getArtists = (uid) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/artists.json?orderBy="uid"&equalTo="${uid}"`)
    .then((response) => {
      if (response.data) {
        resolve(Object.values(response.data));
      } else {
        resolve([]);
      }
    })
    .catch((error) => reject(error));
});

// CREATE ARTIST
const createArtist = (artistObj) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/artists.json`, artistObj)
    .then((response) => {
      const payload = { firebaseKey: response.data.artistName };
      axios.patch(`${dbUrl}/artists/${response.data.artistName}.json`, payload)
        .then(resolve);
    }).catch(reject);
});

// DELETE ARTIST
const deleteArtist = (firebaseKey) => new Promise((resolve, reject) => {
  axios.delete(`${dbUrl}/artists/${firebaseKey}.json`)
    .then(() => resolve('deleted'))
    .catch((error) => reject(error));
});

// UPDATE ARTIST
const updateArtist = (artistObj) => new Promise((resolve, reject) => {
  axios.patch(`${dbUrl}/artists/${artistObj.firebaseKey}.json`, artistObj)
    .then(resolve)
    .catch(reject);
});

// GET A SINGLE ARTIST
const getSingleArtist = (firebaseKey) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/artists/${firebaseKey}.json`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

export {
  getArtists,
  createArtist,
  deleteArtist,
  updateArtist,
  getSingleArtist,
};
