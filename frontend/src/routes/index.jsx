// ====================== react ===========================
import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Redirect } from 'react-router-dom';
// ====================== styles ==========================
import { SpinnerWrapper } from '../styles';
import { Spin } from 'antd';
// ====================== components ======================
// import { WithAuth } from '../components/HOC/withAuth';
import Fade from 'react-reveal/Fade';
import LightSpeed from 'react-reveal/LightSpeed';

const NavBar = lazy(() => import('../components/navBar'));
const Container = lazy(() => import("../components/layout/Container"));
const ScrollToTop = lazy(() => import("../components/ScrollToTop"));
const Footer = lazy(() => import('../components/Footer'));
// ======================= pages ==========================
const HomePage = lazy(() => import('../pages/homePage'));
const MapPage = lazy(() => import('../pages/mapPage'));
const AboutPage = lazy(() => import('../pages/aboutPage'));
const AnalysisPage = lazy(() => import('../pages/analysisPage'));
const LoginPage = lazy(() => import('../pages/loginPage'));
// ========================================================


const Routes = () => {

    const spinner = (
        <>
        <SpinnerWrapper>
                <Fade><Spin size='large'/></Fade>
                <br /><br />
                <h2><LightSpeed left cascade>Landing...</LightSpeed></h2>
        </SpinnerWrapper>
        </>
    );

    return (
        <>
        <Router>
            <Suspense fallback={ spinner }>
                <NavBar />
                <Container>
                <ScrollToTop />
                    <Switch>
                        <Route exact path='/' component={ HomePage }/>
                        <Route exact path='/demo' component={ MapPage }/>
                        <Route exact path='/demo/analysis' component={ AnalysisPage }/>
                        <Route exact path='/about' component={ AboutPage }/>
                        <Route exact path='/login' component={ LoginPage }/>
                        <Route render={ () => <Redirect to={{ pathname: '/' }}/> }/>
                    </Switch>
                </Container>
                <Footer/>
            </Suspense>
        </Router>
        </>
    );
};

export default Routes;
