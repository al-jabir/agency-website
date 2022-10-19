import React from 'react';

import '../../styles/Footer.css';

const quickLink = [
  {
    id: 1,
    path: '#',
    display: 'Marketing',
  },
  {
    id: 2,
    path: '#',
    display: 'Analaytics',
  },
  {
    id: 3,
    path: '#',
    display: 'Commerce',
  },
];
const suppoorLink = [
  {
    id: 1,
    path: '#',
    display: 'Pricing',
  },
  {
    id: 2,
    path: '#',
    display: 'Documentation',
  },
  {
    id: 3,
    path: '#',
    display: 'Guide',
  },
];
const detailsLink = [
  {
    id: 1,
    path: '#about',
    display: 'About',
  },
  {
    id: 2,
    path: '#job',
    display: 'Jobs',
  },
  {
    id: 3,
    path: '#blog',
    display: 'blog',
  },
];
const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className='footer'>
      <div className='container'>
        <div className='footer-wrapper'>
          <div className='footer-logo'>
            <h2>Agency</h2>
            <p className='des'>Grow with us</p>
            <p className='small-text des'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
              repellendus, cumque amet nisi laboriosam ratione. Id dignissimos
              odio blanditiis minus.
            </p>
          </div>

          <div className='footer-quick-links'>
            <div className='quick-link-title'>Solution</div>
            <ul className='quick-links'>
              {quickLink.map(({ id, path, display }) => (
                <li className='quick-link-item' key={id}>
                  <a href={path}>{display}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className='footer-quick-links'>
            <div className='quick-link-title'>Support</div>
            <ul className='quick-links'>
              {suppoorLink.map(({ id, path, display }) => (
                <li className='quick-link-item' key={id}>
                  <a href={path}>{display}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className='footer-quick-links'>
            <div className='quick-link-title'>Company</div>
            <ul className='quick-links'>
              {detailsLink.map(({ id, path, display }) => (
                <li className='quick-link-item' key={id}>
                  <a href={path}>{display}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className='copyright'>
          Copyright {year}, developed by <span>Al Jabir</span> . All rights
          reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
