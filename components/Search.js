import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

function SearchBar({ shops, setFilteredShops }) {
  const [searchInput, setSearchInput] = useState('');

  const handleChange = (e) => {
    const { value } = e.target;
    setSearchInput(value);
    const results = shops.filter((shop) => shop.shopName.toLowerCase().includes(value.toLowerCase()));
    setFilteredShops(results);
  };

  return (
    <div className="d-flex flex-column justify-content-center align-content-center">
      <InputGroup className="mb-3">
        <Form.Control
          placeholder="Search Shops"
          aria-label="Search Shops"
          value={searchInput}
          onChange={handleChange}
          aria-describedby="basic-addon2"
        />
      </InputGroup>
    </div>
  );
}

SearchBar.propTypes = {
  shops: PropTypes.arrayOf(PropTypes.shape({
    shopName: PropTypes.string,
  })).isRequired,
  setFilteredShops: PropTypes.func.isRequired,
};

export default SearchBar;
