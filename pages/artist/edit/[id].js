import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { getSingleArtist } from '../../../api/artistData';
import ArtistForm from '../../../components/forms/ArtistForm';

export default function EditArtist() {
  const [editItem, setEditItem] = useState({});
  const router = useRouter();

  const { id } = router.query;

  useEffect(() => {
    getSingleArtist(id).then(setEditItem);
  }, [id]);

  return (
    <ArtistForm obj={editItem} />
  );
}
