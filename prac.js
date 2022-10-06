// const express = require("express");
// const app = express();
// const port = 8080;
// const axios = require("axios");
// const FormData = require("form-data");
// const dataVerify = new FormData();

// const configVerify = {
//   method: "get",
//   url: "https://api.paystack.co/transaction/verify/XXRFED",
//   headers: {
//     Authorization: "Bearer sk_test_f83f972af703cbef25827385573b60bf7ddf4804",
//     ...dataVerify.getHeaders(),
//   },
//   data: dataVerify,
// };

// const data = JSON.stringify({
//   email: "customer@email.com",
//   amount: "500000",
//   reference: "XXRFED",
//   metadata: {
//     custom_fields: [
//       {
//         display_name: "Mobile Number",
//         variable_name: "mobile_number",
//         value: "+2348012345678",
//       },
//     ],
//   },
// });

// var config = {
//   method: "post",
//   url: "https://api.paystack.co/transaction/initialize",
//   headers: {
//     Authorization: "Bearer sk_test_f83f972af703cbef25827385573b60bf7ddf4804",
//     "Content-Type": "application/json",
//   },
//   data: data,
// };

// app.get("/", async (req, res) => {
//   try {
//     const result = await axios(config);
//     console.log("here");
//     console.log(result);
//     res.status(200).json({
//       status: true,
//       response: result.data,
//     });
//   } catch (error) {
//     res.status(400).json({
//       status: "fail",
//       message: error,
//     });
//   }
// });

// app.post("/", async (req, res) => {
//   try {
//     const result = await axios(configVerify);
//     console.log("here");
//     console.log(result);
//     res.status(200).json({
//       status: true,
//       response: result.data,
//     });
//   } catch (error) {
//     res.status(400).json({
//       status: "fail",
//       message: error,
//     });
//   }
// });

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`);
// });
