const User = require("../models/User");
const errorResponse = require("../utils/errorResponse");

exports.formInfo = async (req, res, next) => {
  const { email, fname, lname, phno, address } = req.body;

  try {
    const user = await User.findOne({ email });

    await user.updateOne({
      fname,
      lname,
      phno,
      address,
    });

    await user.save();
    res.status(200).json({
      success: true,
      data: "Form Updated",
    });
  } catch (error) {
    next(error);
  }
};
