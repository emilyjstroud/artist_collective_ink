/* eslint-disable @next/next/no-img-element */
import React from 'react';
import PropTypes from 'prop-types';

export default function User({
  name, email, lastLogin,
}) {
  return (
    <>
      <div>Name: {name}</div>
      <div>Email: {email}</div>
      <div>Last Login: {lastLogin}</div>
    </>
  );
}

User.propTypes = {
  name: PropTypes.string,
  email: PropTypes.string,
  lastLogin: PropTypes.string,
};

User.defaultProps = {
  name: 'Emily',
  email: 'email@email.com',
  lastLogin: '01/01/2022 14:00:30',
};
