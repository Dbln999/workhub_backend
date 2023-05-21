const InternData = require("../models/InternData");

class InternController {
  async addData(req, res) {
    try {
      const { firstname, lastname, about, field, role } = req.body;
      const newData = await InternData.create({
        firstname,
        lastname,
        about,
        field,
        role,
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
      const data = await InternData.findOne({ owner: req.user.id });
      return res.json(data);
    } catch (e) {
      return res.status(400).json({ message: "Getting all error" });
    }
  }
}

module.exports = new InternController();
