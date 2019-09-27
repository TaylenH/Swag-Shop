import React, {Component} from 'react';
import './productCondensed.css';
import DataService from '../services/data-service';

let ds = new DataService();

class ProductCondensed extends Component {

constructor(props){
  super(props);

  //bind
  this.removeProduct = this.removeProduct.bind(this);
}

removeProduct = () => {
  ds.removeWishlistItem(this.props.product);
}

  render() {
    return (
      <li className="list-group-item pc-condensed">
        <a className="btn btn-outline-danger" onClick={()=>this.removeProduct()}>X</a>
        <p>{this.props.product.title} | <em>${this.props.product.price}</em></p>
      </li>
    );
  }
}

export default ProductCondensed;
