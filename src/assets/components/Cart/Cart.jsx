import React from 'react';
import './Cart.css';

const Cart = ({cart}) => {
    // const cart = props.cart;   //option1
    // const {cart} = props;   //option 2 


    let totalPrice = 0 ;
    let totalShipping = 0;
    for (const product of cart){
        totalPrice = totalPrice + product.price;
        totalShipping = totalShipping + product.shipping;
    }
    const tax = totalPrice*7/100;

    const grandTotal = totalPrice + totalShipping + tax;

    return (
        <div className='cart'>
             <h4>order summery</h4>
            <p>selected items: {cart.length}</p>
            <p>Total Price: ${totalPrice} </p>
            <p>Total shipping: ${totalShipping} </p>
            <p>Tax:{tax.toFixed(2)} </p>
            <p>Grand total: ${grandTotal.toFixed(2)} </p>
        </div>
    );
};

export default Cart;