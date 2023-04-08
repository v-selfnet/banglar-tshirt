import React from 'react';
import './Tshirt.css'

const Tshirt = ({tshirt, handeledButton}) => {
    const {picture, price, name, _id} = tshirt
    return (
        <div className='t-shirt'>
            <img src={picture} alt="" />
            <h3>{name}</h3>
            <p>Price: $<span>{price}</span></p>
            <button className='btn-tshirt' onClick={() => handeledButton(tshirt)}>Buy Now</button>
            
        </div>
    );
};

export default Tshirt;