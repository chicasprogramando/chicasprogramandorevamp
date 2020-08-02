import styled, { createGlobalStyle } from "styled-components";

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

export const GlobalStyle = createGlobalStyle`
  body {
    background: ${(props) => props.theme.colors.white};
    margin: 0;
  }
  
  a {
    text-decoration: none;
  }
`;

export const PageContainer = styled.div`
  width: 100%;
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
