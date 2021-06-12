import React from 'react';
import { Link } from 'react-router-dom';
import { useHistory, useRouteMatch } from 'react-router';

const NotFound = () => {
  const history = useHistory();
  const route = useRouteMatch();
  console.log(history);
  console.log(route);

  return (
    <div>
      <h1>Oops... can't find this page!</h1>
      <h2>
        <Link to={'/'}>Back to the Home page</Link>
      </h2>
    </div>
  );
};

export default NotFound;
