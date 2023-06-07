import React, {Suspense} from 'react';
import {Link, Route, Routes} from 'react-router-dom';
import './styles/index.scss';
import {useTheme} from "app/providers/ThemeProvider";
import {classNames} from "shared/lib/classNames/classNames";
import AppRouter from "app/providers/router/ui/AppRouter";
import {Navbar} from "widgets/Navbar/";
import {Sidebar} from "widgets/Sidebar/ui/Sidebar/Sidebar";





const App = () => {
    const {theme} = useTheme()
    return (
        <div className={classNames('app', {}, [theme] )}>



            <Navbar />

            <div className='content-page'>
                <Sidebar />
                <AppRouter />
            </div>





        </div>
    );
};

export default App;