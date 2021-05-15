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
                    img: '',
                    id: 1
                },
                {
                    price: 999,
                    title: 'Z Phone',
                    qty: 1,
                    img: '',
                    id: 2
                }, {
                    price: 999999,
                    title: 'Z Jet',
                    qty: 1,
                    img: '',
                    id: 3
                },
            ]
        }
    }

    handleIncreaseQty = (product) => {
        console.log('inc qty of ', product);
        const { products } = this.state;
        const index = products.indexOf(product);

        products[index].qty += 1;
        this.setState({
            products: products
        });
    }

    handleDecreaseQty = (product) => {
        console.log('dec qty of ', product);
        const { products } = this.state;
        const index = products.indexOf(product);

        if (products[index].qty !== 0) {
            products[index].qty -= 1;
            this.setState({
                products: products
            });
        }
    }

    render() {
        const { products } = this.state;
        return (
            <div className="cart">
                {products.map((product) => {
                    return (
                        <CartItem
                            product={product}
                            key={product.id}
                            onIncreaseQty={this.handleIncreaseQty}
                            onDecreaseQty={this.handleDecreaseQty}
                        />
                    );
                })}
            </div>
        );
    }
}

export default Cart;