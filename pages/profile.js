import React from 'react';
import Button from 'react-bootstrap/Button';
import User from '../components/User';
import { useAuth } from '../utils/context/authContext';
import { signOut } from '../utils/auth';

export default function Profile() {
  const { user } = useAuth();
  return (
    <div style={{ color: 'white' }}>
      <User
        name={user.displayName}
        email={user.email}
        image={user.photoURL}
        lastLogin={user.metadata.lastSignInTime}
      />
      <Button variant="danger" onClick={signOut}>Sign Out</Button>
    </div>
  );
}
