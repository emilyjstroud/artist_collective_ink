import PropTypes from 'prop-types';
import React from 'react';
import { Card } from 'react-bootstrap';

export default function ProfileCard({
  firstName, lastName, email,
}) {
  return (
    <Card className="profileCard">
      <Card.Title>{firstName} {lastName}</Card.Title>
      <Card.Text>{email}</Card.Text>
    </Card>
  );
}

ProfileCard.propTypes = {
  id: PropTypes.number,
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  email: PropTypes.string,
}.isRequired;
