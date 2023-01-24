import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Button from 'react-bootstrap/Button';
import { createShop, updateShop } from '../../api/shopData';
// import { useAuth } from '../../utils/context/authContext';

const initialState = {
  name: '',
  location: '',
  website: '',
  photo: '',
  id: '',
  user: '',
};

function ShopForm({ user, obj }) {
  const [shopFormInput, setShopFormInput] = useState(initialState);
  const router = useRouter();
  // const { user } = useAuth();

  // useEffect(() => {
  //   if (obj.id) setShopFormInput(obj);
  // }, [obj, user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setShopFormInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (obj.id) {
  //     updateShop(shopFormInput)
  //       .then(() => router.push('/shop'));
  //   } else {
  //     const payload = { ...shopFormInput, uid: user.uid };
  //     createShop(payload).then(() => {
  //       router.push('/shop');
  //     });
  //   }
  // };

  // Re-Factored
  const handleSubmit = (e) => {
    e.preventDefault();
    if (obj.id) {
      updateShop(user, shopFormInput, obj.id).then(() => router.push('/shops'));
    } else {
      createShop(shopFormInput).then(() => router.push('shops'));
    }
  };

  const getAndSet = () => {
    if (obj.id) {
      setShopFormInput(obj);
    }
    const workAround = 'user';
    setShopFormInput((prevState) => ({
      ...prevState,
      [workAround]: user.uid,
    }));
  };

  useEffect(() => {
    getAndSet();
  }, [obj]);

  return (
    <Form onSubmit={handleSubmit}>
      <title>Artist Collective Ink</title>
      <h2 className="text-black mt-5">{obj.id ? 'Update' : 'Create'} Shop</h2>
      <FloatingLabel controlId="floatingInput1" label="Shop Name" className="mb-3">
        <Form.Control type="text" placeholder="Shop Name" name="name" value={shopFormInput.name} onChange={handleChange} required />
      </FloatingLabel>
      <FloatingLabel controlId="floatingInput1" label="Location" className="mb-3">
        <Form.Control type="text" placeholder="Location" name="location" value={shopFormInput.location} onChange={handleChange} required />
      </FloatingLabel>
      <FloatingLabel controlId="floatingInput1" label="Website" className="mb-3">
        <Form.Control type="text" placeholder="Website" name="website" value={shopFormInput.website} onChange={handleChange} required />
      </FloatingLabel>
      <FloatingLabel controlId="floatingInput2" label="Shop Image" className="mb-3">
        <Form.Control type="url" placeholder="Enter an image url" name="photo" value={shopFormInput.photo} onChange={handleChange} required />
      </FloatingLabel>
      <Button type="submit">{obj.id ? 'Update' : 'Create'} Shop</Button>
    </Form>
  );
}

// PROP TYPES -- New v
ShopForm.propTypes = {
  user: PropTypes.shape({
    uid: PropTypes.string,
  }).isRequired,

  obj: PropTypes.shape({
    // name: PropTypes.string,
    // location: PropTypes.string,
    // website: PropTypes.string,
    // photo: PropTypes.string,
    id: PropTypes.number,
  }),
};

// DEFAULT PROPS
ShopForm.defaultProps = {
  obj: initialState,
};

export default ShopForm;
