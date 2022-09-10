/* eslint-disable @next/next/no-img-element */
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { getSingleArtist } from '../../api/artistData';
import { viewArtistDetails } from '../../api/mergedData';
import { getShopArtists } from '../../api/shopData';
import ArtistCard from '../../components/ArtistCard';

export default function ViewArtist() {
  const [artistDetails, setArtistDetails] = useState({});
  const [artists, setArtists] = useState([]);

  const router = useRouter();

  const { firebaseKey } = router.query;

  useEffect(() => {
    viewArtistDetails(firebaseKey).then(setArtistDetails);
    getShopArtists(firebaseKey).then(setArtists);
  }, [firebaseKey, artistDetails]);
  // console.warn(viewArtistDetails);

  // useEffect(() => {
  //   getSingleArtist(firebaseKey).then(setArtistDetails);
  // }, [firebaseKey]);
  // console.warn(getSingleArtist);

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
        <p>Shop Name: {artistDetails.shopId}</p>
        <p>Instagram: {artistDetails.igHandle}</p>
        <hr />
      </div>
      { artists.map((artist) => (
        <ArtistCard key={artist.firebaseKey} artistObj={artist} onUpdate={getSingleArtist} />
      ))}
    </div>
  );
}
