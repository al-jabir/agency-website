import React from 'react';
import videoImg from '../../assets/video.png';
import '../../styles/Blog.css';

import articleImg from '../../assets/article.png';
import caseStudy from '../../assets/case-study.png';

const blogData = [
  {
    id: 1,
    imgUrl: videoImg,
    title: `Vidoe`,
    des: 'To know aobut work. Watch some video f...',
    linkUrl: '#',
  },
  {
    id: 2,
    imgUrl: articleImg,
    title: `Articles`,
    des: 'Do you want to improve the way your brand interacts with customer? lets talk...',
    linkUrl: '#',
  },
  {
    id: 3,
    imgUrl: caseStudy,
    title: `Case Study`,
    des: 'Boos your conversation rate with us...',
    linkUrl: '#',
  },
];

const Blog = () => {
  return (
    <section>
      <div className='container'>
        <div className='blog-top-content'>
          <h6 className='subtitle'>Our blog</h6>
          <h2>
            Let's have look from our
            <span className='highlight'> recent blog</span>
          </h2>
        </div>
        <div className='blog-wrapper'>
          {blogData.map(({ id, imgUrl, title, des, linkUrl }) => (
            <div className='blog-item' key={id}>
              <h3>{title}</h3>
              <div className='blog-img'>
                <img src={imgUrl} alt='' />
              </div>
              <p className='des blog-des'>{des}</p>
              <div>
                <a href={linkUrl} className='learn-more'>
                  <i className='ri-arrow-right-line'></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
