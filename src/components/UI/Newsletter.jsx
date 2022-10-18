import React from 'react';
import '../../styles/Newsletter.css';

const Newsletter = () => {
  return (
    <section className='newsletter'>
      <div className='container'>
        <div className='newsletter-wrapper'>
          <div className='newsletter-content'>
            <h6 className='subtitle'>Let's work</h6>
            <h2>
              Explore the <span className='highlight'>hidden</span> ideas and
              subscribe!
            </h2>
          </div>

          <div className='newsletter-form'>
            <input type='email' placeholder='Email' />
            <button className='secondary_btn'>Subscribe Now</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;