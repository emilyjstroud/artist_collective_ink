/* eslint-disable @next/next/no-img-element */
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Button from 'react-bootstrap/Button';
import { viewArtistDetails } from '../../api/mergedData';
import { getSingleShop } from '../../api/shopData';

export default function ViewArtist() {
  const [artistDetails, setArtistDetails] = useState({});

  const router = useRouter();

  const { id } = router.query;

  useEffect(() => {
    viewArtistDetails(id).then(setArtistDetails);
    getSingleShop();
  }, [id, artistDetails]);

  return (
    <div className="mt-5 d-flex flex-wrap">
      <div className="d-flex flex-column">
        <img src={artistDetails.image} alt={artistDetails.artistName} style={{ width: '300px' }} />
      </div>
      <div className="text-white ms-5 details">
        <h5 style={{ color: 'white' }}>
          {artistDetails.artistName}
        </h5>
        <p>Location: {artistDetails.artistLocation}</p>
        <p>Shop Name: {artistDetails.shopObj?.shopName}</p>
        <p>Instagram: {artistDetails.igHandle}</p>
        <hr />
        <Link href="/artist" passHref>
          <Button variant="danger" className="m-2">Back to Artists</Button>
        </Link>
        <br />
      </div>
    </div>
  );
}
