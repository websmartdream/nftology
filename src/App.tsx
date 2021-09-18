import React, { Suspense } from 'react'
import styled from 'styled-components'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
// @import component
import Loading from './components/Loading'
// @import layout
import MainLayout from './layout/MainLayout'
import SubmitCollectible from './pages/SubmitCollectible'
// @import page
const Home = React.lazy(() => import('./pages/Home'))
const Discover = React.lazy(() => import('./pages/Discover'))
const Activity = React.lazy(() => import('./pages/Activity'))
const Trading = React.lazy(() => import('./pages/Trading'))
const About = React.lazy(() => import('./pages/About'))
const ConnectWallet = React.lazy(() => import('./pages/ConnectWallet'))
const SignInPage = React.lazy(() => import('./pages/SignIn'))

const AppContainer = styled.div`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  width: 100% !important;
`

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <AppContainer>
        <Suspense fallback={<Loading />}>
          <Switch>
            <Redirect exact from="/" to="/home" />
            <Route
              path="/home"
              render={() => (
                <MainLayout>
                  <Home />
                </MainLayout>
              )}
            />
            <Route
              path="/discover"
              render={() => (
                <MainLayout>
                  <Discover />
                </MainLayout>
              )}
            />
            <Route
              path="/activity"
              render={() => (
                <MainLayout>
                  <Activity />
                </MainLayout>
              )}
            />
            <Route
              path="/trading"
              render={() => (
                <MainLayout>
                  <Trading />
                </MainLayout>
              )}
            />
            <Route
              path="/about"
              render={() => (
                <MainLayout>
                  <About />
                </MainLayout>
              )}
            />
            <Route
              path="/connectwallet"
              render={() => (
                <MainLayout>
                  <ConnectWallet />
                </MainLayout>
              )}
            />
            <Route
              path="/signin"
              render={() => (
                <MainLayout>
                  <SignInPage />
                </MainLayout>
              )}
            />
            <Route
              path="/overview"
              render={() => (
                <MainLayout>
                  <SignInPage />
                </MainLayout>
              )}
            />
            <Route
              path="/creation"
              render={() => (
                <MainLayout>
                  <SignInPage />
                </MainLayout>
              )}
            />
            <Route
              path="/collection"
              render={() => (
                <MainLayout>
                  <SignInPage />
                </MainLayout>
              )}
            />
            <Route
              path="/settings"
              render={() => (
                <MainLayout>
                  <SignInPage />
                </MainLayout>
              )}
            />
            <Route
              path="/submitcollectible"
              render={() => (
                <MainLayout>
                  <SubmitCollectible />
                </MainLayout>
              )}
            />
          </Switch>
        </Suspense>
      </AppContainer>
    </BrowserRouter>
  )
}

export default App
