import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
// import Button from 'react-bootstrap/Button';

function ArtistSearchBar({ artists, setFilteredArtists }) {
  const [searchInput, setSearchInput] = useState('');

  const handleChange = (e) => {
    const { value } = e.target;
    setSearchInput(value);
    const results = artists.filter((artist) => artist.artistName.toLowerCase().includes(value.toLowerCase()));
    setFilteredArtists(results);
  };

  // const resetSearch = () => {
  //   setSearchInput('');
  //   setFilteredShops(filteredShops);
  // };

  return (
    <div className="d-flex flex-column justify-content-center align-content-center">
      <InputGroup className="mb-3">
        <Form.Control
          placeholder="Search Artists"
          aria-label="Search Artists"
          value={searchInput}
          onChange={handleChange}
          aria-describedby="basic-addon2"
        />
        {/* <Button variant="danger" onClick={resetSearch}>
          Reset
        </Button> */}
      </InputGroup>
    </div>
  );
}

ArtistSearchBar.propTypes = {
  artists: PropTypes.arrayOf(PropTypes.shape({
    artistName: PropTypes.string,
  })).isRequired,
  setFilteredArtists: PropTypes.func.isRequired,
};

export default ArtistSearchBar;
