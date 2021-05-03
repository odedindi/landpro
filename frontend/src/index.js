import React from 'react';
import ReactDOM from 'react-dom';

import { store } from "./store";
import { Provider } from 'react-redux';

import Routes from "./routes";

import { grommet, Grommet } from 'grommet';


ReactDOM.render(

     <Provider store={ store }>
      <Grommet theme={ grommet }>
        <Routes />
      </Grommet>
    </Provider>,
  document.getElementById('root')
);
