import 'whatwg-fetch';

class HttpService {
  getProducts = () => {
    fetch('http://localhost:3004/product').then(res => {
      console.log(res.json());
    })
  }
}

export default HttpService;
