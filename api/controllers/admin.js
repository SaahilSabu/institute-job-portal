const Job = require("../models/Job");
const User = require("../models/User");
const errorResponse = require("../utils/errorResponse");

exports.addJob = async (req, res, next) => {
  const { name, desc, dept, role, validity } = req.body;

  try {
    const job = Job.create({
      name,
      desc,
      dept,
      role,
      validity,
    });

    res.status(200).json({
      success: true,
      job,
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

exports.getAllJobs = async (req, res, next) => {
  try {
    const job = Job.find({}, (err, jobs) => {
      res.status(200).json({
        jobs,
      });
    });
  } catch (error) {}
};

exports.getAllUsers = async (req, res, next) => {
  try {
    const user = User.find({}, (err, users) => {
      res.status(200).json({
        users,
      });
    });
  } catch (error) {}
};
