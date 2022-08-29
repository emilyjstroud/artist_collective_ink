import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { getSingleShop } from '../../../api/shopData';
import ShopForm from '../../../components/forms/ShopForm';

export default function EditShop() {
  const [editShopItem, setEditShopItem] = useState({});
  const router = useRouter();

  const { firebaseKey } = router.query;

  useEffect(() => {
    getSingleShop(firebaseKey).then(setEditShopItem);
  }, [firebaseKey]);

  return (
    <ShopForm obj={editShopItem} />
  );
}
