// import styles from '../../styles/Banner.module.css'
import React from "react";
import Slider from "react-slick";
import styles from "../../styles/Banner.module.css";
import { render } from "react-dom";

class Banner extends React.Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <Slider {...settings}>
        <div className={styles.card}>
        <div className={styles.container}>
            <h6 className={styles.subTitle}>Bienvenides a nuestra plataforma</h6>
            <h1 className={styles.title}>Titulo de banner <br/> en dos lineas</h1>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.container}>
          <h6 className={styles.subTitle}>Bienvenides a nuestra plataforma</h6>
            <h1 className={styles.title}>Titulo de banner <br/> en dos lineas</h1>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.container}>
          <h6 className={styles.subTitle}>Bienvenides a nuestra plataforma</h6>
            <h1 className={styles.title}>Titulo de banner <br/> en dos lineas</h1>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.container}>
          <h6 className={styles.subTitle}>Bienvenides a nuestra plataforma</h6>
            <h1 className={styles.title}>Titulo de banner <br/> en dos lineas</h1>
          </div>
        </div>
      </Slider>
    );
  }
}
export default Banner;
