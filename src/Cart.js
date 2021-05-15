import React from 'react';
import CartItem from './CartItem';

class Cart extends React.Component {
    //Constructor for CartItem
    constructor() {
        //super() calls constructor of Parent class i.e React.Component
        super();
        this.state = {
            products: [
                {
                    price: 99,
                    title: 'Z Watch',
                    qty: 1,
                    img: ''
                },
                {
                    price: 999,
                    title: 'Z Phone',
                    qty: 1,
                    img: ''
                }, {
                    price: 999999,
                    title: 'Z Jet',
                    qty: 1,
                    img: ''
                },
            ]
        }
    }

    render() {
        const { products } = this.state;
        return (
            <div className="cart">
                {products.map((product) => {
                    return <CartItem product={product} />
                })}
            </div>
        );
    }
}

export default Cart;