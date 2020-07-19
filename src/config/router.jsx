import React, { Suspense } from 'react'
import { ThemeProvider } from "styled-components"
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'

import { Header } from "../components/_common"
import SignIn from "../components/Auth/SignIn"
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
                                <Route exact path='/about' component={() => (<div>About</div>)} />
                                <Route exact path='/signin' component={() => (<SignIn />)} />
                                <Route path='/home' component={() => (<div>Home</div>)} />
                            </PageContainer>
                        </Switch>
                    </ThemeProvider>
                </Router>
            </Suspense>
        </>
    )
}


export default App