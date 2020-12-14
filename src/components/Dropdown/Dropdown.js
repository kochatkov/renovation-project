import React from 'react';
import { Link } from 'react-router-dom';

export const Dropdown = () => {
  return (
    <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
      <li>
        <Link className="dropdown-item" to="#">
          Action
        </Link>
      </li>
      <li>
        <Link className="dropdown-item" to="#">
          Another action
        </Link>
      </li>
      <li>
        <Link className="dropdown-item" to="#">
          Something else here
        </Link>
      </li>
    </ul>
  );
};
