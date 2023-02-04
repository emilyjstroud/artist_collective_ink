import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';
// import { useAuth } from '../../utils/context/authContext';
// import MultiSelect from 'react-multiple-select-dropdown-lite';
// import AsyncCreatable from 'react-select/async-creatable';
import AsyncSelect from 'react-select/async';
import { createArtist, updateArtist } from '../../api/artistData';
import { getShops } from '../../api/shopData';
import { getAllStyles, getArtistStyles } from '../../api/styleData';
// import  'react-multiple-select-dropdown-lite/dist/index.css'

const initialState = {
  name: '',
  location: '',
  instagram: '',
  artworkPhoto: '',
  styles: [],
};

function ArtistForm({ artistObj }) {
  const [artistFormInput, setArtistFormInput] = useState(initialState);
  const [shops, setShops] = useState([]);
  const router = useRouter();

  // const { user } = useAuth();

  const styleOptions = () => new Promise((resolve, reject) => {
    getAllStyles().then((stylesArray) => {
      const options = stylesArray.map((style) => (
        {
          value: style.id,
          label: style.name,
        }
      ));
      resolve(options);
    })
      .catch(reject);
  });

  const handleStyleSelect = (selected) => {
    setArtistFormInput((prevState) => ({
      ...prevState,
      styles: selected,
    }));
  };

  useEffect(() => {
    getShops().then(setShops);
    if (artistObj.id) {
      getArtistStyles(artistObj.id).then((stylesArray) => {
        const stylesSelect = stylesArray.map((style) => ({
          value: style.style.id,
          label: style.style.name,
        }));
        setArtistFormInput({ ...artistObj, shopId: artistObj.shop.id, styles: stylesSelect });
      });
    }
  }, [artistObj]);

  // Re-Factored
  // useEffect(() => {
  //   getShops().then(setShops);
  //   getAllStyles().then(setStyles);
  //   if (artistObj.id) setArtistFormInput();
  // }, [artistObj]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setArtistFormInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    console.warn(artistFormInput);
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
    const payload = {
      name: artistFormInput.name,
      location: artistFormInput.location,
      instagram: artistFormInput.instagram,
      artworkPhoto: artistFormInput.artworkPhoto,
      styles: artistFormInput.styles.map((style) => style.value),
      shop: Number(artistFormInput.shopId),
    };
    if (artistObj.id) {
      updateArtist(payload, artistObj.id)
        .then(() => router.push('/artist'));
    } else {
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
      <FloatingLabel controlId="floatingInput2" label="Artist Artwork" className="mb-3">
        <Form.Control type="url" placeholder="Enter an image url" name="artworkPhoto" value={artistFormInput.artworkPhoto} onChange={handleChange} required />
      </FloatingLabel>
      <FloatingLabel controlId="floatingSelect" label="Shop">
        <Form.Select
          aria-label="Shop"
          name="shopId"
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
              >
                {shop.name}
              </option>
            ))
          }
        </Form.Select>
      </FloatingLabel>
      {/* <FloatingLabel controlId="floatingSelect" label="Style">
        <Form.Select
          aria-label="Style"
          name="styleId"
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
              >
                {style.name}
              </option>
            ))
          }
        </Form.Select>
      </FloatingLabel> */}

      <div>
        <Form.Label>Styles</Form.Label>
        <AsyncSelect
          classNamePrefix="select"
          backspaceRemovesValue
          isClearable
          isMulti
          onChange={handleStyleSelect}
          value={artistFormInput.styles}
          loadOptions={styleOptions}
          defaultOptions
        />
      </div>

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
  // user: PropTypes.shape({
  //   uid: PropTypes.string,
  // }).isRequired,

  artistObj: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    location: PropTypes.string,
    instagram: PropTypes.string,
    artworkPhoto: PropTypes.string,
    shop: PropTypes.shape({
      id: PropTypes.number,
    }),
    style: PropTypes.shape({
      id: PropTypes.number,
    }),
  }),
};

// DEFAULT PROPS
ArtistForm.defaultProps = {
  artistObj: initialState,
};

export default ArtistForm;
