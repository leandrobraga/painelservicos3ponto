import React from 'react';

import ItemMenuTop from './ItemMenuTop';

import { OPTIONS_MENU } from '../../consts';
import './menu-top.css';

const MenuTop = () => (
  <nav style={{ paddingTop: '3.2%' }} className="navbar nav-bar-items-centered has-shadow">
    <div className="navbar-tabs">
      <ItemMenuTop optionMenu={OPTIONS_MENU.START} />
      <ItemMenuTop optionMenu={OPTIONS_MENU.CELERY} />
      <ItemMenuTop optionMenu={OPTIONS_MENU.POSTGRES} />
      <ItemMenuTop optionMenu={OPTIONS_MENU.GUNICORN} />
      <ItemMenuTop optionMenu={OPTIONS_MENU.NGINX} />
    </div>
  </nav>
);

export default MenuTop;
