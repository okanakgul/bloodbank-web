import "whatwg-fetch";

class HttpService {
  getBloodReqs = () => {
    var promise = new Promise((resolve, reject) => {
      fetch("http://localhost/api/bloodReq").then(response => {
        resolve(response.json());
      });
    });
    return promise;
  };

  getBloodBank = () => {
    var promise = new Promise((resolve, reject) => {
      fetch("http://localhost/api/bloodbank").then(response => {
        resolve(response.json());
      });
    });

    return promise;
  };
}

export default HttpService;
