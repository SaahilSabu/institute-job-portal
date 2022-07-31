const express = require("express");
const router = express.Router();

const { addFormInfo, getFormInfo, submit } = require("../controllers/form");

router.route("/forminfo/:id").get(getFormInfo);
router.route("/forminfo/:id").put(addFormInfo);
router.route("/submit/:id").put(submit);

module.exports = router;
