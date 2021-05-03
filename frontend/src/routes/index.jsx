import React, { Suspense, lazy } from 'react';
import { createBrowserHistory } from "history";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Redirect } from 'react-router-dom';

// ============= styles & components =============
import NavBar from '../components/navBar';
import { SpinnerWrapper } from '../styles';
import Spinner from 'react-bootstrap/Spinner'
import { WithAuth } from '../components/HOC/withAuth';
// ===============================================
// ==================== pages ====================
const HomePage = lazy(() => import('../pages/homePage'));
const AboutPage = lazy(() => import('../pages/aboutPage'));
const AnalysisPage = lazy(() => import('../pages/analysisPage'));
const LoginPage = lazy(() => import('../pages/loginPage'));
// ===============================================


const history = createBrowserHistory();


const Routes = () => {

    const spinner = (
        <SpinnerWrapper>
            <Spinner animation='border' variant='info' role='status'>
                <span>Loading...</span>
            </Spinner>
        </SpinnerWrapper>
    );

    return (
        <>
        <Router history={ history }>
            <NavBar/>
            <Suspense fallback={ spinner }>
                <Switch>
                    <Route exact path='/' component={ WithAuth(HomePage) }/>
                    <Route exact path='/analysis' component={ WithAuth(AnalysisPage) }/>
                    <Route exact path='/about' component={ WithAuth(AboutPage) }/>
                    <Route exact path='/login' component={ LoginPage }/>
                    <Route render={ () => <Redirect to={{ pathname: '/' }}/> }/>
                </Switch>
            </Suspense>
        </Router>
        </>
    );
};

export default Routes;