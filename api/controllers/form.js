const User = require("../models/User");
const errorResponse = require("../utils/errorResponse");

exports.addFormInfo = async (req, res, next) => {
  const { fname, lname, phno, address } = req.body;
  const id = req.params.id;

  try {
    const user = await User.findById({ _id: id });


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

exports.getFormInfo = async (req, res, next) => {
  const id = req.params.id;

  try {
    const user = await User.findById({ _id: id });

    res.status(200).json({
      user,
    });
  } catch (error) {
    next(error);
  }
};
