import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Tshirt from './Tshirt';
import Cart from './Cart';
import './Layout.css';
import { toast } from 'react-hot-toast';

const Layout = () => {
    const tshirts = useLoaderData();
    
    const [cart, setCart] = useState([]);
    const handeledButton = tshirt => {
        const exist = cart.find(findShirt => findShirt._id === tshirt._id)
        if(exist){
            toast('Already added')
        }
        else{
            // part-1
            const newCart = [...cart, tshirt];
            setCart(newCart);
        }
    }

    const removeCartItem = id => {
        // part-1
        const remaining = cart.filter(remove => remove._id !== id);
        setCart(remaining);

    }

    return (
        <div className='container'>
            <div className='t-shirt-container'>
            {/* <h3>Total T-Shirts: {tshirts.length}</h3> */}
            {
                tshirts.map(tshirt => <Tshirt
                    key={tshirt._id}
                    tshirt={tshirt}
                    handeledButton={handeledButton}
                ></Tshirt>)
            }
            </div>
            <div className='cart-container'>
                <Cart 
                cart={cart}
                removeCartItem={removeCartItem}
                ></Cart>

            </div>
        </div>
    );
};

export default Layout;