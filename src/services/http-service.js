import "whatwg-fetch";

class HttpService {
  getBloodReqs = () => {
    var promise = new Promise((resolve, reject) => {
      fetch("http://52.59.248.176/api/bloodReq").then(response => {
        resolve(response.json());
      });
    });
    return promise;
  };

  getBloodBank = () => {
    var promise = new Promise((resolve, reject) => {
      fetch("http://52.59.248.176/api/bloodbank").then(response => {
        resolve(response.json());
      });
    });

    return promise;
  };
}

export default HttpService;
