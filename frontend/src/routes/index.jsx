import React, { Suspense, lazy } from 'react';
import { createBrowserHistory } from "history";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Redirect } from 'react-router-dom';

import Spinner from 'react-bootstrap/Spinner'
import { SpinnerWrapper } from '../styles';
// ==================== pages ====================
import { WithAuth } from '../components/HOC/withAuth';


const HomePage = lazy(() => import('../pages/homePage'));
const AboutPage = lazy(() => import('../pages/aboutPage'));
const AnalysisPage = lazy(() => import('../pages/analysisPage'));
const LoginPage = lazy(() => import('../pages/loginPage'));
// ===============================================



const history = createBrowserHistory();


const spinner  = <SpinnerWrapper><Spinner animation='border' variant='info' role='status'><span>Loading...</span></Spinner></SpinnerWrapper>;

const Routes = () => {

    return <>
        <Router history={ history }>
            <Suspense fallback={ spinner }>
                <Switch>
                    <Route exact path='/' component={ WithAuth(HomePage) } />
                    <Route exact path='/analysis' component={ WithAuth(AnalysisPage) } />
                    <Route exact path='/about' component={ WithAuth(AboutPage) } />
                    <Route exact path='/login' component={ LoginPage } />
                    <Route render={() => <Redirect to={{ pathname: '/' }} />} />
                </Switch>
            </Suspense>
        </Router>
    </>

};

export default Routes;