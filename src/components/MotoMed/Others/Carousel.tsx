import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

import React from "react";
import Slider from "react-slick";

import image from "./../../../assets/burn1.1.png";
import image2 from "./../../../assets/burn1.2.png";

// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

type ObjectContent = {
  original: string;
  thumbnail: string;
};

interface props {
  imageList: Array<ObjectContent>;
}

const Carousel: React.FC<props> = ({ imageList }) => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      {imageList.map((image) => {
        return (
          <div key={image.thumbnail}>
            {image.thumbnail ? <h4>{image.thumbnail}</h4> : null}

            <img src={image.original} alt={image.thumbnail} />
          </div>
        );
      })}
    </Slider>
  );

  // return <ImageGallery items={imageList} />;
};

export default Carousel;
