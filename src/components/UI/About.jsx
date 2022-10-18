import React from 'react';
import aboutImg from '../../assets/pc2.jpg';
import '../../styles/About.css';

const chooseData = [
  {
    id: 1,
    icon: 'ri-wifi-line',
    title: `First working proccess`,
    des: ` Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non,
        pariatur? Eum, nobis! Necessitatibus nesciunt fuga similique
        praesentium eligendi sint explicabo laboriosam quia repudiandae
        repellat enim quo, perferendis temporibus tempore culpa.`,
  },
  {
    id: 2,
    icon: 'ri-team-line',
    title: `Dedicated team`,
    des: ` Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non,
        pariatur? Eum, nobis! Necessitatibus nesciunt fuga similique
        praesentium eligendi sint explicabo laboriosam quia repudiandae
        repellat enim quo, perferendis temporibus tempore culpa.`,
  },
  {
    id: 3,
    icon: 'ri-customer-service-2-line',
    title: `24/7 Hours support`,
    des: ` Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non,
        pariatur? Eum, nobis! Necessitatibus nesciunt fuga similique
        praesentium eligendi sint explicabo laboriosam quia repudiandae
        repellat enim quo, perferendis temporibus tempore culpa.`,
  },
];

const About = () => {
  return (
    <section id='about'>
      <div className='container'>
        <div className='about-wrapper'>
          <div className='about-content'>
            <h6 className='subtitle'>Why choose us</h6>
            <h2>Specialist in aviding clients on</h2>
            <h2 className='highlight'>financial challenges</h2>
            <p className='des about-content-des'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non,
              pariatur? Eum, nobis! Necessitatibus nesciunt fuga similique
              praesentium eligendi sint explicabo laboriosam quia repudiandae
              repellat enim quo, perferendis temporibus tempore culpa.
            </p>
            <div className='choose-us-wrapper'>
              {chooseData.map(({ id, icon, title, des }) => (
                <div className='choose-us-item' key={id}>
                  <span className='choose-us-icon'>
                    <i className={icon}></i>
                  </span>
                  <div>
                    <h4 className='choose-us-title'>{title}</h4>
                    <p className='des'>{des}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className='about-img'>
            <img src={aboutImg} alt='bash' />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
