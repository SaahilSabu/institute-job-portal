const express = require("express");
const router = express.Router();

const { addFormInfo, getFormInfo } = require("../controllers/form");

router.route("/forminfo/:id").get(getFormInfo);
router.route("/forminfo/:id").put(addFormInfo);

module.exports = router;
 