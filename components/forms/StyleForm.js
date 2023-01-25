import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import { Button, Form } from 'react-bootstrap';
import { createStyle, updateStyle } from '../../api/styleData';
import { useAuth } from '../../utils/context/authContext';

const initialState = {
  id: 1,
  name: '',
};

const StyleForm = ({ styleObj }) => {
  const [currentStyle, setCurrentStyle] = useState(initialState);

  const router = useRouter();
  const { user } = useAuth();

  useEffect(() => {
    if (styleObj.id) setCurrentStyle(styleObj);
    console.warn(styleObj.id);
  }, [styleObj, user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCurrentStyle((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (styleObj.id) {
      updateStyle(currentStyle, styleObj.id).then(() => router.push('/style'));
    } else {
      createStyle(currentStyle).then(() => router.push('/style'));
    }
  };

  // const getAndSet = () => {
  //   if (styleObj.id) {
  //     setCurrentStyle(styleObj);
  //   }
  // };
  // useEffect(() => {
  //   getAndSet();
  // }, [styleObj]);

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <h2 className="text-white mt-5">{styleObj.id ? 'Update' : 'Create'} Style</h2>
          <Form.Label className="text-white">Style Name</Form.Label>
          <Form.Control name="name" required value={currentStyle.name} onChange={handleChange} />
        </Form.Group>
        <Button type="submit">{styleObj.id ? 'Update' : 'Create'} Style</Button>
      </Form>
    </>
  );
};

StyleForm.propTypes = {
  styleObj: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
  }),
};

StyleForm.defaultProps = {
  styleObj: initialState,
};

export default StyleForm;
