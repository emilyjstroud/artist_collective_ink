/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { viewShopDetails } from '../../api/mergedData';

export default function ViewShop() {
  const [shopDetails, setShopDetails] = useState({});
  const router = useRouter();

  const { firebaseKey } = router.query;

  useEffect(() => {
    viewShopDetails(firebaseKey).then(setShopDetails);
  }, [firebaseKey]);

  return (
    <div className="mt-5 d-flex flex-wrap">
      <div className="d-flex flex-column">
        <img src={shopDetails.image} alt={shopDetails.shopName} style={{ width: '300px' }} />
      </div>
      <div className="text-black ms-5 details">
        <h5>
          Name: {shopDetails.shopName}
        </h5>
        <p>Location: {shopDetails.shopLocation}</p>
        <p>Website: {shopDetails.website}</p>
        <hr />
      </div>
    </div>
  );
}
