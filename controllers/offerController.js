const JobOffer = require("../models/Offer");
const Company = require("../models/Company");

class OfferController {
  async createOffer(req, res) {
    try {
      const company = await Company.findOne({ owner: req.user.id });
      const { title, description, field } = req.body;
      const newData = await JobOffer.create({
        title,
        description,
        field,
        company: company._id,
      });
      await newData.save();
      return res.json({ message: "Data created", newData });
    } catch (e) {
      return res.status(400).json({ message: "creation error" });
    }
  }
  async getData(req, res) {
    try {
      const data = await JobOffer.findOne({ company: req.user.id });
      return res.json(data);
    } catch (e) {
      return res.status(400).json({ message: "Getting all error" });
    }
  }
}

module.exports = new OfferController();
