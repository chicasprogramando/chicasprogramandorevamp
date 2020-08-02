import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import img1 from "../../../assets/chicas_prog_img_1.jpg";
import img2 from "../../../assets/chicas_prog_img_2.jpg";

const BannerCarousel = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const imageList = [
    { imgUrl: img1, label: "Imagen 1: Aca va la descripcion de esta imagen" },
    { imgUrl: img2, label: "Imagen 1: Aca va la descripcion de esta imagen" },
  ];

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      {imageList.map((slide) => (
        <Carousel.Item>
          <div
            style={{
              ...styles.imageContainer,
              backgroundImage: `url(${slide.imgUrl})`,
            }}
            className="d-block w-100"
            aria-label={slide.label}
          ></div>
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default BannerCarousel;

const styles = {
  imageContainer: {
    height: "400px",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "50% 30%",
  },
};
