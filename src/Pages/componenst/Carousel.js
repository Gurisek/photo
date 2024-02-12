import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "../../Images/Svatby/0093-min.jpg";
import img2 from "../../Images/Svatby/0340.jpg";
import img3 from "../../Images/Svatby/0616-min.jpg";
import img4 from "../../Images/Svatby/1009-min.jpg";
import img5 from "../../Images/Personal/Portrety/cb DSC_5075.jpg";

const Carousel = () => {
  const images = [img1, img2, img3, img4, img5];

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    autoplay: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <img src={image} alt={`${index + 1}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
