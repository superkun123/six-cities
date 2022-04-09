import React from 'react';
import { Link } from 'react-router-dom';

export default function errorPage():JSX.Element {
  return (
    <React.Fragment>
      <h1>404</h1>
      <div>Page not found</div>
      <Link to="/">About</Link>
    </React.Fragment>
  );
}
