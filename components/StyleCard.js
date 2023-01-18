import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Link from 'next/link';
import { deleteStyle } from '../api/styleData';

export default function StyleCard({
  id, name, onUpdate,
}) {
  const deleteThisStyle = () => {
    if (window.confirm(`Delete ${name}?`)) {
      deleteStyle(id).then(() => onUpdate());
      window.location.reload();
    }
  };

  return (
    <>
      <Card className="text-center">
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Link href={`/style/edit/${id}`} passHref>
            <Button variant="info">EDIT</Button>
          </Link>
          <Button variant="danger" onClick={deleteThisStyle} className="m-2">
            DELETE
          </Button>
        </Card.Body>
        <Card.Footer />
      </Card>
    </>
  );
}

StyleCard.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  onUpdate: PropTypes.func.isRequired,
};
