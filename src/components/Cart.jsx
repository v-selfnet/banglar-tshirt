import React from 'react';

const Cart = ({cart, removeCartItem}) => {
    return (
        <div>
            <h2>Order Summery: {cart.length}</h2>
            <hr />
            {
                cart.map(tshirt => <p 
                    key={tshirt._id}>{tshirt.name}
                    <button onClick={() => removeCartItem(tshirt._id)}>x</button>
                    </p>)
            }
        </div>
    );
};

export default Cart;