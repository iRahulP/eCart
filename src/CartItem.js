import React from 'react';

class CartItem extends React.Component {

    //Constructor for CartItem
    constructor() {
        //super() calls constructor of Parent class i.e React.Component
        super();
        this.state = {
            price: 999,
            title: 'Z Phone',
            qty: 1,
            img: ''
        }
    }

    //function for Increasing Qty
    //arrow function auto binds this to function
    IncreaseQty = () => {
        console.log('test inc', this.state);
    }

    render() {
        const { price, title, qty } = this.state;
        return (
            <div className="cart-item">
                <div className="left-block">
                    <img alt="" style={styles.image} />
                </div>
                <div className="right-block">
                    <div style={{ fontSize: 25 }}>{title}</div>
                    <div style={{ color: '#777' }}>Price : {price}$</div>
                    <div style={{ color: '#777' }}>Qty : {qty}</div>
                    <div className="cart-item-acions">
                        {/* Buttons */}
                        <img
                            alt="increase"
                            className="action-icons"
                            src="https://img-premium.flaticon.com/png/512/992/992651.png?token=exp=1621017251~hmac=e4f50b4edf771dd804128b77c9281b3d"
                            onClick={this.IncreaseQty}
                        />
                        <img
                            alt="decrease"
                            className="action-icons"
                            src="https://t4.ftcdn.net/jpg/03/16/36/03/240_F_316360373_uWcj5rZxsUbmoAogMfow8EZhUOn7FTM0.jpg"
                        />
                        <img
                            alt="delete"
                            className="action-icons"
                            src="https://img-premium.flaticon.com/png/512/1345/1345874.png?token=exp=1621017310~hmac=2238a7c112b4af8d932321ecf4343af1"
                        />
                    </div>
                </div>
            </div >
        )
    }
}

const styles = {
    image: {
        height: 110,
        width: 110,
        borderRadius: 4,
        background: '#ccc'
    }
}

export default CartItem;