import React from 'react';
import Header from './Header';
import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <hr />
            <Outlet></Outlet>
            <Toaster></Toaster>
        </div>
    );
};

export default Home;