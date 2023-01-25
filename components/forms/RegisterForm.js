import PropTypes from 'prop-types';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { registerUser } from '../../utils/auth'; // Update with path to registerUser

function RegisterForm({ user, updateUser }) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    uid: user.uid,
    id: user.id,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const userInfo = {
      first_name: formData.firstName,
      last_name: formData.lastName,
      email: formData.email,
      uid: formData.uid,
    };
    registerUser(userInfo).then(() => updateUser(user.uid));
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>First Name</Form.Label>
        <Form.Control name="firstName" value={formData.firstName} onChange={handleChange} required />
        <Form.Label>Last name</Form.Label>
        <Form.Control name="lastName" value={formData.lastName} onChange={handleChange} required />
        <Form.Label>Email</Form.Label>
        <Form.Control name="email" value={formData.email} onChange={handleChange} required />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

RegisterForm.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number,
    uid: PropTypes.string,
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    email: PropTypes.string,
  }).isRequired,
  updateUser: PropTypes.func.isRequired,
};

export default RegisterForm;
