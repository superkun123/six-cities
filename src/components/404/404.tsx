import React from 'react';
import { Link } from 'react-router-dom';

export default function ErrorPage():JSX.Element {
  return (
    <React.Fragment>
      <h1>404</h1>
      <div>Page not found</div>
      <Link to="/">go back</Link>
    </React.Fragment>
  );
}
