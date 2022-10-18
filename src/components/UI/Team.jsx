import React from 'react';
import teamImg from '../../assets/pc2.jpg';
import '../../styles/Team.css';

const teamMember = [
  {
    id: 1,
    imgUrl: teamImg,
    name: 'Country Hurry',
    position: 'Product Developer',
  },
  {
    id: 1,
    imgUrl: teamImg,
    name: 'Lindas Walton',
    position: 'Cyber Developer',
  },
  {
    id: 1,
    imgUrl: teamImg,
    name: 'Sarrah Tylor',
    position: 'Frontend Developer',
  },
  {
    id: 1,
    imgUrl: teamImg,
    name: 'Emmily',
    position: 'CEO & Software Developer',
  },
];

const Team = () => {
  return (
    <section className='our-team'>
      <div className='container'>
        <div className='team-content'>
          <h6 className='subtitle'>Our team</h6>
          <h2>
            Meet with <span className='highlight'>our team</span>
          </h2>
        </div>
        <div className='team-wrapper'>
          {teamMember.map(({ id, imgUrl, name, position }) => (
            <div className='team-item' key={id}>
              <div className='team-img'>
                <img src={imgUrl} alt='team' />
              </div>
              <div className='team-details'>
                <h4>{name}</h4>
                <p className='des'>{position}</p>
                <div className='team-member-social'>
                  <span>
                    <i className='ri-linkedin-line'></i>
                  </span>{' '}
                  <span>
                    <i className='ri-twitter-line'></i>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
