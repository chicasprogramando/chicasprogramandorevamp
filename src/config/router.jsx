import React, { Suspense } from "react";
import { ThemeProvider } from "styled-components";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import { Header, Footer } from "../components/_common";
import SignIn from "../components/Auth/SignIn";
import Home from "../components/Home";
import Comunidad from "../components/Comunidad";
import { theme, GlobalStyle, PageContainer } from "./styles";

const App = () => {
  return (
    <>
      <Suspense fallback={<div>Loading</div>}>
        <Router>
          <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Switch>
              <PageContainer>
                <Header />
                <Route path="/home" component={() => <Home />} />
                <Route
                  exact
                  path="/codigo"
                  component={() => <div>Código de conducta</div>}
                />
                <Route
                  exact
                  path="/comunidad"
                  component={() => <Comunidad />}
                />
                <Route
                  exact
                  path="/contacto"
                  component={() => <div>Contacto</div>}
                />
                <Route exact path="/signin" component={() => <SignIn />} />
                <Footer />
              </PageContainer>
            </Switch>
          </ThemeProvider>
        </Router>
      </Suspense>
    </>
  );
};

export default App;
