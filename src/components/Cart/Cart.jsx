import React from "react";
import "./Cart.css";

function Cart({cartItems}) {

    const totalPrice = cartItems.reduce((previous, current) => previous + current.price * current.count, 0)
    return (
        <div className="Cart">
            {totalPrice}
        </div>
    )
}

export default Cart;
