import React from 'react';
import {Link} from 'react-router-dom';

const ItemSideNav = (props) => {
  return (
    <div className="sideNav">
      <ul>
        <li className="sideNavItem">
          <a href="/persons">Return to People</a>
        </li>
        <li>
          <a href="/items/new">Add a new gift idea</a>
        </li>
      </ul>
    </div>
  )
}

export default ItemSideNav
