const express = require("express");
const router = express.Router();

const { addJob, getAllJobs, getAllUsers } = require("../controllers/admin");

router.route("/addjob").post(addJob);
router.route("/getalljobs").get(getAllJobs);
router.route("/getallusers").get(getAllUsers);

module.exports = router;
