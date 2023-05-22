const Router = require("express");
const company = require("../controllers/companyController");
const router = new Router();
const auth = require("../middlewares/auth.middleware");
const cookieJwt = require("../middlewares/cookie.middleware");

router.post("/create", auth, company.addData);
router.get("/get", cookieJwt, company.getData);
router.put("/update-offers", cookieJwt, company.updateOffers);

module.exports = router;
