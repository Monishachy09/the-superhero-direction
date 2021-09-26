import React from 'react';


const Cart = (props) => {
    const cart = props.cart;
    const total = cart.reduce((total, publish) => total + publish.price, 0);
    return (
        <div>
            <h6>Publisher Added: {cart.length} </h6>
            <h6>Total Cost: ${total} </h6>
            <button className="btn btn-success mt-4">Buy Now</button>
        </div>
    );
};

export default Cart;