import "whatwg-fetch";

class HttpService {
  getBloodReqs = () => {
    var promise = new Promise((resolve, reject) => {
      fetch("http://52.28.26.31/blood/bloodReq").then(response => {
        resolve(response.json());
      });
    });
    return promise;
  };

  getBloodBank = () => {
    var promise = new Promise((resolve, reject) => {
      fetch("http://52.28.26.31/blood/bloodbank").then(response => {
        resolve(response.json());
      });
    });

    return promise;
  };
}

export default HttpService;
