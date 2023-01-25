import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Button } from 'react-bootstrap';
import { useAuth } from '../utils/context/authContext';
import { getAllStyles } from '../api/styleData';
import StyleCard from '../components/StyleCard';

function Styles() {
  const [styles, setStyles] = useState([]);
  const router = useRouter();
  const { user } = useAuth();

  useEffect(() => {
    getAllStyles(user.uid).then((setStyles));
  }, []);

  return (
    <>
      <Button
        className="btn btn-danger"
        onClick={() => {
          router.push('/style/new');
        }}
      >
        Add a Style
      </Button>
      <article className="styles">
        <h1 style={{ color: 'white' }}>Styles</h1>
        {styles.map((style) => (
          <section key={`style--${style.id}`} className="style">
            <StyleCard
              id={style.id}
              name={style.name}
              onUpdate={getAllStyles}
            />
          </section>
        ))}
      </article>
    </>
  );
}

export default Styles;
