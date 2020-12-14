import React from 'react';
import { NavLink } from 'react-router-dom';

export const Navbar = () => {
  const isAuthenticated = true;

  const links = [{ to: '/', label: 'Home', exact: true }];

  if (isAuthenticated) {
    links.push({ to: '/about', label: 'About', exact: false });
    links.push({ to: '/projects', label: 'Проекти', exact: false });
    links.push({ to: '/profile', label: 'Деталі проекту', exact: false });
    // links.push({ to: '/logout', label: 'Выйти', exact: false });
  } else {
    links.push({ to: '/auth', label: 'Авторизация', exact: false });
  }

  const renderLinks = (links) => {
    return links.map((link, index) => (
      <li key={index}>
        <NavLink className="nav-link" to={link.to} exact={link.exact}>
          {link.label}
        </NavLink>
      </li>
    ));
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="#">
          Проект Реновація
        </NavLink>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav ml-auto">{renderLinks(links)}</ul>
        </div>
      </div>
    </nav>
  );
};
