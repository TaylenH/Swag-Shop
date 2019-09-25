import React from 'react';
import logo from './logo.svg';
import './App.css';
import HttpService from '../services/http-service';
import Product from '../product/product';

//service for access products in swag shop api
const http = new HttpService();

class App extends React.Component {

  constructor(props) {
    super(props);

    //bind function
    this.loadData = this.loadData.bind(this);

    this.loadData();
  }

  loadData = () => {
    http.getProducts().then(products => {
      console.log(products);
    }, err => {

    });
  }

  render() {
    return (
      <div className="App container">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> welcome
          </p>
        </header>
        <div className="App-main">
          <Product />
        </div>
      </div>
    );
  }
}

export default App;
