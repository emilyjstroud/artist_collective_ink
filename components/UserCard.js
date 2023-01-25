import PropTypes from 'prop-types';
import React from 'react';
import { Card } from 'react-bootstrap';

function UserCard({
  firstName, lastName, email,
}) {
  return (
    <Card className="userCard">
      <Card.Body>
        <Card.Title>{firstName} {lastName}</Card.Title>
        <Card.Text>{email}</Card.Text>
      </Card.Body>
    </Card>
  );
}

UserCard.propTypes = {
  id: PropTypes.number,
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  email: PropTypes.string,
  onUpdate: PropTypes.func,
}.isRequired;

export default UserCard;
