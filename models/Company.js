const { Schema, Types, model } = require("mongoose");

const Company = new Schema({
  title: { type: String, required: true },
  city: { type: String, required: true },
  description: { type: String, required: true },
  field: { type: String, required: true },
  offers: [{ type: Types.ObjectId, ref: "JobOffer" }],
  owner: { type: Types.ObjectId, ref: "User" },
  acceptedInterns: [{ type: Types.ObjectId, ref: "InternData", default: [] }],
});

module.exports = model("Company", Company);
