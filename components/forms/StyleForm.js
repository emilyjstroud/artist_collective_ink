import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import { Button, Form } from 'react-bootstrap';
import { createStyle, updateStyle } from '../../api/styleData';

const initialState = {
  name: '',
};

const StyleForm = ({ styleObj }) => {
  const [currentStyle, setCurrentStyle] = useState(initialState);

  const router = useRouter();

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

  const getAndSet = () => {
    if (styleObj.id) {
      setCurrentStyle(styleObj);
    }
  };
  useEffect(() => {
    getAndSet();
  }, [styleObj]);

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Style Name</Form.Label>
          <Form.Control name="name" required value={currentStyle.name} onChange={handleChange} />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
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
