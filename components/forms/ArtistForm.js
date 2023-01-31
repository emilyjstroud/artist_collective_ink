import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';
// import { useAuth } from '../../utils/context/authContext';
import { createArtist, updateArtist } from '../../api/artistData';
import { getShops } from '../../api/shopData';
import { getAllStyles } from '../../api/styleData';

const initialState = {
  name: '',
  location: '',
  instagram: '',
  artworkPhoto: '',
  // shopId: null,
  // styleId: null,
};
// id: null,
// artist: {(
// name: '',
// location: '',
// instagram: '',
// artworkPhoto: '',
// shopId: null,
// id: null,
// }),
// name: '',
// location: '',
// photo: '',
// };

function ArtistForm({ artistObj }) {
  const [artistFormInput, setArtistFormInput] = useState(initialState);
  const [shops, setShops] = useState([]);
  const [styles, setStyles] = useState([]);

  const router = useRouter();

  // const { user } = useAuth();

  // useEffect(() => {
  //   getShops(user.uid).then(setShops);
  //   if (artistObj.id) setArtistFormInput(artistObj);
  // }, [artistObj, user]);

  // Re-Factored
  useEffect(() => {
    getShops().then(setShops);
    getAllStyles().then(setStyles);
    if (artistObj.id) setArtistFormInput();
  }, [artistObj]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setArtistFormInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (artistObj.id) {
  //     updateArtist(artistFormInput)
  //       .then(() => router.push(`/artist/${artistObj.id}`));
  //   } else {
  //     const payload = { ...artistFormInput, uid: user.uid };
  //     createArtist(payload).then(() => {
  //       router.push('/artist');
  //     });
  //   }
  // };

  // Re-Factored
  const handleSubmit = (e) => {
    e.preventDefault();
    if (artistObj.id) {
      updateArtist(artistFormInput, artistObj.id)
        .then(() => router.push(`/artist/${artistObj.id}`));
    } else {
      const payload = { ...artistFormInput };
      createArtist(payload).then(() => {
        router.push('/artist');
      });
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <title>Artist Collective Ink</title>
      <h2 className="text-black mt-5">{artistObj.id ? 'Update' : 'Create'} Artist</h2>
      <FloatingLabel controlId="floatingInput1" label="Artist Name" className="mb-3">
        <Form.Control type="text" placeholder="Artist's Name" name="name" value={artistFormInput.name} onChange={handleChange} required />
      </FloatingLabel>
      <FloatingLabel controlId="floatingInput1" label="Artist Location" className="mb-3">
        <Form.Control type="text" placeholder="Artist's Location" name="location" value={artistFormInput.location} onChange={handleChange} required />
      </FloatingLabel>
      <FloatingLabel controlId="floatingInput1" label="Artist Instagram" className="mb-3">
        <Form.Control type="text" placeholder="Artist's Instagram" name="instagram" value={artistFormInput.instagram} onChange={handleChange} required />
      </FloatingLabel>
      <FloatingLabel controlId="floatingInput2" label="Artist Image" className="mb-3">
        <Form.Control type="url" placeholder="Enter an image url" name="artworkPhoto" value={artistFormInput.artworkPhoto} onChange={handleChange} required />
      </FloatingLabel>
      <FloatingLabel controlId="floatingSelect" label="Shop">
        <Form.Select
          aria-label="Shop"
          name="shopId"
          // defaultValue={shopId}
          onChange={handleChange}
          className="mb-3"
          value={artistFormInput.shopId}
          required
        >
          <option value="">Select a Shop</option>
          {
            shops.map((shop) => (
              <option
                key={shop.id}
                value={shop.id}
                // defaultValue={shop.id === artistFormInput.shopId}
              >
                {shop.name}
              </option>
            ))
          }
        </Form.Select>
      </FloatingLabel>
      <FloatingLabel controlId="floatingSelect" label="Style">
        <Form.Select
          aria-label="Style"
          name="styleId"
          // defaultValue={shopId}
          onChange={handleChange}
          className="mb-3"
          value={artistFormInput.styleId}
          required
        >
          <option value="">Select a Style</option>
          {
            styles.map((style) => (
              <option
                key={style.id}
                value={style.id}
                // defaultValue={shop.id === artistFormInput.shopId}
              >
                {style.name}
              </option>
            ))
          }
        </Form.Select>
      </FloatingLabel>

      <Button type="submit">{artistObj.id ? 'Update' : 'Create'} Artist</Button>
    </Form>
  );
}

// PROP TYPES
// ArtistForm.propTypes = {
//   artistObj: PropTypes.shape({
//     name: PropTypes.string,
//     location: PropTypes.string,
//     // shopName: PropTypes.string,
//     instagram: PropTypes.string,
//     artworkPhoto: PropTypes.string,
//     shopId: PropTypes.number,
//     id: PropTypes.number,
//   }),
// };

// Re-Factored
ArtistForm.propTypes = {
  user: PropTypes.shape({
    uid: PropTypes.string,
  }).isRequired,
  artistObj: PropTypes.shape({
    id: PropTypes.number,
    artist: PropTypes.shape({
      name: PropTypes.string,
      location: PropTypes.string,
      // shopName: PropTypes.string,
      instagram: PropTypes.string,
      artworkPhoto: PropTypes.string,
      shopId: PropTypes.number,
      styleId: PropTypes.number,
      id: PropTypes.number,
    }),
    name: PropTypes.string,
    photo: PropTypes.string,
    location: PropTypes.string,
  }),
};

// DEFAULT PROPS
ArtistForm.defaultProps = {
  artistObj: initialState,
};

export default ArtistForm;
