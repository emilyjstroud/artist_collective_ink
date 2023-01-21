import { clientCredentials } from '../utils/client';

const dbUrl = clientCredentials.databseURL;

const getAllUsers = () => new Promise((resolve, reject) => {
  fetch(`${dbUrl}/users`)
    .then((response) => response.json())
    .then(resolve)
    .catch(reject);
});

const getUser = (userId) => new Promise((resolve, reject) => {
  fetch(`${dbUrl}/users/${userId}`)
    .then((response) => response.json())
    .then(resolve)
    .catch(reject);
});

export {
  getAllUsers,
  getUser,
};
