import React, {Component} from 'react';
import './wishlist.css';
import ProductCondensed from "../productCondensed/productCondensed";
import DataService from "../services/data-service"

class WishList extends Component {

  constructor(props){
    super(props);

    this.state = {wishlist:[
      {
        title:"Bologna Killer",
        price:23.99,
        _id:"asdfdf"
      },
      {
        title:"Foo man chu",
        price:4.54,
        _id:"as245"
      },
      {
        title:"Pipe dream",
        price:100,
        _id:"asd456"
      }
    ]};

    //bind functions
    this.createWishList = this.createWishList.bind(this);
  }

  createWishList = () => {
    const list = this.state.wishlist.map(product => {
      return (
        <ProductCondensed product={product} key={product._id} />
      );
    });

    return (list);
  }

  render() {
    return (
      <div className="card wishlist-group">
        <div className="card-block">
          <h4 className="card-title">Wish List</h4>
          <ul className="list-group">
            {this.createWishList()}
          </ul>
        </div>
      </div>
    );
  }
}

export default WishList;
