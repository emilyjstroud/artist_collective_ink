/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Button from 'react-bootstrap/Button';
import { getArtistsWithShop } from '../api/mergedData';
import { useAuth } from '../utils/context/authContext';
import ArtistCard from '../components/ArtistCard';
import ArtistSearchBar from '../components/ArtistSearch';

function ArtistPage() {
  const [artists, setArtists] = useState([]);
  const [filteredArtists, setFilteredArtists] = useState([]);

  const { user } = useAuth();

  const getAllArtists = () => {
    // getArtistsWithShop(user.uid).then(setArtists);
    getArtistsWithShop(user.uid).then((artistArray) => {
      setArtists(artistArray);
      setFilteredArtists(artistArray);
    });
  };

  useEffect(() => {
    getAllArtists();
  }, [user]);

  return (
    <div>
      <ArtistSearchBar artists={artists} setFilteredArtists={setFilteredArtists} />
      <Link href="/artist/new" passHref>
        <Button className="btn btn-danger">Add an Artist</Button>
      </Link>
      <div className="d-flex flex-wrap">
        <title>Artist Collective Ink</title>
        <h1 style={{ color: 'white' }}>Meet the Artists</h1>
        <div className="d-flex flex-wrap flex-row">
          {
        filteredArtists.map((artist) => (
          <ArtistCard key={artist.firebaseKey} artistObj={artist} onUpdate={getAllArtists} />
        ))
}
        </div>
      </div>
    </div>
  );
}

export default ArtistPage;
