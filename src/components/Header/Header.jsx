import React from 'react';
import './Header.css';

const nav_list = [
  {
    path: '#home',
    display: 'Home',
  },
  {
    path: '#about',
    display: 'About',
  },
  {
    path: '#service',
    display: 'Service',
  },
  {
    path: '#projects',
    display: 'Projects',
  },
  {
    path: '#blog',
    display: 'Blog',
  },
];

const Header = () => {
  return (
    <header className='header'>
      <div className='container'>
        <div className='nav_wrapper'>
          <div className='logo'>
            <h2>Agency</h2>
          </div>

          <div className='navigation'>
            <ul className='menu'>
              {nav_list.map((item, inx) => (
                <li className='menu_item' key={inx}>
                  <a href={item.path} className='link'>
                    {item.display}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className='light_mode'>
            <span>
              <i className='ri-sun-line'></i> Light Mode
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
