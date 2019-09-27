import NotificationService, {NOTIF_WISHLIST_CHANGED} from './notification-service';

let ns = new NotificationService();

let instance = null;
var wishlist = [];

class DataService {
  constructor() {
    if (!instance) {
      instance = this;
    }

    return instance;
  }

  itemOnWishlist = product => {
    for(var i = 0; i < wishlist.length; i++){
      if (wishlist[i]._id === product._id) {
        return true;
      }
    }

    return false;
  }

  addWishlistItem = product => {
    wishlist.push(product);
    ns.postNotification(NOTIF_WISHLIST_CHANGED, wishlist);
  };

  removeWishlistItem = item => {
    for (var x = 0; x < wishlist.length; x++) {
      if (wishlist[x]._id === item._id) {
        wishlist.splice(x, 1);
        ns.postNotification(NOTIF_WISHLIST_CHANGED, wishlist);
        break;
      }
    }
  };
}

export default DataService;
