import React from 'react';
import '../../styles/Service.css';

const serviceData = [
  {
    id: 1,
    icon: 'ri-apps-line',
    title: 'App Development',
    des: 'Lorem ipsum dolor sit, amet elit. Totam nobis officia autem quia optio cums cupiditate hic quos dignissimos.',
  },
  {
    id: 2,
    icon: 'ri-code-s-slash-line',
    title: 'Web Development',
    des: 'Lorem ipsum dolor sit, amet elit. Totam nobis officia autem quia optio cums cupiditate hic quos dignissimos.',
  },
  {
    id: 3,
    icon: 'ri-landscape-line',
    title: 'Graphics Development',
    des: 'Lorem ipsum dolor sit, amet elit. Totam nobis officia autem quia optio cums cupiditate hic quos dignissimos.',
  },
  {
    id: 4,
    icon: 'ri-rocket-line',
    title: 'Digital Marketing',
    des: 'Lorem ipsum dolor sit, amet elit. Totam nobis officia autem quia optio cums cupiditate hic quos dignissimos.',
  },
];

const Services = () => {
  return (
    <section id='service'>
      <div className='container'>
        <div className='service-top-content'>
          <h6 className='subtitle'>Our Services</h6>
          <h2>Save time manging your buisness with</h2>
          <h2 className='highlight'> our best services</h2>
        </div>
        <div className='service-item-wrapper'>
          {serviceData.map(({ id, icon, title, des }) => (
            <div className='service-item' key={id}>
              <span className='service-icon'>
                <i className={icon}></i>
              </span>
              <h3 className='service-title'>{title}</h3>
              <p className='des'>{des}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
