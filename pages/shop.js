import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Button from 'react-bootstrap/Button';
import { useAuth } from '../utils/context/authContext';
import SearchBar from '../components/Search';
import ShopCard from '../components/ShopCard';
import { getShops } from '../api/shopData';

function ShopPage() {
  const [shops, setShops] = useState([]);
  const [filteredShops, setFilterdShops] = useState([]);

  const { user } = useAuth();

  const getAllShops = () => {
    getShops(user.uid).then((shopArray) => {
      setShops(shopArray);
      setFilterdShops(shopArray);
    });
  };

  useEffect(() => {
    getAllShops();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  return (
    <div>
      <SearchBar shops={shops} setFilteredShops={setFilterdShops} />
      <Link href="/shop/new" passHref>
        <Button className="btn btn-danger">Add a Shop</Button>
      </Link>
      <br />
      <br />
      <div className="d-flex flex-wrap">
        <title>Artist Collective Ink</title>
        <h1 style={{ color: 'white' }}>Tour the Shops</h1>
        <div className="d-flex flex-wrap flex-row">
          {
        filteredShops.map((shop) => (
          <ShopCard key={shop.firebaseKey} shopObj={shop} onUpdate={getAllShops} />
        ))
        }
        </div>
      </div>
    </div>
  );
}

export default ShopPage;
