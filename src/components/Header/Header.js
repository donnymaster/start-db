import React from 'react';

import './Header.css';

const Header = () => {
  return (
    <div className="header d-flex">
      <h3>
        <button className="btn btn-ligh title-app">
          StarDB
        </button>
      </h3>
      <ul className="d-flex">
        <li> 
          <button className="btn btn-success">People</button>
        </li>
        <li>
          <button className="btn btn-success">Planets</button>
        </li>
        <li>
          <button className="btn btn-success">Starships</button>
        </li>
      </ul>
    </div>
  );
};

export default Header;