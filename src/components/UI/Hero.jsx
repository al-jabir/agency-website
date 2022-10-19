import React from 'react';
import heroImg from '../../assets/hero-img.png';
import lightImg from '../../assets/light-hero-bg.jpg';
import '../../styles/hero.css';

const Hero = ({ theme }) => {
  return (
    <section id='home' className='hero_section'>
      <div className='container'>
        <div className='hero_wrapper'>
          <div className='hero_content'>
            <div>
              <h2>We're Creating Perfect</h2>
              <h2>Digital Product to</h2>
              <h2 className='highlight'>Promote Your Brand</h2>
            </div>
            <p className='des'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
              eveniet eum voluptatem voluptatum magnam quo!
            </p>
            <div className='hero_btns'>
              <button className='primary_btn'>Get Started Now</button>
              <button className='secondary_btn'>Discover More</button>
            </div>
          </div>
          <div className='hero_img'>
            <img
              src={theme === 'light-theme' ? lightImg : heroImg}
              alt='hero'
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
