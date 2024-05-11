import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Teachers from './pages/teachers'
import Main from './pages/main'
import Aboutus from './pages/aboutus'
import Account from './pages/account'

export const PageRoutes = () =>(
    <Routes>
        <Route path ="/school-stage" element={<Main/>} />
        <Route path ="/school-stage/teachers" element={<Teachers/>} />
        <Route path ="/school-stage/about" element={<Aboutus/>} />
        <Route path ="/school-stage/account" element={<Account/>} />

        <Route path="*" element={<h1>Page not found</h1>} />
    </Routes>
)