const { Schema, Types, model } = require("mongoose");

const JobOffer = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  field: { type: String, required: true },
  company: { type: Types.ObjectId, ref: "Company" },
  likedBy: [{ type: Types.ObjectId, ref: "InternData", default: [] }],
});

module.exports = model("JobOffer", JobOffer);
