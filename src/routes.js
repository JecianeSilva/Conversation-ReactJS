import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Chat from './pages/Chat/index';

export default function Routes(){
       return(
        <BrowserRouter>
            <Route component={Chat} path='/' exact/>
        </BrowserRouter>
       );
}
