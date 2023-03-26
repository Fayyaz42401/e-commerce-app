import React ,{useContext} from 'react';
import './home.scss';
import Slider from 'react-slick';
import { Button } from '@chakra-ui/react';
import Bg from './bg.jpg'

const Home = () => {





  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <>
      <div className="banner" style={{
        backgroundImage:`url(${Bg})`,
      }}>
        <div className="hero-text">
          <h2>Welcome to</h2>
          <h1>Ecommerce Store</h1>
          <p>
            Whoever said cash can’t purchase joy basically didn’t know where to
            go shopping. Shopping is somewhat of a loosening upside interest for
            me, or, in other words for the bank balance.
          </p>
          <Button colorScheme={'purple'} mt="4"  >Button</Button>
        </div>
        <div className="slider-banner">
          <Slider {...settings}>
            <div className="slider-box">
              <img
                src="https://images.pexels.com/photos/3985062/pexels-photo-3985062.jpeg?auto=compress&cs=tinysrgb&w=500"
                alt=""
              />
            </div>
            <div className="slider-box">
              <img
                src="https://images.pexels.com/photos/1087727/pexels-photo-1087727.jpeg?auto=compress&cs=tinysrgb&w=500"
                alt=""
              />
            </div>
            <div className="slider-box">
              <img
                src="https://images.pexels.com/photos/1778412/pexels-photo-1778412.jpeg?auto=compress&cs=tinysrgb&w=500"
                alt=""
              />
            </div>
          </Slider>
        </div>
      </div>
    
    </>
  );
};

export default Home;
