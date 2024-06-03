import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Global } from "@emotion/react"

import { PageRoutes } from './routes';
import { globalStyles } from './global-styles';

const App = () => {
  return (
    <BrowserRouter>
        <Global styles={globalStyles}/>
        <PageRoutes/>
    </BrowserRouter>
  );
};

export default App;

