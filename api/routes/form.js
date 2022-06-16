const express = require("express");
const router = express.Router();

const {
    formInfo,
} = require("../controllers/form");

router.route("/forminfo").put(formInfo);

module.exports = router;
