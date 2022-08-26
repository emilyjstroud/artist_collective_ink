import React from 'react';
import PropTypes from 'prop-types';
import { Card, Button } from 'react-bootstrap';
import Link from 'next/link';
import { deleteShopArtists } from '../api/mergedData';

function ShopCard({ shopObj, onUpdate }) {
  const deleteThisShop = () => {
    if (window.confirm(`Delete ${shopObj.shopName}?`)) {
      deleteShopArtists(shopObj.firebaseKey).then(() => onUpdate());
    }
  };

  return (
    <Card style={{ width: '18rem', margin: '10px' }}>
      <Card.Img variant="top" src={shopObj.image} alt={shopObj.shopName} style={{ height: '400px' }} />
      <Card.Body>
        <Card.Title>{shopObj.shopName} </Card.Title>
        <p>Location: {shopObj.shopLocation}</p>
        <p>Website: {shopObj.website}</p>
        <Link href={`/shop/${shopObj.firebaseKey}`} passHref>
          <Button variant="primary" className="m-2">View Details</Button>
        </Link>
        <Link href={`/shop/edit/${shopObj.firebaseKey}`} passHref>
          <Button variant="info">Edit Info</Button>
        </Link>
        <Button variant="danger" onClick={deleteThisShop} className="m-2">
          Delete Shop
        </Button>
      </Card.Body>
    </Card>
  );
}

ShopCard.propTypes = {
  shopObj: PropTypes.shape({
    shopName: PropTypes.string,
    shopLocation: PropTypes.string,
    website: PropTypes.string,
    image: PropTypes.string,
    firebaseKey: PropTypes.string,
  }).isRequired,
  onUpdate: PropTypes.func.isRequired,
};

export default ShopCard;
