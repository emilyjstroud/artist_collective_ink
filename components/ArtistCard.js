/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Link from 'next/link';
import { deleteArtist } from '../api/artistData';
import { getSingleShop } from '../api/shopData';

function ArtistCard({ artistObj, onUpdate }) {
  const [setShop] = useState({});

  const deleteThisArtist = () => {
    if (window.confirm(`Delete ${artistObj.name}?`)) {
      deleteArtist(artistObj.id).then(() => onUpdate());
    }
  };

  useEffect(() => {
    getSingleShop(artistObj.shop.id).then(setShop);
  }, []);

  return (
    <Card style={{ width: '18rem', margin: '10px' }}>
      <Card.Img variant="top" src={artistObj.artworkPhoto} alt={artistObj.name} style={{ height: '400px' }} />
      <Card.Body>
        <Card.Title>{artistObj.name}</Card.Title>
        <Link href={`/artist/${artistObj.id}`} passHref>
          View Artist Details
        </Link>
        <br />
        <Link href={`/artist/edit/${artistObj.id}`} passHref>
          Edit Info
        </Link>
        <br />
        <br />
        <Button variant="danger" onClick={deleteThisArtist} className="justify-content-left">
          Delete Artist
        </Button>
      </Card.Body>
    </Card>
  );
}

ArtistCard.propTypes = {
  artistObj: PropTypes.shape({
    name: PropTypes.string,
    location: PropTypes.string,
    instagram: PropTypes.string,
    artworkPhoto: PropTypes.string,
    shop: PropTypes.shape({
      id: PropTypes.number,
    }),
    id: PropTypes.number,
  }).isRequired,
  onUpdate: PropTypes.func.isRequired,
};

export default ArtistCard;
