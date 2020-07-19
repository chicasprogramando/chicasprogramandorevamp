import React, { Suspense } from 'react'
import { ThemeProvider } from "styled-components"
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'

import { Header } from "../components/_common"
import { theme, GlobalStyle, PageContainer } from './styles'

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
                                <Route exact path='/home' component={() => (<div>Home</div>)} />
                                <Route exact path='/about' component={() => (<div>About</div>)} />
                                <Route exact path='/login' component={() => (<div>Login</div>)} />
                                <Redirect to="/home" />
                            </PageContainer>
                        </Switch>
                    </ThemeProvider>
                </Router>
            </Suspense>
        </>
    )
}


export default App