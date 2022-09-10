/* eslint-disable @next/next/no-img-element */
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { viewArtistDetails } from '../../api/mergedData';

export default function ViewArtist() {
  const [artistDetails, setArtistDetails] = useState({});

  const router = useRouter();

  const { firebaseKey } = router.query;

  useEffect(() => {
    viewArtistDetails(firebaseKey).then(setArtistDetails);
  }, [firebaseKey, artistDetails]);

  return (
    <div className="mt-5 d-flex flex-wrap">
      <div className="d-flex flex-column">
        <img src={artistDetails.image} alt={artistDetails.artistName} style={{ width: '300px' }} />
      </div>
      <div className="text-black ms-5 details">
        <h5>
          Name: {artistDetails.artistName}
        </h5>
        <p>Location: {artistDetails.artistLocation}</p>
        <p>Shop Name: {artistDetails.shopObj?.shopName}</p>
        <p>Instagram: {artistDetails.igHandle}</p>
        <hr />
      </div>
    </div>
  );
}
