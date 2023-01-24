import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Link from 'next/link';
import { getShops } from '../api/shopData';
import { deleteShopArtists } from '../api/mergedData';

function ShopCard({ shopObj, onUpdate }) {
  const deleteThisShop = () => {
    if (window.confirm(`Delete ${shopObj.shopName}?`)) {
      deleteShopArtists(shopObj.id).then(() => onUpdate());
    }
  };

  useEffect(() => {
    getShops();
  }, []);

  return (
    <Card style={{ width: '18rem', margin: '10px' }}>
      <Card.Img variant="top" src={shopObj.image} alt={shopObj.shopName} style={{ height: '400px' }} />
      <Card.Body>
        <Card.Title>{shopObj.shopName} </Card.Title>
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
    shopName: PropTypes.string,
    shopLocation: PropTypes.string,
    website: PropTypes.string,
    image: PropTypes.string,
    id: PropTypes.number,
    // shopId: PropTypes.string,
  }).isRequired,
  onUpdate: PropTypes.func.isRequired,
};

export default ShopCard;
