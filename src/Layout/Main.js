import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Pages/Home/Navbar/Navbar';

const Main = () => {
    return (
        <div>
            <Outlet/>
            <Navbar/>
        </div>
    );
};

export default Main;