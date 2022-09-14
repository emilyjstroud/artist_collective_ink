/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Button from 'react-bootstrap/Button';
import { getArtistsWithShop, viewShopDetails } from '../../api/mergedData';
import { getShopArtists } from '../../api/shopData';
import ArtistCard from '../../components/ArtistCard';

export default function ViewShop() {
  const [shopDetails, setShopDetails] = useState({});
  const [artists, setArtists] = useState([]);
  // const [websites, setWebsites] = useState([]);

  const router = useRouter();

  const { firebaseKey } = router.query;

  useEffect(() => {
    viewShopDetails(firebaseKey).then(setShopDetails);
    getShopArtists(firebaseKey).then(setArtists);
    // viewShopDetails(firebaseKey).then(setWebsites);
  }, [firebaseKey, shopDetails]);

  return (
    <div className="mt-5 d-flex flex-wrap">
      <div className="d-flex flex-column">
        <img src={shopDetails.image} alt={shopDetails.shopName} style={{ width: '300px' }} />
      </div>
      <div className="text-white ms-5 details">
        <h5 style={{ color: 'white' }}>
          Name: {shopDetails.shopName}
        </h5>
        <p>Location: {shopDetails.shopLocation}</p>
        <p>Website: {shopDetails.website}</p>
        {/* <p>Website:  { websites.map((website) => (
          {shopDetails.website}
        ))}
        </p> */}
        <hr />
        <Link href="/shop" passHref>
          <Button variant="danger" className="m-2">Back to Shops</Button>
        </Link>
      </div>
      { artists.map((artist) => (
        <ArtistCard key={artist.firebaseKey} artistObj={artist} onUpdate={getArtistsWithShop} />
      ))}
    </div>
  );
}
