const axios = require("axios");
const { PAYSTACK_SECRET } = process.env;

const paystack = () => {
  //sk_test_xxxx to be replaced by your own secret key
  const initializePayment = (data) => {
    const option = {
      url: "https://api.paystack.co/transaction/initialize",
      headers: {
        authorization: PAYSTACK_SECRET,
        "content-type": "application/json",
        "cache-control": "no-cache",
      },
      data,
    };
    // const callback = (error, response, body) => {
    //   return mycallback(error, body);
    // };
    axios.post(option);
  };
  const verifyPayment = (ref, mycallback) => {
    const option = {
      url:
        "https://api.paystack.co/transaction/verify/" + encodeURIComponent(ref),
      headers: {
        authorization: PAYSTACK_SECRET,
        "content-type": "application/json",
        "cache-control": "no-cache",
      },
    };
    const callback = (error, response, body) => {
      return mycallback(error, body);
    };
    axios(option, callback);
  };
  return { initializePayment, verifyPayment };
};
module.exports = paystack;
