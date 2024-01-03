import React from 'react';
import './css/Home.css';
import Carousel from './componenst/Carousel';
import SocialLinks from './componenst/SocialLinks';


export default function Home() {
  return (
    <div className="Home-container">
      <Carousel />
      <SocialLinks />
    </div>
    
  );
}
