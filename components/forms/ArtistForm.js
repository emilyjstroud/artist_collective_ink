import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';
import { useAuth } from '../../utils/context/authContext';
import { createArtist, updateArtist } from '../../api/artistData';
import { getShops } from '../../api/shopData';

const initialState = {
  artistName: '',
  artistLocation: '',
  shopName: '',
  igHandle: '',
  image: '',
  shopId: '',
  firebaseKey: '',
};

function ArtistForm({ obj }) {
  const [artistFormInput, setArtistFormInput] = useState(initialState);
  const [shops, setShops] = useState([]);

  const router = useRouter();

  const { user } = useAuth();

  useEffect(() => {
    getShops(user.uid).then(setShops);
    if (obj.firebaseKey) setArtistFormInput(obj);
  }, [obj, user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setArtistFormInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (obj.firebaseKey) {
      updateArtist(artistFormInput)
        .then(() => router.push('/artist'));
    } else {
      const payload = { ...artistFormInput, uid: user.uid };
      createArtist(payload).then(() => {
        router.push('/artist');
      });
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <h2 className="text-black mt-5">{obj.firebaseKey ? 'Update' : 'Create'} Artist</h2>
      <FloatingLabel controlId="floatingInput1" label="Artist Name" className="mb-3">
        <Form.Control type="text" placeholder="Artist's Name" name="artistName" value={artistFormInput.artistName} onChange={handleChange} required />
      </FloatingLabel>
      <FloatingLabel controlId="floatingInput1" label="Artist Location" className="mb-3">
        <Form.Control type="text" placeholder="Artist's Location" name="artistLocation" value={artistFormInput.artistLocation} onChange={handleChange} required />
      </FloatingLabel>
      {/* <FloatingLabel controlId="floatingInput1" label="Shop Name" className="mb-3">
        <Form.Control type="text" placeholder="Shop Name" name="shopName" value={artistFormInput.shopName} onChange={handleChange} required />
      </FloatingLabel> */}
      <FloatingLabel controlId="floatingInput1" label="Artist Instagram" className="mb-3">
        <Form.Control type="text" placeholder="Artist's Instagram" name="igHandle" value={artistFormInput.igHandle} onChange={handleChange} required />
      </FloatingLabel>
      <FloatingLabel controlId="floatingInput2" label="Artist Image" className="mb-3">
        <Form.Control type="url" placeholder="Enter an image url" name="image" value={artistFormInput.image} onChange={handleChange} required />
      </FloatingLabel>
      <FloatingLabel controlId="floatingSelect" label="Shop">
        <Form.Select
          aria-label="Shop"
          name="shopName"
          onChange={handleChange}
          className="mb-3"
          required
        >
          <option value="">Select a Shop</option>
          {
            shops.map((shop) => (
              <option
                key={shop.firebaseKey}
                value={shop.firebaseKey}
                selected={obj.shopId === shop.firebaseKey}
              >
                {shop.shopName}
              </option>
            ))
          }
        </Form.Select>
      </FloatingLabel>

      <Button type="submit">{obj.firebaseKey ? 'Update' : 'Create'} Artist</Button>
    </Form>
  );
}

// PROP TYPES
ArtistForm.propTypes = {
  obj: PropTypes.shape({
    artistName: PropTypes.string,
    artistLocation: PropTypes.string,
    shopName: PropTypes.string,
    igHandle: PropTypes.string,
    image: PropTypes.string,
    shopId: PropTypes.string,
    firebaseKey: PropTypes.string,
  }),
};

// DEFAULT PROPS
ArtistForm.defaultProps = {
  obj: initialState,
};

export default ArtistForm;
