import React from 'react';
import { Link } from 'react-router-dom';
import classes from './MainNavigation.module.css';

export default function MainNavigation() {
  return (
    <div>
          <header className={classes.header}>
              <div className={classes.logo}>React Meetups</div>
              <nav>
                  <ul>
                      <li><Link to='/'>🏡</Link></li>
                      <li><Link to='/new-meetups'>Add New Meetups</Link></li>
                      <li><Link to='/all-meets'>Show All Meetups</Link></li>
                      <li><Link to='/favorites'>My Favorites</Link></li>
                  </ul>
              </nav>
          </header>
    </div>
  )
}
