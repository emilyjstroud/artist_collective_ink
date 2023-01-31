import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { getSingleShop } from '../../../api/shopData';
import ShopForm from '../../../components/forms/ShopForm';

export default function EditShop() {
  const [editShopItem, setEditShopItem] = useState({});
  const router = useRouter();

  const { id } = router.query;

  useEffect(() => {
    getSingleShop(id).then(setEditShopItem);
  }, [id]);

  return (
    <ShopForm shopObj={editShopItem} />
  );
}
