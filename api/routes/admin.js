const express = require("express");
const router = express.Router();

const { addJob, getAllJobs } = require("../controllers/admin");

router.route("/addjob").post(addJob);
router.route("/getalljobs").get(getAllJobs);

module.exports = router;
