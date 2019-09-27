import React, {Component} from 'react';
import './wishlist.css';
import ProductCondensed from "../productCondensed/productCondensed";
import DataService from "../services/data-service"
import NotificationService, {NOTIF_WISHLIST_CHANGED} from "../services/notification-service";

let ns = new NotificationService();


class WishList extends Component {

  constructor(props){
    super(props);

    this.state = {wishlist:[]};

    //bind functions
    this.createWishList = this.createWishList.bind(this);
    this.onWishlistChanged = this.onWishlistChanged.bind(this);
  }

  componentDidMount() {
    ns.addObserver(NOTIF_WISHLIST_CHANGED, this, this.onWishlistChanged);
  }

  componentWillUnmount() {
    ns.removeObserver(this, NOTIF_WISHLIST_CHANGED);
  }

  onWishlistChanged(newWishlist) {
    this.setState({wishlist: newWishlist});
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
