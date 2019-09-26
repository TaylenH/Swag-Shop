import React, {Component} from 'react';
import './productCondensed.css';

class ProductCondensed extends Component {
  render() {
    return (
      <li className="list-group-item pc-condensed">
        <a className="btn btn-outline-danger">X</a>
        <p>{this.props.product.title} | <em>${this.props.product.price}</em></p>
      </li>
    );
  }
}

export default ProductCondensed;
