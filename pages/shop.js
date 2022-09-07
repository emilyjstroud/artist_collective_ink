import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Button from 'react-bootstrap/Button';
import { useAuth } from '../utils/context/authContext';
import ShopCard from '../components/ShopCard';
import { getShops } from '../api/shopData';

function ShopPage() {
  const [shops, setShops] = useState([]);

  const { user } = useAuth();

  const getAllShops = () => {
    getShops(user.uid).then(setShops);
  };

  useEffect(() => {
    getAllShops();
  }, [user]);

  return (
    <div>
      <Link href="/shop/new" passHref>
        <Button className="btn btn-danger">Add a Shop</Button>
      </Link>
      <div className="d-flex flex-wrap">
        <title>Artist Collective Ink</title>
        <h1>Tour the Shops</h1>
        <div className="d-flex flex-wrap flex-row">
          {
        shops.map((shop) => (
          <ShopCard key={shop.firebaseKey} shopObj={shop} onUpdate={getShops} />
        ))
        }
        </div>
      </div>
    </div>
  );
}

export default ShopPage;
