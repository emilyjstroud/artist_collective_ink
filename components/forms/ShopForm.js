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
  id: null,
  user: 1,
};

function ShopForm({ user, shopObj }) {
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
  //   if (shopObj.id) {
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
    if (shopObj.id) {
      updateShop(user, shopFormInput, shopObj.id).then(() => router.push('/shop'));
    } else {
      createShop(shopFormInput).then(() => router.push('/shop'));
    }
  };

  const getAndSet = () => {
    if (shopObj.id) {
      setShopFormInput(shopObj);
    }
    // const workAround = 'user';
    // setShopFormInput((prevState) => ({
    //   ...prevState,
    //   [workAround]: user.uid,
    // }));
  };

  useEffect(() => {
    getAndSet();
    console.warn(shopObj.id);
  }, [shopObj]);

  return (
    <Form onSubmit={handleSubmit}>
      <title>Artist Collective Ink</title>
      <h2 className="text-black mt-5">{shopObj.id ? 'Update' : 'Create'} Shop</h2>
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
      <Button type="submit">{shopObj.id ? 'Update' : 'Create'} Shop</Button>
    </Form>
  );
}

// PROP TYPES -- New v
ShopForm.propTypes = {
  user: PropTypes.shape({
    uid: PropTypes.string,
  }).isRequired,

  shopObj: PropTypes.shape({
    // user: PropTypes.number,
    name: PropTypes.string,
    location: PropTypes.string,
    website: PropTypes.string,
    photo: PropTypes.string,
    id: PropTypes.number,
  }),
};

//   shopObj: PropTypes.shape({
//     id: PropTypes.number,
//     user: PropTypes.shape({
//       id: PropTypes.number,
//       uid: PropTypes.string,
//       firstName: PropTypes.string,
//       lastName: PropTypes.string,
//       email: PropTypes.string,
//     }),
//     name: PropTypes.string,
//     location: PropTypes.string,
//     website: PropTypes.string,
//     photo: PropTypes.string,
//     style: PropTypes.shape({
//       id: PropTypes.number,
//       name: PropTypes.string,
//     }),
//     artist: PropTypes.shape({
//       id: PropTypes.number,
//       name: PropTypes.string,
//       location: PropTypes.string,
//       instagram: PropTypes.string,
//       artworkPhoto: PropTypes.string,
//       shopId: PropTypes.number,
//       styleId: PropTypes.number,
//     }),
//   }),
// };

// DEFAULT PROPS
ShopForm.defaultProps = {
  shopObj: initialState,
};

export default ShopForm;
