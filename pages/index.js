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
      <h1 style={{ color: 'white' }}>Welcome {user.displayName}! </h1>
      {/* <p style={{ color: 'white' }}>Click the button below to exit</p> */}
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
