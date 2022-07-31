const express = require("express");
const router = express.Router();

const { createPdf, getPdf } = require("../controllers/pdf");

router.route("/createPdf").post(createPdf);
router.route("/getPdf").get(getPdf);

module.exports = router;
