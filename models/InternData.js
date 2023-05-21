const { Schema, Types, model } = require("mongoose");
const InternData = new Schema({
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  about: { type: String, required: true },
  field: { type: String, required: true },
  role: { type: String, required: true },
  owner: { type: Types.ObjectId, ref: "Intern" },
});

module.exports = model("InternData", InternData);
