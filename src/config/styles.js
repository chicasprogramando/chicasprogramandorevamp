import styled, { createGlobalStyle, css } from "styled-components";

export const theme = {
  colors: {
    black: "#000",
    white: "#FFF",
    darkPurple: "#5E3AAE",
    midPurple: "#7E5BBF",
    lightPurple: "#CBACE2",
    darkGray: "#333333",
    midDarkGray: "#666666",
    midLightGray: "#999999",
    lightGray: "#E3E3E3",
  },
};

// GLOBALS AND OVERRIDES

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }  

  body {
    width: 100vw;
    height: 100vh;
    background: ${(props) => props.theme.colors.white};
    margin: 0;
  }
  
  a {
    text-decoration: none;
  }

  #root {
    width: 100vw;
    height: 100vh;
  }

  p {
    margin: 0;
    padding: 0;
  }

  .styled-carousel.carousel li{
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background-color: ${(props) => props.theme.colors.midPurple};
  }

  .styled-carousel.carousel .carousel-indicators{
    bottom: -55px;
  }

  .styled-carousel-caption.carousel-caption {
    right: 10%;
    left: 10%;
    text-align: left;
    top: 50%;
    transform: translateY(-50%);
  }
`;

export const PageContainer = styled.div`
  width: 100%;
  height: 100%;
`;

export const InnerWrapper = styled.div`
  width: 100%;
  max-width: 960px;
  margin: 0 auto;
`;

export const CenterFlexWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SectionContainers = styled.section`
  width: 100%;
  height: 100%;
  padding: 0 10px;
  margin-top: 50px;
`;
