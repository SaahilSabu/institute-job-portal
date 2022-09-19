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
      accUsed: {
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
      division: {
        type: String,
      },
    },
    particularsOfPhd: {
      phdDissertationTitle: {
        type: String,
      },
      enrollmentDate: {
        type: String,
      },
      registrationDate: {
        type: String,
      },
      completionDate: {
        type: String,
      },
      supervisors: {
        type: String,
      },
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
      natureOfPosition: {
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
      area: {
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
      membershipNo: { type: String },
      membershipType: { type: String },
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
    publicationPaperDetails: {
      author: {
        type: String,
      },
      year: {
        type: String,
      },
      title: {
        type: String,
      },
      completeRefOfJournal: {
        type: String,
      },
      impactFactor: {
        type: String,
      },
    },
    publications: {
      totalPapers: {
        type: Number,
      },
      nonSciIndexedJournal: {
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
    },
    researchExp: {
      durationFrom: {
        type: String,
      },
      durationTo: {
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
      periodFrom: {
        type: String,
      },
      periodTo: {
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
      periodFrom: {
        type: String,
      },
      periodTo: {
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
    educationProgConducted: {
      title: {
        type: String,
      },
      periodFrom: {
        type: String,
      },
      periodTo: {
        type: String,
      },
      organisation: {
        type: String,
      },
      totalExpenditure: {
        type: String,
      },
      venue: {
        type: String,
      },
      noOfCandidates: {
        type: String,
      },
    },
    workshopsOrganised: {
      title: {
        type: String,
      },
      periodFrom: {
        type: String,
      },
      periodTo: {
        type: String,
      },
      organisation: {
        type: String,
      },
      totalExpenditure: {
        type: String,
      },
      venue: {
        type: String,
      },
      noOfCandidates: {
        type: String,
      },
    },
    punishmentClg: {
      type: String,
    },
    punishmentCourt: {
      type: String,
    },
    mentalHealth: {
      type: String,
    },
    courtCases: {
      type: String,
    },
    appendix1: {
      name: {
        type: String,
      },
      url: {
        type: String,
      },
    },
    appendix2: {
      name: {
        type: String,
      },
      url: {
        type: String,
      },
    },
    appendix3: {
      name: {
        type: String,
      },
      url: {
        type: String,
      },
    },
    appendix4: {
      name: {
        type: String,
      },
      url: {
        type: String,
      },
    },
    appendix5: {
      name: {
        type: String,
      },
      url: {
        type: String,
      },
    },
    appendix6: {
      name: {
        type: String,
      },
      url: {
        type: String,
      },
    },
    appendix7: {
      name: {
        type: String,
      },
      url: {
        type: String,
      },
    },
    appendix8: {
      name: {
        type: String,
      },
      url: {
        type: String,
      },
    },
    appendix9: {
      name: {
        type: String,
      },
      url: {
        type: String,
      },
    },
    appendix10: {
      name: {
        type: String,
      },
      url: {
        type: String,
      },
    },
    appendix11: {
      name: {
        type: String,
      },
      url: {
        type: String,
      },
    },
    appendix12: {
      name: {
        type: String,
      },
      url: {
        type: String,
      },
    },
    appendix13: {
      name: {
        type: String,
      },
      url: {
        type: String,
      },
    },
    appendix14: {
      name: {
        type: String,
      },
      url: {
        type: String,
      },
    },
    appendix15: {
      name: {
        type: String,
      },
      url: {
        type: String,
      },
    },
    appendix16: {
      name: {
        type: String,
      },
      url: {
        type: String,
      },
    },
    appendix17: {
      name: {
        type: String,
      },
      url: {
        type: String,
      },
    },
    appendix18: {
      name: {
        type: String,
      },
      url: {
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
