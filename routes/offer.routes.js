const Router = require("express");
const jobOffer = require("../controllers/offerController");
const router = new Router();
const auth = require("../middlewares/auth.middleware");
const cookieJwt = require("../middlewares/cookie.middleware");

router.post("/create", auth, jobOffer.createOffer);
router.get("/get", cookieJwt, jobOffer.getData);

module.exports = router;
