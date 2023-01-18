import React from 'react';
import StyleForm from '../../../components/forms/StyleForm';
import { useAuth } from '../../../utils/context/authContext';

export default function NewStyle() {
  const { user } = useAuth();
  return (
    <div><h2>Create a Style</h2>
      <StyleForm user={user} />
    </div>
  );
}
