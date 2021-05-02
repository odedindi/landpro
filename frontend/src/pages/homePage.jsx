import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Box, Stack } from 'grommet';

import { HomePageWrapper } from '../styles/homePage';

import Navi from '../components/navi';

import LeafLetMap from '../components/mapComponent/drawOnMap';



const HomePage = () => {


  return (
    <>
      <Navi />
        <HomePageWrapper>
          <LeafLetMap />
        </HomePageWrapper>
    </>
  );
};

export default HomePage;

