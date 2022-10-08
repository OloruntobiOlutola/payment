const express = require("express");
const Donor = require("./models/donor_schema");

const { PORT } = process.env;

const app = express();

app.use(express.json());

app.get("/register", async (req, res, next) => {
  try {
    const result = await axios(config);
    res.status(200).json({
      status: true,
      response: result.data,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error,
    });
  }
});

app.post("/initialize/:id", async (req, res, next) => {
  const donor = await Donor.findById(id);
});

app.listen(PORT, () => console.log("Server is running"));
