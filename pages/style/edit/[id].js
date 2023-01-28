import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { getSingleStyle } from '../../../api/styleData';
import StyleForm from '../../../components/forms/StyleForm';

export default function EditStyle() {
  const [editItem, setEditItem] = useState({});
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    getSingleStyle(id).then(setEditItem);
  }, [id]);

  return (
    <StyleForm obj={editItem} />
  );
}
