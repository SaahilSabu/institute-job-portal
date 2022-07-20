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
    userPPUrl: {
      type: String,
    },
    academic: {
      degree: {
        type: String,
      },
      branch: {
        type: String,
      },
      university: {
        type: String,
      },
      completionYear: {
        type: String,
      },
      grade: {
        type: String,
      },
    },
    phdDissertationTitle: {
      type: String,
    },
    phdAwardDate: {
      type: String,
    },
    teachingExp: {
      employer: {
        type: String,
      },
      position: {
        type: String,
      },
      dateOfJoining: {
        type: String,
      },
      dateOfLeaving: {
        type: String,
      },
      payLevel: {
        type: String,
      },
      PayInPayLevel: {
        type: String,
      },
      GP: {
        type: String,
      },
      reasonForLeaving: {
        type: String,
      },
    },
    postPhdExp: {
      type: String,
    },
    profBodyMembership: {
      id: {
        type: Number,
      },
      name: {
        type: String,
      },
    },
    references: {
      name: {
        type: String,
      },
      address: {
        type: String,
      },
      email: {
        type: String,
      },
      phone: {
        type: String,
      },
      designation: {
        type: String,
      },
    },
    publications: {
      totalPapers: {
        type: Number,
      },
      referredJournals: {
        type: Number,
      },
      sciIndexedJournal: {
        type: Number,
      },
      internationalConferences: {
        type: Number,
      },
      nationalConferences: {
        type: Number,
      },
      bookChapters: {
        type: Number,
      },
      sciIndexJournalOutsidePhd: {
        type: Number,
      },
      books: {
        type: Number,
      },
      patents: {
        type: Number,
      },
    },
    researchExp: {
      duration: {
        type: String,
      },
      organisation: {
        type: String,
      },
      area: {
        type: String,
      },
    },
    industrialExp: {
      organisation: {
        type: String,
      },
      designation: {
        type: String,
      },
      period: {
        type: String,
      },
      natureOfWork: {
        type: String,
      },
    },
    administrativeExp: {
      organisation: {
        type: String,
      },
      designation: {
        type: String,
      },
      period: {
        type: String,
      },
      natureOfWork: {
        type: String,
      },
    },
    coursesTaught: {
      title: {
        type: String,
      },
      level: {
        type: String,
      },
      noOfTimes: {
        type: String,
      },
      developedByYou: {
        type: String,
      },
    },
    thesis: {
      bachelorsLvl: {
        type: String,
      },
      mastersLvl: {
        type: String,
      },
      phdCo: {
        type: String,
      },
      phdSingle: {
        type: String,
      },
    },
    sponsoredProjects: {
      period: {
        type: String,
      },
      organisation: {
        type: String,
      },
      title: {
        type: String,
      },
      grantAmount: {
        type: String,
      },
      coInvestigators: {
        type: String,
      },
      status: {
        type: String,
      },
    },
    consultancy: {
      period: {
        type: String,
      },
      organisation: {
        type: String,
      },
      title: {
        type: String,
      },
      grantAmount: {
        type: String,
      },
      coInvestigators: {
        type: String,
      },
      status: {
        type: String,
      },
    },
    refJournal: {
      author: {
        type: String,
      },
      year: {
        type: String,
      },
      title: {
        type: String,
      },
      referenceOfJournal: {
        type: String,
      },
      impactFactor: {
        type: String,
      },
    },
    sciIndexJournal: {
      author: {
        type: String,
      },
      year: {
        type: String,
      },
      title: {
        type: String,
      },
      referenceOfJournal: {
        type: String,
      },
      impactFactor: {
        type: String,
      },
    },
    nationalConferences: {
      author: {
        type: String,
      },
      year: {
        type: String,
      },
      title: {
        type: String,
      },
      nameAndPlace: {
        type: String,
      },
      presentedOrPublished: {
        type: String,
      },
    },
    internationalConferences: {
      author: {
        type: String,
      },
      year: {
        type: String,
      },
      title: {
        type: String,
      },
      nameAndPlace: {
        type: String,
      },
      presentedOrPublished: {
        type: String,
      },
    },
    books: {
      name: {
        type: String,
      },
      year: {
        type: String,
      },
      title: {
        type: String,
      },
      publisher: {
        type: String,
      },
      coAuthor: {
        type: String,
      },
    },
    examsCleared: {
      net: {
        type: String,
      },
      gate: {
        type: String,
      },
      csirOrjrf: {
        type: String,
      },
      other1: {
        type: String,
      },
      other2: {
        type: String,
      },
      other3: {
        type: String,
      },
    },
    patent: {
      filedNational: {
        type: String,
      },
      filedInternational: {
        type: String,
      },
      awardedNational: {
        type: String,
      },
      awardedIntenational: {
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
