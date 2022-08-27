// import React, { useState } from 'react';
// import PropTypes from 'prop-types';
// import Form from 'react-bootstrap/Form';
// import InputGroup from 'react-bootstrap/InputGroup';
// import Button from 'react-bootstrap/Button';

// function SearchBar({ filteredArtists, setFilteredArtists }) {
//   const [searchInput, setSearchInput] = useState('');

//   const handleChange = (e) => {
//     const { value } = e.target;
//     setSearchInput(value);
//     const results = filteredArtists.filter((artist) => artist.name.toLowerCase().includes(value.toLowerCase()));
//     setFilteredArtists(results);
//   };

//   const resetSearch = () => {
//     setSearchInput('');
//     setFilteredArtists(filteredArtists);
//   };

//   return (
//     <div>
//       <InputGroup className="mb-3">
//         <Form.Control
//           placeholder="Search Artists"
//           aria-label="Search Artists"
//           value={searchInput}
//           onChange={handleChange}
//           aria-describedby="basic-addon2"
//         />
//         <Button variant="danger" onClick={resetSearch}>
//           Reset
//         </Button>
//       </InputGroup>
//     </div>
//   );
// }

// SearchBar.propTypes = {
//   filteredArtists: PropTypes.arrayOf(PropTypes.shape({
//     name: PropTypes.string,
//   })).isRequired,
//   setFilteredArtists: PropTypes.func.isRequired,
// };

// export default SearchBar;
