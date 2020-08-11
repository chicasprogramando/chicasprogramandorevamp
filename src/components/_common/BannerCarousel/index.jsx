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
    <Carousel
      activeIndex={index}
      onSelect={handleSelect}
      className="styled-carousel"
      controls={false}
    >
      {imageList.map((slide) => (
        <Carousel.Item key={slide.imgUrl}>
          <div
            role="img"
            style={{
              ...styles.imageContainer,
              backgroundImage: `url(${slide.imgUrl})`,
            }}
            className="d-block"
            aria-label={slide.label}
          >
            <div style={styles.imageOverlay}></div>
          </div>
          <Carousel.Caption className="styled-carousel-caption">
            <p>Bienvenides a nuestra plataforma</p>
            <h3>
              Título de banner <br /> en dos líneas
            </h3>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default BannerCarousel;

const styles = {
  imageContainer: {
    width: "98%",
    margin: "0 auto",
    height: "310px",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "50% 30%",
    marginTop: "20px",
    marginBottom: "10px",
    postion: "relative",
    borderRadius: "8px",
  },
  imageOverlay: {
    position: "absolute",
    width: "98%",
    height: "310px",
    background: "linear-gradient(180deg, #7E5BBF 0%, #CBACE2 87.8%)",
    mixBlendMode: "multiply",
    borderRadius: "8px",
  },
};
