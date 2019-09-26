let instance = null;
var observers = {};

class NotificationService {
  constructor() {
    if (!instance)
      instance = this;

    return instance;
  }

  addObserver = (notifName, observer, callBack) => {
    let objs = observers[notifName];

    if (!objs) {
      observers[notifName] = [];
    }

    let obj = {
      observer: observer,
      callBack: callBack
    };
    observers[notifName].push(obj);
  }

  removeObserver = (observer, notifName) => {
    var objs = observers[notifName];

    if (objs) {
      for (var i = 0; i < objs.length; i++) {
        if (observer === objs[i].observer) {
          objs.splice(i, 1);
          observers[notifName] = objs;
          break;
        }
      }
    }
  }
}
