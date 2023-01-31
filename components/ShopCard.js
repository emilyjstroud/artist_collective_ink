import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Link from 'next/link';
import { deleteShop, getShops } from '../api/shopData';
// import { deleteShopArtists } from '../api/mergedData';

function ShopCard({ shopObj, onUpdate }) {
  const deleteThisShop = () => {
    if (window.confirm(`Delete ${shopObj.name}?`)) {
      deleteShop(shopObj.id).then(() => onUpdate());
    }
  };

  useEffect(() => {
    getShops();
  }, []);

  return (
    <Card style={{ width: '18rem', margin: '10px' }}>
      <Card.Img variant="top" src={shopObj.photo} alt={shopObj.name} style={{ height: '400px' }} />
      <Card.Body>
        <Card.Title>{shopObj.name} </Card.Title>
        <Link href={`/shop/${shopObj.id}`} passHref style={{ color: 'red' }}>
          View Shop Details
        </Link>
        <br />
        <Link href={`/shop/edit/${shopObj.id}`} passHref>
          Edit Info
        </Link>
        <br />
        <br />
        <Button variant="danger" onClick={deleteThisShop} className="justify-content-left">
          Delete Shop
        </Button>
      </Card.Body>
    </Card>
  );
}

ShopCard.propTypes = {
  shopObj: PropTypes.shape({
    name: PropTypes.string,
    location: PropTypes.string,
    website: PropTypes.string,
    photo: PropTypes.string,
    id: PropTypes.number,
  }).isRequired,
  onUpdate: PropTypes.func.isRequired,
};

export default ShopCard;
