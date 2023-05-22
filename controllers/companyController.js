const Company = require("../models/Company");
const Offer = require("../models/Offer");

class CompanyController {
  async addData(req, res) {
    try {
      const { title, city, description, field } = req.body;
      const newData = await Company.create({
        title,
        city,
        description,
        field,
        owner: req.user.id,
      });
      await newData.save();
      return res.json({ message: "Data created", newData });
    } catch (e) {
      return res.status(400).json({ message: "creation error" });
    }
  }
  async getData(req, res) {
    try {
      const data = await Company.findOne({ owner: req.user.id });
      return res.json(data);
    } catch (e) {
      return res.status(400).json({ message: "Getting all error" });
    }
  }

  async updateOffers(req, res) {
    try {
      const company = await Company.findOne({ owner: req.user.id });
      const offer = await Offer.find({ company: company._id });
      await Company.findOneAndUpdate(
        { owner: req.user.id },
        { offers: offer }
      );
      return res.json({ message: "Updated" });
    } catch (e) {
      return res.status(400).json({ message: "Updating error" });
    }
  }
}

module.exports = new CompanyController();
