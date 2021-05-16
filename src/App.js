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
          img: 'https://images.unsplash.com/photo-1580117728803-4e9a65253f92?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDB8fHdhdGNofGVufDB8MnwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
          id: 1
        },
        {
          price: 999,
          title: 'Z Phone',
          qty: 1,
          img: 'https://images.unsplash.com/photo-1548094891-c4ba474efd16?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cGhvbmV8ZW58MHwyfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
          id: 2
        }, {
          price: 999999,
          title: 'Z Jet',
          qty: 1,
          img: 'https://images.unsplash.com/photo-1614445334427-6316337d7556?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHJpdmF0ZSUyMGpldHxlbnwwfDJ8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
          id: 3
        }
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

  getCartPrice = () => {
    const { products } = this.state;
    let cartTotal = 0;

    products.map((product) => {
      cartTotal = cartTotal + product.qty * product.price;
      return cartTotal;
    });
    return cartTotal;
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
        <div style={{ fontSize: 20, padding: 10, fontWeight: 'bold' }}>Total : {this.getCartPrice()}$</div>
      </div>
    );
  }
}

export default App;