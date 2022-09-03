import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Link from 'next/link';
import { deleteArtist } from '../api/artistData';

function ArtistCard({ artistObj, onUpdate }) {
  const deleteThisArtist = () => {
    if (window.confirm(`Delete ${artistObj.artistName}?`)) {
      deleteArtist(artistObj.firebaseKey).then(() => onUpdate());
    }
  };
  return (
    <Card style={{ width: '18rem', margin: '10px' }}>
      <Card.Img variant="top" src={artistObj.image} alt={artistObj.artistName} style={{ height: '400px' }} />
      <Card.Body>
        <Card.Title>Name: {artistObj.artistName}</Card.Title>
        <p>Shop Name: {artistObj.shopId}</p>
        <p>Location: {artistObj.artistLocation}</p>
        <p>Instagram: {artistObj.igHandle}</p>
        <Link href={`/artist/${artistObj.firebaseKey}`} passHref>
          <Button variant="primary" className="m-2">View Details</Button>
        </Link>
        <Link href={`/artist/edit/${artistObj.firebaseKey}`} passHref>
          <Button variant="info">Edit Info</Button>
        </Link>
        <Button variant="danger" onClick={deleteThisArtist} className="m-2">
          Delete Artist
        </Button>
      </Card.Body>
    </Card>
  );
}

ArtistCard.propTypes = {
  artistObj: PropTypes.shape({
    artistName: PropTypes.string,
    artistLocation: PropTypes.string,
    shopName: PropTypes.string,
    igHandle: PropTypes.string,
    image: PropTypes.string,
    shopId: PropTypes.string,
    firebaseKey: PropTypes.string,
  }).isRequired,
  onUpdate: PropTypes.func.isRequired,
};

export default ArtistCard;
