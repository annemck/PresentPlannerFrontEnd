import React from 'react';
import {Link} from 'react-router-dom';

const NavBar = (props) => {
  return (
    <header>
      <h1>GiftHub</h1>
        <ul>
        <li className="navLink">
          <a href="/persons">Home</a>
        </li>
        <li className="navLink">
          <a href="/persons/new">Add a new person</a>
        </li>
        <li className="navLink">
          <a href="/items/new">Add a new item</a>
        </li>
        <li className="navLink">
          <a href="/events/new">Add a new event</a>
        </li>
      </ul>
    </header>
  )
}

export default NavBar;
