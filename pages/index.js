/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import Link from 'next/link';
import { Button } from 'react-bootstrap';
import { signOut } from '../utils/auth';
import { useAuth } from '../utils/context/authContext';

function Home() {
  const { user } = useAuth();

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
      <title>Artist Collective Ink</title>
      <h1 style={{ color: 'white' }}>Hey there, {user.displayName}! </h1>
      <br />
      <img src="https://i.pinimg.com/474x/ea/03/fc/ea03fc536678299bc965b654a71ed429.jpg" alt="" />
      <br />
      <p style={{ color: 'white' }}> Here at Artist Collective Ink., you'll be able to create your very own artist collective for your viewing pleasure. Use the buttons below to get started!</p>
      <Link href="/artist" passHref>
        <Button variant="danger" className="m-2">Meet the Artists</Button>
      </Link>
      <Link href="/shop" passHref>
        <Button variant="danger" className="m-2">Tour the Shops</Button>
      </Link>
      <Button variant="danger" className="m-2" onClick={signOut}>Sign Out</Button>
    </div>
  );
}

export default Home;
