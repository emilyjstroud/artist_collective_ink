/* eslint-disable @next/next/no-img-element */
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Button from 'react-bootstrap/Button';
import { getArtistsWithStyle, viewArtistDetails } from '../../api/mergedData';
// import { getSingleShop } from '../../api/shopData';
import StyleCard from '../../components/StyleCard';

export default function ViewArtist() {
  // const [artistDetails, setArtistDetails] = useState({});
  const [artistData, setArtistData] = useState({});
  const [styleData, setStyleData] = useState([]);

  const router = useRouter();

  const { id } = router.query;

  // useEffect(() => {
  //   viewArtistDetails(id).then(setArtistDetails);
  //   getSingleShop();
  // }, [id, artistDetails]);

  const getArtistDetails = () => {
    viewArtistDetails(id).then((data) => {
      setArtistData(data?.artistData || {});
      setStyleData(data?.styleData || []);
    });
  };
  console.warn(styleData);
  useEffect(() => {
    getArtistDetails();
  }, [id]);

  return (
    <div className="mt-5 d-flex flex-wrap">
      <div className="d-flex flex-column">
        <img src={artistData.artworkPhoto} alt={artistData.name} style={{ width: '300px' }} />
      </div>
      <div className="text-white ms-5 details">
        <h5 style={{ color: 'white' }}>
          {artistData.name}
        </h5>
        <p>Location: {artistData.location}</p>
        {/* <p>Style: {artistData.styleObj.name}</p> */}
        <p>Instagram: {artistData.instagram}</p>
        <hr />
        <Link href="/artist" passHref>
          <Button variant="danger" className="m-2">Back to Artists</Button>
        </Link>
        <br />
      </div>
      { styleData.map((style) => (
        <StyleCard key={style.id} styleObj={style} onUpdate={getArtistsWithStyle} />
      ))}
    </div>
  );
}
