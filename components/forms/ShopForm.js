import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Button from 'react-bootstrap/Button';
import { createShop, updateShop } from '../../api/shopData';
import { useAuth } from '../../utils/context/authContext';

const initialState = {
  shopName: '',
  shopLocation: '',
  website: '',
  image: '',
  id: '',
};

function ShopForm({ obj }) {
  const [shopFormInput, setShopFormInput] = useState(initialState);
  const router = useRouter();
  const { user } = useAuth();

  useEffect(() => {
    if (obj.id) setShopFormInput(obj);
  }, [obj, user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setShopFormInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (obj.id) {
      updateShop(shopFormInput)
        .then(() => router.push('/shop'));
    } else {
      const payload = { ...shopFormInput, uid: user.uid };
      createShop(payload).then(() => {
        router.push('/shop');
      });
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <title>Artist Collective Ink</title>
      <h2 className="text-black mt-5">{obj.id ? 'Update' : 'Create'} Shop</h2>
      <FloatingLabel controlId="floatingInput1" label="Shop Name" className="mb-3">
        <Form.Control type="text" placeholder="Shop Name" name="shopName" value={shopFormInput.shopName} onChange={handleChange} required />
      </FloatingLabel>
      <FloatingLabel controlId="floatingInput1" label="Location" className="mb-3">
        <Form.Control type="text" placeholder="Location" name="shopLocation" value={shopFormInput.shopLocation} onChange={handleChange} required />
      </FloatingLabel>
      <FloatingLabel controlId="floatingInput1" label="Website" className="mb-3">
        <Form.Control type="text" placeholder="Website" name="website" value={shopFormInput.website} onChange={handleChange} required />
      </FloatingLabel>
      <FloatingLabel controlId="floatingInput2" label="Shop Image" className="mb-3">
        <Form.Control type="url" placeholder="Enter an image url" name="image" value={shopFormInput.image} onChange={handleChange} required />
      </FloatingLabel>
      <Button type="submit">{obj.id ? 'Update' : 'Create'} Shop</Button>
    </Form>
  );
}

// PROP TYPES
ShopForm.propTypes = {
  obj: PropTypes.shape({
    shopName: PropTypes.string,
    shopLocation: PropTypes.string,
    website: PropTypes.string,
    id: PropTypes.number,
  }),
};

// DEFAULT PROPS
ShopForm.defaultProps = {
  obj: initialState,
};

export default ShopForm;
