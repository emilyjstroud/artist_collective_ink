/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Button from 'react-bootstrap/Button';
import { getArtistsWithShop, viewShopDetails } from '../../api/mergedData';
// import { getShopArtists } from '../../api/shopData';
import ArtistCard from '../../components/ArtistCard';

export default function ViewShop() {
  const [shopData, setShopData] = useState({});
  const [artistData, setArtistData] = useState([]);

  const router = useRouter();

  const { id } = router.query;

  // useEffect(() => {
  //   viewshopData(id).then(setShopData);
  //   getShopArtists(id).then(setArtistData);
  // }, [id, shopata]);

  const getShopDetails = () => {
    viewShopDetails(id).then((data) => {
      setShopData(data?.shopData || {});
      setArtistData(data?.artistData || []);
    });
  };
  console.warn(shopData);
  useEffect(() => {
    getShopDetails();
  }, [id]);

  return (
    <div className="mt-5 d-flex flex-wrap">
      <div className="d-flex flex-column">
        <img src={shopData.photo} alt={shopData.shopName} style={{ width: '300px' }} />
      </div>
      <div className="text-white ms-5 details">
        <h5 style={{ color: 'white' }}>
          {shopData.shopName}
        </h5>
        <p>Location: {shopData.location}</p>
        <p>Website: {shopData.website}</p>
        <hr />
        <Link href="/shop" passHref>
          <Button variant="danger" className="m-2">Back to Shops</Button>
        </Link>
      </div>
      { artistData.map((artist) => (
        <ArtistCard key={artist.id} artistObj={artist} onUpdate={getArtistsWithShop} />
      ))}
    </div>
  );
}
