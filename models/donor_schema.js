const { mongoose } = require("../db_connect");

const donorSchema = new mongoose.Schema({
  full_name: {
    type: String,
    required: [true, "A donor must have a name"],
  },
  email: {
    type: String,
    required: [true, "A donor must have a email"],
  },
  amount: {
    type: Number,
    required: [true, "A donor transaction must have an intended amount"],
  },
  reference: {
    type: String,
    required: [true, "A donor tranansaction must have a reference"],
  },
});

const Donor = mongoose.model("Donor", donorSchema);

module.exports = Donor;
