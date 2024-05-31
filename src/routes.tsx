import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Teachers from './pages/teachers'
import Main from './pages/main'
import Aboutus from './pages/aboutus'
import Account from './pages/account'
import { URLs } from './__data__/urls';

export const PageRoutes = () =>(
    <Routes>
        <Route path ={URLs.baseUrl} element={<Main/>} />
        <Route path ={URLs.teachers} element={<Teachers/>} />
        <Route path ={URLs.about} element={<Aboutus/>} />
        <Route path ={URLs.ui.account.url} element={<Account/>} />

        <Route path="*" element={<h1>Page not found</h1>} />
    </Routes>
)