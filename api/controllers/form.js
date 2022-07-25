const User = require("../models/User");
const errorResponse = require("../utils/errorResponse");
const sendEmail = require("../utils/sendEmail");

exports.addFormInfo = async (req, res, next) => {
  const {
    adNo,
    post,
    aadhaarNo,
    discipline,
    fname,
    mname,
    lname,
    fatherName,
    dob,
    age,
    category,
    phno,
    secPhNo,
    email,
    secEmail,
    maritalStatus,
    nationality,
    address,
    secAddress,
    specialisation,
    gender,
    feeDetails,
    userPPUrl,
    academic,
    phdDissertationTitle,
    phdAwardDate,
    teachingExp,
    postPhdExp,
    profBodyMembership,
    references,
    publications,
    researchExp,
    industrialExp,
    administrativeExp,
    coursesTaught,
    thesis,
    sponsoredProjects,
    consultancy,
    refJournal,
    sciIndexJournal,
    nationalConferences,
    internationalConferences,
    books,
    examsCleared,
    patent,
    appendix1,
    appendix2,
    appendix3,
    appendix4,
    appendix5,
    appendix6,
    appendix7,
    appendix8,
    appendix9,
    appendix10,
    appendix11,
    appendix12,
    appendix13,
    appendix14,
    appendix15,
    appendix16,
    appendix17,
    appendix18,
    punishmentClg,
    punishmentCourt,
    mentalHealth,
    courtCases,
  } = req.body;
  const id = req.params.id;

  try {
    const user = await User.findById({ _id: id });

    await user.updateOne({
      adNo,
      post,
      aadhaarNo,
      discipline,
      fname,
      mname,
      lname,
      fatherName,
      dob,
      age,
      category,
      phno,
      secPhNo,
      email,
      secEmail,
      maritalStatus,
      nationality,
      address,
      secAddress,
      specialisation,
      gender,
      feeDetails,
      userPPUrl,
      academic,
      phdDissertationTitle,
      phdAwardDate,
      teachingExp,
      postPhdExp,
      profBodyMembership,
      references,
      publications,
      researchExp,
      industrialExp,
      administrativeExp,
      coursesTaught,
      thesis,
      sponsoredProjects,
      consultancy,
      refJournal,
      sciIndexJournal,
      nationalConferences,
      internationalConferences,
      books,
      examsCleared,
      patent,
      appendix1,
      appendix2,
      appendix3,
      appendix4,
      appendix5,
      appendix6,
      appendix7,
      appendix8,
      appendix9,
      appendix10,
      appendix11,
      appendix12,
      appendix13,
      appendix14,
      appendix15,
      appendix16,
      appendix17,
      appendix18,
      punishmentClg,
      punishmentCourt,
      mentalHealth,
      courtCases,
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
      <p>here is a summary of the submitted form:</p>
      <div><p>Adno</p><p>${user.adNo}</p></div>
      <div><p>post applied</p><p>${user.post}</p></div>
      <div><p>discipline</p><p>${user.discipline}</p></div>
      <div><p>name</p><p>${user.fname} ${user.mname} ${user.lname}</p></div>
      <div><p>dob</p><p>${user.dob}</p></div>
      <div><p>category</p><p>${user.category}</p></div>
      <div><p>phone number</p><p>${user.phno}</p></div>
      <div><p>email</p><p>${user.email}</p></div>
      <div><p>marital status</p><p>${user.maritalStatus}</p></div>
      <div><p>address</p><p>${user.address.loc}</p><p>${user.address.pin}</p></div>
      <div><p>academic</p><p>${user.academic}</p></div>
      <div><p>teaching experience</p><p>${user.teachingExp}</p></div>
      <div><p>industrial experience</p><p>${user.industrialExp}</p></div>
      <div><p>consultancy</p><p>${user.consultancy}</p></div>
      <div><p>thesis supervised</p><p>${user.thesis}</p></div>
      <div><p>sponsored projects</p><p>${user.sponsoredProjects}</p></div>
      <div><p>publications</p><p>${user.publications}</p></div>
      <div><p>patent</p><p>${user.patent}</p></div>

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
