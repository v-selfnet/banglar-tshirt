import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Layout = () => {
    const tshirts = useLoaderData();
    return (
        <div>
            <h3>Total T-Shirts: {tshirts.length}</h3>
        </div>
    );
};

export default Layout;