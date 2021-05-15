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
        // this.testing();
    }

    //promise to simulate API calls
    testing() {
        const promise = new Promise((resolve, reject) => {
            //calling after 5 sec
            setTimeout(() => {
                resolve('done');
            }, 5000);
        })
        promise.then(() => {
            //setState acts like a synchronous call
            this.setState({
                qty: this.state.qty + 10
            });
            this.setState({
                qty: this.state.qty + 10
            });
            this.setState({
                qty: this.state.qty + 10
            });

            console.log('state', this.state);
        });
    }

    //function for Increasing Qty
    //arrow function auto binds this to function
    IncreaseQty = () => {
        //this.state.qty += 1;
        console.log('test inc', this.state.qty);
        //setState form 1
        this.setState({
            //shallow merging
            qty: this.state.qty + 1
        });
    }

    DecreaseQty = () => {

        const { qty } = this.state;

        if (qty === 0) {
            return;
        }
        //this.state.qty -= 1;
        console.log('test dec', this.state.qty);
        //setState form 2 for prevState usage
        this.setState((prevState) => {
            return {
                qty: prevState.qty - 1
            }
        });
    }

    render() {
        console.log('render');
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
                            onClick={this.DecreaseQty}
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