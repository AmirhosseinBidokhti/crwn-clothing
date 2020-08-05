import React from 'react';

import './cart-item.styles.scss';


// get item and off of it then destructure it even more
const CartItem = ({ item: {imageUrl, price, name, quantity } }) => (

    <div className="cart-item">
        <img src={imageUrl} alt={name} />
        <div className="item-details">
            <span className="name">{name}</span>
            <span className="price">
                {quantity} x ${price}
            </span>
        </div>
    </div>
);

export default CartItem; 