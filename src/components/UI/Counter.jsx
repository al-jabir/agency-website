import React from 'react';
import '../../styles/Counter.css';

const counterData = [
  {
    id: 1,
    number: '5K',
    text: 'clients',
  },
  {
    id: 2,
    number: 350,
    text: 'Running Projects',
  },
  {
    id: 3,
    number: 590,
    text: 'Projects Complete',
  },
];

const Counter = () => {
  return (
    <section id='project' className='counter'>
      <div className='container'>
        <div className='counter-wrapper'>
          {counterData.map(({ number, text, id }) => (
            <div className='counter-item' key={id}>
              <h3 className='counter-number'>{number}</h3>
              <h4 className='counter-title'>{text}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Counter;
