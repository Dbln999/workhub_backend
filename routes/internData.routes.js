const Router = require("express");
const internController = require("../controllers/internController");
const router = new Router();
const auth = require("../middlewares/auth.middleware");
const cookieJwt = require("../middlewares/cookie.middleware");

router.post("/add", auth, internController.addData);
router.get("/get", cookieJwt, internController.getData);

module.exports = router;
