import React, { useEffect, useState } from 'react';
// import { Button } from 'react-bootstrap';
import { useRouter } from 'next/router';
import UserCard from '../components/UserCard';
import { getAllUsers } from '../api/userData';

function AllUsers() {
  const router = useRouter();
  const [users, setUsers] = useState([]);

  const getTheUsers = () => {
    getAllUsers().then((resp) => setUsers(resp));
  };
  useEffect(() => {
    getTheUsers();
  }, [router]);
  return (
    <>
      {users.map((user) => (
        <section key={`user--${user.id}`}>
          <UserCard id={user.id} firstName={user.first_name} lastName={user.last_name} email={user.email} onUpdate={getTheUsers} />
        </section>
      ))}
    </>
  );
}

export default AllUsers;
