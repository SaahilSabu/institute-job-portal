const User = require("../models/User");
const errorResponse = require("../utils/errorResponse");
const sendEmail = require("../utils/sendEmail");

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

exports.submit = async (req, res, next) => {
  // Send Email to email provided but first check if user exists
  const id = req.params.id;

  try {
    const user = await User.findById(id);

    if (!user) {
      return next(new errorResponse("No email could not be sent", 404));
    }

    user.submitted = true;

    await user.save();

    // HTML Message
    const message = `
      <h1>You have succesfully submitted the form</h1>
      <p>here is a copy of the submitted form:</p>
      <p>${user}</p>
    `;

    try {
      await sendEmail({
        to: user.email,
        subject: "Form Submitted",
        text: message,
        // attachments: [
        //   {
        //     filename: "Form.txt",
        //     content: new Buffer("hello world!", "utf-8"),
        //   },
        // ],
      });

      res.status(200).json({ success: true, data: "Email Sent" });
    } catch (err) {
      console.log(err);
      return next(new errorResponse("Email could not be sent", 500));
    }
  } catch (err) {
    next(err);
  }
};
