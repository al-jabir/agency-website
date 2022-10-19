import React, { useEffect, useRef } from 'react';
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
    path: '#project',
    display: 'Projects',
  },
  {
    path: '#blog',
    display: 'Blog',
  },
];

const Header = ({ theme, toggleTheme }) => {
  const headerRef = useRef(null);
  const menuRef = useRef(null);

  const headerFunc = () => {
    if (
      document.body.scrollTop > 80 ||
      document.documentElement.scrollTop > 80
    ) {
      headerRef.current.classList.add('header_shrink');
    } else {
      headerRef.current.classList.remove('header_shrink');
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', headerFunc);

    return () => window.removeEventListener('scroll', headerFunc);
  }, []);

  const handleclick = (e) => {
    e.preventDefault();

    const targetAttr = e.target.getAttribute('href');

    const location = document.querySelector(targetAttr).offsetTop;

    window.scrollTo({
      left: 0,
      top: location - 80,
    });
  };

  const toggleMenu = () => menuRef.current.classList.toggle('menu-active');

  return (
    <header className='header' ref={headerRef}>
      <div className='container'>
        <div className='nav_wrapper'>
          <div className='logo'>
            <h2>Agency</h2>
          </div>

          <div className='navigation' ref={menuRef} onClick={toggleMenu}>
            <ul className='menu'>
              {nav_list.map((item, inx) => (
                <li className='menu_item' key={inx}>
                  <a href={item.path} onClick={handleclick} className='link'>
                    {item.display}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className='light_mode'>
            <span onClick={toggleTheme}>
              {theme === 'light-theme' ? (
                <span>
                  <i className='ri-moon-line'></i>Dark
                </span>
              ) : (
                <span>
                  <i className='ri-sun-line'></i> Light
                </span>
              )}
            </span>
          </div>
          <span className='mobile-menu' onClick={toggleMenu}>
            <i className='ri-menu-line'></i>
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
