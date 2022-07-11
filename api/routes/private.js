const express = require("express");
const router = express.Router();
const { getPrivateRoute } = require("../controllers/private");
const { protect, admin } = require("../middleware/auth");

router.route("/user").get(protect, getPrivateRoute);
router.route("/admin").get(admin, getPrivateRoute);

module.exports = router;
