import React from 'react';
import logo from './logo.svg';
import './App.css';

//services
import HttpService from '../services/http-service';

//components
import Product from '../product/product';
import WishList from '../wishlist/wishlist';

//service for access products in swag shop api
const http = new HttpService();

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {products: []};
    //bind function
    this.loadData = this.loadData.bind(this);
    this.productList = this.productList.bind(this);

    this.loadData();
  }

  loadData = () => {
    var self = this;
    http.getProducts().then(data => {
      self.setState({products: data});
    }, err => {

    });
  }

  productList = () => {
    const list = this.state.products.map(product => {
      return (
        <div className="col-sm-4" key={product._id}>
          <Product title={product.title} price={product.price} imgUrl={product.imgUrl} />
        </div>
      )
    });

    return (list);
  }

  render() {
    return (
      <div className="App">
        <div className="App-main container-fluid">
          <div className="row">
            <div className="col-sm-8">
              <div className="row">
                {this.productList()}
              </div>
            </div>
            <div className="col-sm-4">
              <WishList />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
