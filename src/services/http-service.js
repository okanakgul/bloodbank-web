import "whatwg-fetch";

class HttpService {
  getBloodReqs = () => {
    var promise = new Promise((resolve, reject) => {
      fetch("http://ec2-52-28-26-31.eu-central-1.compute.amazonaws.com:8080/blood/bloodReq").then(response => {
        resolve(response.json());
      });
    });
    return promise;
  };

  getBloodBank = () => {
    var promise = new Promise((resolve, reject) => {
      fetch("http://ec2-52-28-26-31.eu-central-1.compute.amazonaws.com:8080/blood/bloodbank").then(response => {
        resolve(response.json());
      });
    });

    return promise;
  };
}

export default HttpService;
