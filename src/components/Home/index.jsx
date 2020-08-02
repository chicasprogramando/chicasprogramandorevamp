import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { BannerCarousel } from "../_common";
import { StarIcon } from "../_common/Icons";
import {
  InnerWrapper,
  CenterFlexWrapper,
  SectionContainers,
  theme,
} from "../../config/styles";
import img3 from "../../assets/chicas_prog_img_3.png";
const Home = () => {
  return (
    <div>
      <BannerCarousel />
      <SectionContainers>
        <InnerWrapper>
          <ContentInfoBanner
            imgUrl={img3}
            imgPosition="left"
            title="¿Qué es Chicas Programando?"
            text="Es una comunidad que busca hacer más diversos los proyectos de tecnología, abriendo espacios de capacitación y creando una plataforma para visibilizar talento tecnológico de mujeres y personas no binarias."
          />
        </InnerWrapper>
      </SectionContainers>
      <SectionContainers>
        <InnerWrapper>
          <ContentInfoBanner
            imgUrl={img3}
            imgPosition="right"
            title="¿Qué hace Chicas Programando?"
            text="Organizamos charlas, workshops y sesiones de coding con el objetivo de acercar conocimientos y generar espacios de debate con y para la comunidad."
          />
        </InnerWrapper>
      </SectionContainers>
      <SectionContainers>
        <InnerWrapper>
          <Container>
            <Row>
              <Col>
                <ContentInfoCard
                  title="Charlas"
                  text="Lorem ipsum dolor sit amet, consectetur."
                />
              </Col>
              <Col>
                <ContentInfoCard
                  title="Workshops"
                  text="Lorem ipsum dolor sit amet, consectetur."
                />
              </Col>
              <Col>
                <ContentInfoCard
                  title="Sesiones de coding"
                  text="Lorem ipsum dolor sit amet, consectetur."
                />
              </Col>
            </Row>
          </Container>
        </InnerWrapper>
      </SectionContainers>
    </div>
  );
};

export default Home;

const ContentInfoBanner = ({ imgUrl, title, text, imgPosition }) => {
  return (
    <Container>
      <Row>
        {imgPosition === "right" && (
          <Col sm={5}>
            <div
              role="presentation"
              style={{
                ...imageContainerStyle,
                backgroundImage: `url(${imgUrl})`,
              }}
              className="d-block w-100"
            ></div>
          </Col>
        )}
        <Col sm={7}>
          <CenterFlexWrapper>
            <div>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          </CenterFlexWrapper>
        </Col>
        {imgPosition === "left" && (
          <Col sm={5}>
            <div
              role="presentation"
              style={{
                ...imageContainerStyle,
                backgroundImage: `url(${imgUrl})`,
              }}
              className="d-block w-100"
            ></div>
          </Col>
        )}
      </Row>
    </Container>
  );
};

const imageContainerStyle = {
  height: "300px",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "50% 30%",
};

const ContentInfoCard = ({ title, text }) => {
  return (
    <div>
      <div style={roundIconContainerStyle}>
        <CenterFlexWrapper>
          <StarIcon />
        </CenterFlexWrapper>
      </div>
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
};

const roundIconContainerStyle = {
  width: "50px",
  height: "50px",
  borderRadius: "50%",
  backgroundColor: theme.colors.midPurple,
  marginBottom: "10px",
};
