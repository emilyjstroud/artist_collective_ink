/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Link from 'next/link';
import { signOut } from '../utils/auth';

export default function NavBar() {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-black">
      <div className="container-fluid">
        <Link passHref href="/">
          <a className="navbar-brand" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01">
            Artist Collective Ink.
          </a>
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>

        <div className="justify-content-end" id="navbarTogglerDemo01">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link passHref href="/">
                <a style={{ color: 'white' }} className="nav-link">
                  Home
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link passHref href="/artist">
                <a style={{ color: 'white' }} className="nav-link">
                  Artists
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link passHref href="/shop">
                <a style={{ color: 'white' }} className="nav-link">
                  Shops
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link passHref href="/profile">
                <a style={{ color: 'white' }} className="nav-link">
                  Profile
                </a>
              </Link>
            </li>
            <button type="button" className="btn btn-danger btn-sm" onClick={signOut}>
              Sign Out
            </button>
          </ul>
        </div>
      </div>
      <br />
    </nav>
  );
}
