import React from 'react';
import { Link } from 'gatsby';
import { Container } from './nav.css';

const Nav = () => (
  <Container>
    <ul>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/home">Portfolio</Link>
      </li>
      <li>
        <Link to="/DeepLearning">DeepLearning</Link>
      </li>
      <li>
        <Link to="/UXCS">UX & Cognitive Science</Link>
      </li>
      <li>
        <Link to="/Contact">Contact</Link>
      </li>
      <li>
        <Link to="/CS">CV</Link>
      </li>
    </ul>
  </Container>
);

export default Nav;
