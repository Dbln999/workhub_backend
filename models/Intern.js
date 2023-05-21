const { Schema, Types, model } = require("mongoose");
const Intern = new Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  data: { type: Types.ObjectId, ref: "InternData" },
});

module.exports = model("Intern", Intern);
