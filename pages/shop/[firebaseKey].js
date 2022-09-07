/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getArtistsWithShop, viewShopDetails } from '../../api/mergedData';
import { getShopArtists } from '../../api/shopData';
import ArtistCard from '../../components/ArtistCard';

export default function ViewShop() {
  const [shopDetails, setShopDetails] = useState({});
  const [artists, setArtists] = useState([]);

  const router = useRouter();

  const { firebaseKey } = router.query;

  useEffect(() => {
    viewShopDetails(firebaseKey).then(setShopDetails);
    getShopArtists(firebaseKey).then(setArtists);
  }, [firebaseKey]);

  return (
    <div className="mt-5 d-flex flex-wrap">
      <div className="d-flex flex-column">
        <img src={shopDetails.image} alt={shopDetails.shopName} style={{ width: '300px' }} />
      </div>
      <div className="text-black ms-5 details">
        <h5>
          Name: {shopDetails.shopName}
        </h5>
        <p>Location: {shopDetails.shopLocation}</p>
        <p>Website: {shopDetails.website}</p>
        <hr />
      </div>
      { artists.map((artist) => (
        <ArtistCard key={artist.firebaseKey} artistObj={artist} onUpdate={getArtistsWithShop} />
      ))}
    </div>
  );
}
