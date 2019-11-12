import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faExpand,
  faSignOutAlt,
} from '@fortawesome/free-solid-svg-icons';

import './header.css';

const Header = () => (
  <nav className="navbar is-info is-fixed-top" role="navigation" aria-label="main navigation">
    <div className="container">
      <div className="navbar-brand">
        <span style={{ marginTop: '5%' }} className="brand">Monitoramento Serviços 3Ponto</span>
        <div className="navbar-burger">
          <span />
          <span />
          <span />
        </div>
      </div>
      <div className="navbar-menu">
        <div className="navbar-end">
          <a className="navbar-link is-arrowless" href="#!">
            <FontAwesomeIcon icon={faExpand} />
          </a>
          <a className="navbar-link is-arrowless" href="#!">
            <FontAwesomeIcon icon={faSignOutAlt} />
          </a>
        </div>
      </div>
    </div>
  </nav>
);

export default Header;
