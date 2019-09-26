let instance = null;
var wishlist = [];

class DataService {
  constructor() {
    if (!instance) {
      instance = this;
    }

    return instance;
  }

  addWishlistItem = item => {
    wishlist.push(item);
  };

  removeWishlistItem = item => {
    for (var x = 0; x < wishlist.length; x++) {
      if (wishlist[x]._id === item._id) {
        wishlist.splice(x, 1);
        break;
      }
    }
  };
}

export default DataService;
