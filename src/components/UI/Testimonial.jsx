import React from 'react';
import Slider from 'react-slick';
import ava1 from '../../assets/ava-1.jpg';
import '../../styles/Testimonial.css';

const Testimonial = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <section>
      <div className='container'>
        <div className='slider-content-top'>
          <h6 className='subtitle'>Testimonials</h6>
          <h2>
            Trusted by more than
            <span className='highlight'>5,000 customers</span>
          </h2>
        </div>
        <div className='slider-wrapper'>
          <Slider {...settings}>
            <div className='slider-item'>
              <p className='des'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos ab
                fuga fugiat optio quas voluptatem ullam dignissimos sit alias
                magni, nemo reiciendis ipsa dolorem asperiores consectetur
                recusandae totam neque suscipit provident facilis iusto
                doloribus! Vero earum velit doloremque quo doloribus!
              </p>
              <div className='customer-details'>
                <div className='customer-img'>
                  <img src={ava1} alt='ava' />
                </div>
                <div>
                  <h5 className='customer-name'>Jonh Doe</h5>
                  <p className='des'>CEO, Software Engineer at Google</p>
                </div>
              </div>
            </div>
            {/* <div className='slider-item'>
              <p className='des'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos ab
                fuga fugiat optio quas voluptatem ullam dignissimos sit alias
                magni, nemo reiciendis ipsa dolorem asperiores consectetur
                recusandae totam neque suscipit provident facilis iusto
                doloribus! Vero earum velit doloremque quo doloribus!
              </p>
              <div className='customer-details'>
                <div className='customer-img'>
                  <img src={ava1} alt='ava' />
                </div>
                <div>
                  <h5 className='customer-name'>Jonh Doe</h5>
                  <p className='des'>
                    Co Founder, Software Engineer at Ajsoft Tech
                  </p>
                </div>
              </div>
            </div>
            <div className='slider-item'>
              <p className='des'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos ab
                fuga fugiat optio quas voluptatem ullam dignissimos sit alias
                magni, nemo reiciendis ipsa dolorem asperiores consectetur
                recusandae totam neque suscipit provident facilis iusto
                doloribus! Vero earum velit doloremque quo doloribus!
              </p>
              <div className='customer-details'>
                <div className='customer-img'>
                  <img src={ava1} alt='ava' />
                </div>
                <div>
                  <h5 className='customer-name'>Jonh Doe</h5>
                  <p className='des'>CEO, Software Engineer at Tesla</p>
                </div>
              </div>
            </div> */}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
