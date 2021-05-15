import React from 'react';
import Cart from './Cart';
import Navbar from './Navbar';

class App extends React.Component {
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

  handleDeleteProduct = (id) => {
    const { products } = this.state;
    const items = products.filter((item) =>
      item.id !== id
    );
    this.setState({
      products: items
    });
  }


  getCartCount = () => {
    const { products } = this.state;
    let count = 0;

    products.forEach((product) => {
      count += product.qty;
    });

    return count;
  }

  render() {
    const { products } = this.state;
    return (
      <div className="App" >
        <Navbar count={this.getCartCount()} />
        <Cart
          products={products}
          onIncreaseQty={this.handleIncreaseQty}
          onDecreaseQty={this.handleDecreaseQty}
          onDeleteItem={this.handleDeleteProduct}
        />
      </div>
    );
  }
}

export default App;