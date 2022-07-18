const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "Please enter a username"],
    },
    email: {
      type: String,
      required: [true, "Please enter an email"],
      unique: [true, "This email is already in use"],
      match: [
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
        "Please enter a valid email",
      ],
    },
    password: {
      type: String,
      required: [true, "Please enter a password"],
      minlength: [8, "Password must be at least 8 characters"],
      select: false,
    },
    adNo: {
      type: String,
    },
    post: {
      type: String,
    },
    aadhaarNo: {
      type: String,
    },
    discipline: {
      type: String,
    },
    fname: {
      type: String,
    },
    mname: {
      type: String,
    },
    lname: {
      type: String,
    },
    fatherName: {
      type: String,
    },
    dob: {
      type: String,
    },
    age: {
      type: Number,
    },
    category: {
      type: String,
    },
    phno: {
      type: Number,
    },
    secPhNo: {
      type: Number,
    },
    secEmail: {
      type: String,
      match: [
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
        "Please enter a valid email",
      ],
    },
    maritalStatus: {
      type: String,
    },
    nationality: {
      type: String,
    },
    address: {
      loc: {
        type: String,
      },
      pin: {
        type: Number,
      },
    },
    secAddress: {
      loc: {
        type: String,
      },
      pin: {
        type: Number,
      },
    },
    specialisation: {
      type: String,
    },
    gender: {
      type: String,
    },
    feeDetails: {
      id: {
        type: String,
      },
      date: {
        type: String,
      },
    },
    resetPasswordToken: { type: String, select: false },
    resetPasswordExpire: { type: Date, select: false },
    submitted: { type: Boolean, default: false, select: false },
    isAdmin: { type: Boolean, default: false },
  },
  { timestamps: true }
);

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

userSchema.methods.matchPasswords = async function (password) {
  return await bcrypt.compare(password, this.password);
};

userSchema.methods.getSignedToken = function () {
  return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRE,
  });
};

userSchema.methods.getAdminToken = function () {
  return jwt.sign(
    { id: this._id, isAdmin: this.isAdmin },
    process.env.JWT_ADMIN,
    {
      expiresIn: process.env.JWT_EXPIRE,
    }
  );
};

userSchema.methods.getResetPasswordToken = function () {
  const resetToken = crypto.randomBytes(20).toString("hex");

  this.resetPasswordToken = crypto
    .createHash("sha256")
    .update(resetToken)
    .digest("hex");

  this.resetPasswordExpire = Date.now() + 10 * 60 * 1000;

  return resetToken;
};

const User = mongoose.model("User", userSchema);
module.exports = User;
