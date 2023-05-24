import React from 'react';
import './index.scss'
import {Link, Route, Routes} from "react-router-dom";
import {AboutPageAsync} from "./Pages/AboutPage/AboutPage.async";
import {MainPageAsync} from "./Pages/MainPage/MainPage.async";
import { Suspense } from 'react';

const App = () => {
    return (
        <div className="app">
            <Link to={'/'}>Main</Link>,
            <Link to={'/about'}>About</Link>,
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path={'/about'} element={<AboutPageAsync />} />,
                    <Route path={'/'} element={<MainPageAsync />} />
                </Routes>
            </Suspense>



        </div>
    );
};

export default App;