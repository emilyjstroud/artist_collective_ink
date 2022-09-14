import React from 'react';
import { Button } from 'react-bootstrap';
import { signIn } from '../utils/auth';

function Signin() {
  return (
    <div
      className="text-center d-flex flex-column justify-content-center align-content-center"
      style={{
        height: '90vh',
        padding: '30px',
        maxWidth: '400px',
        margin: '0 auto',
      }}
    >
      <h1 style={{ color: 'white' }}>Welcome To Artist Collective Ink.</h1>
      <p style={{ color: 'white' }}>Click the button below to enter.</p>
      {/* <button type="button" className="btn btn-warning btn-lg copy-btn" onClick={signIn}>
        Sign In
      </button> */}
      <Button variant="danger" className="m-2" onClick={signIn}>Sign In</Button>
    </div>
  );
}

export default Signin;
