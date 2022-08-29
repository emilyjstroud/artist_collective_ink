import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Button from 'react-bootstrap/Button';
import { getArtists } from '../api/artistData';
import { useAuth } from '../utils/context/authContext';
import ArtistCard from '../components/ArtistCard';

function ArtistPage() {
  const [artists, setArtists] = useState([]);

  const { user } = useAuth();

  const getAllArtists = () => {
    getArtists(user.uid).then(setArtists);
  };

  useEffect(() => {
    getAllArtists();
  }, [user]);

  return (
    <div>
      <Link href="/artist/new" passHref>
        <Button className="btn btn-danger">Add an Artist</Button>
      </Link>
      <div className="d-flex flex-wrap">
        <title>Artist Collective Ink</title>
        <h1>Meet the Artists</h1>
        <div className="d-flex flex-wrap flex-row">
          {
        artists.map((artist) => (
          <ArtistCard key={artist.firebaseKey} artistObj={artist} onUpdate={getAllArtists} />
        ))
}
        </div>
      </div>
    </div>
  );
}

export default ArtistPage;
