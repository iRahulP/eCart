import React from 'react';
import Cart from './Cart';
import Navbar from './Navbar';
import firebase from 'firebase/app';

class App extends React.Component {
  //Constructor for CartItem
  constructor() {
    //super() calls constructor of Parent class i.e React.Component
    super();
    this.state = {
      products: [],
      loading: true
    }
    this.db = firebase.firestore();
  }

  componentDidMount() {
    this.db
      .collection('products')
      .onSnapshot((snapshot) => {
        const products = snapshot.docs.map((doc) => {
          const data = doc.data();
          data['id'] = doc.id;
          return data;
        });

        this.setState({
          products: products,
          loading: false
        });

      });
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

  addProduct = () => {
    this.db
      .collection('products')
      .add({
        img: "https://images.unsplash.com/photo-1578545565737-22fb1162448f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGNhcnxlbnwwfDJ8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        price: 499999,
        qty: 0,
        title: 'Z Racer V12'
      })
      .then((ref) => {
        console.log("product added : ", ref);
      })
      .catch((error) => {
        console.log('Error : ', error);
      })
  }

  render() {
    const { products, loading } = this.state;
    return (
      <div className="App" >
        <Navbar count={this.getCartCount()} />
        <button onClick={this.addProduct} style={{ padding: 20, fontSize: 20 }}>Add a product</button>
        <Cart
          products={products}
          onIncreaseQty={this.handleIncreaseQty}
          onDecreaseQty={this.handleDecreaseQty}
          onDeleteItem={this.handleDeleteProduct}
        />
        { loading && <h3>Loading Products ...</h3>}
        <div style={{ fontSize: 20, padding: 10, fontWeight: 'bold' }}>Total : {this.getCartPrice()}$</div>
      </div>
    );
  }
}

export default App;