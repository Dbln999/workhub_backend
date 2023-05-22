const { Schema, Types, model } = require("mongoose");
const User = new Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  internData: { type: Types.ObjectId, ref: "InternData" },
  companyData: { type: Types.ObjectId, ref: "Company" },
});

module.exports = model("User", User);
