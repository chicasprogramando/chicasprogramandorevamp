import React, { Suspense } from "react";
import { ThemeProvider } from "styled-components";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import { Header } from "../components/_common";
import SignIn from "../components/Auth/SignIn";
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
                <Route path="/home" component={() => <div>Home</div>} />
                <Route
                  exact
                  path="/codigo"
                  component={() => <div>Código de conducta</div>}
                />
                <Route
                  exact
                  path="/comunidad"
                  component={() => <div>Comunidad</div>}
                />
                <Route
                  exact
                  path="/contacto"
                  component={() => <div>Contacto</div>}
                />
                <Route exact path="/signin" component={() => <SignIn />} />
              </PageContainer>
            </Switch>
          </ThemeProvider>
        </Router>
      </Suspense>
    </>
  );
};

export default App;
