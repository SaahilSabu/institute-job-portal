const User = require("../models/User");
const errorResponse = require("../utils/errorResponse");
const sendEmail = require("../utils/sendEmail");
const path = require("path");

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
    particularsOfPhd,
    teachingExp,
    postPhdExp,
    profBodyMembership,
    references,
    publications,
    publicationPaperDetails,
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
    workshopsOrganised,
    educationProgConducted,
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
      particularsOfPhd,
      teachingExp,
      postPhdExp,
      profBodyMembership,
      references,
      publications,
      publicationPaperDetails,
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
      workshopsOrganised,
      educationProgConducted,
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
    <!DOCTYPE HTML PUBLIC "-//W3C//DTD XHTML 1.0 Transitional //EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
    <html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
    <head>
    <!--[if gte mso 9]>
    <xml>
      <o:OfficeDocumentSettings>
        <o:AllowPNG/>
        <o:PixelsPerInch>96</o:PixelsPerInch>
      </o:OfficeDocumentSettings>
    </xml>
    <![endif]-->
      <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta name="x-apple-disable-message-reformatting">
      <!--[if !mso]><!--><meta http-equiv="X-UA-Compatible" content="IE=edge"><!--<![endif]-->
      <title></title>
      
        <style type="text/css">
          @media only screen and (min-width: 620px) {
      .u-row {
        width: 600px !important;
      }
      .u-row .u-col {
        vertical-align: top;
      }
    
      .u-row .u-col-33p33 {
        width: 199.98px !important;
      }
    
      .u-row .u-col-100 {
        width: 600px !important;
      }
    
    }
    
    @media (max-width: 620px) {
      .u-row-container {
        max-width: 100% !important;
        padding-left: 0px !important;
        padding-right: 0px !important;
      }
      .u-row .u-col {
        min-width: 320px !important;
        max-width: 100% !important;
        display: block !important;
      }
      .u-row {
        width: calc(100% - 40px) !important;
      }
      .u-col {
        width: 100% !important;
      }
      .u-col > div {
        margin: 0 auto;
      }
    }
    body {
      margin: 0;
      padding: 0;
    }
    
    table,
    tr,
    td {
      vertical-align: top;
      border-collapse: collapse;
    }
    
    p {
      margin: 0;
    }
    
    .ie-container table,
    .mso-container table {
      table-layout: fixed;
    }
    
    * {
      line-height: inherit;
    }
    
    a[x-apple-data-detectors='true'] {
      color: inherit !important;
      text-decoration: none !important;
    }
    
    table, td { color: #000000; } a { color: #0000ee; text-decoration: underline; } @media (max-width: 480px) { #u_content_heading_3 .v-font-size { font-size: 23px !important; } #u_content_image_1 .v-src-width { width: auto !important; } #u_content_image_1 .v-src-max-width { max-width: 100% !important; } #u_content_text_1 .v-container-padding-padding { padding: 60px 15px 20px !important; } #u_content_text_1 .v-text-align { text-align: center !important; } #u_content_button_1 .v-size-width { width: 45% !important; } #u_row_3 .v-row-background-image--inner { background-position: center top !important; background-repeat: no-repeat !important; } #u_row_3 .v-row-background-image--outer { background-image: url('images/image-4.jpeg') !important; background-position: center top !important; background-repeat: no-repeat !important; } #u_row_3.v-row-background-image--outer { background-image: url('images/image-4.jpeg') !important; background-position: center top !important; background-repeat: no-repeat !important; } #u_content_image_3 .v-container-padding-padding { padding: 30px 10px 0px !important; } #u_content_image_3 .v-src-width { width: auto !important; } #u_content_image_3 .v-src-max-width { max-width: 35% !important; } #u_content_social_2 .v-container-padding-padding { padding: 15px 10px 10px !important; } #u_content_heading_1 .v-container-padding-padding { padding: 15px 10px 0px !important; } #u_content_text_2 .v-container-padding-padding { padding: 5px 80px 0px !important; } #u_content_heading_2 .v-container-padding-padding { padding: 25px 10px 0px !important; } #u_content_text_3 .v-container-padding-padding { padding: 5px 10px 30px !important; } }
        </style>
      
      
    
    <!--[if !mso]><!--><link href="https://fonts.googleapis.com/css?family=Playfair+Display:400,700&display=swap" rel="stylesheet" type="text/css"><link href="https://fonts.googleapis.com/css?family=Raleway:400,700&display=swap" rel="stylesheet" type="text/css"><!--<![endif]-->
    
    </head>
    
    <body class="clean-body u_body" style="margin: 0;padding: 0;-webkit-text-size-adjust: 100%;background-color: #deeafa;color: #000000">
      <!--[if IE]><div class="ie-container"><![endif]-->
      <!--[if mso]><div class="mso-container"><![endif]-->
      <table style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;min-width: 320px;Margin: 0 auto;background-color: #deeafa;width:100%" cellpadding="0" cellspacing="0">
      <tbody>
      <tr style="vertical-align: top">
        <td style="word-break: break-word;border-collapse: collapse !important;vertical-align: top">
        <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td align="center" style="background-color: #deeafa;"><![endif]-->
        
    
    <div class="u-row-container v-row-background-image--outer" style="padding: 0px;background-color: transparent">
      <div class="u-row" style="Margin: 0 auto;min-width: 320px;max-width: 600px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: transparent;">
        <div class="v-row-background-image--inner" style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-color: transparent;">
          <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td class="v-row-background-image--outer" style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr class="v-row-background-image--inner" style="background-color: transparent;"><![endif]-->
          
    <!--[if (mso)|(IE)]><td align="center" width="600" style="width: 600px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]-->
    <div class="u-col u-col-100" style="max-width: 320px;min-width: 600px;display: table-cell;vertical-align: top;">
      <div style="height: 100%;width: 100% !important;">
      <!--[if (!mso)&(!IE)]><!--><div style="padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;"><!--<![endif]-->
      
    <table id="u_content_heading_3" style="font-family:'Raleway',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
      <tbody>
        <tr>
          <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:35px 10px 0px;font-family:'Raleway',sans-serif;" align="left">
            
    
          </td>
        </tr>
      </tbody>
    </table>
    
    <table id="u_content_image_1" style="font-family:'Raleway',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
      <tbody>
        <tr>
          <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:0px;font-family:'Raleway',sans-serif;" align="left">
            
    <table width="100%" cellpadding="0" cellspacing="0" border="0">
      <tr>
        <td class="v-text-align" style="padding-right: 0px;padding-left: 0px;" align="center">
          
          <img align="center" border="0" src="http://www.iiitm.ac.in/templates/shaper_educon/images/presets/preset1/logo@2x.png" alt="Illustration" title="Illustration" style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: inline-block !important;border: none;height: auto;float: none;width: 76%;max-width: 456px;" width="456" class="v-src-width v-src-max-width"/>
          
        </td>
      </tr>
      
    </table>
    
          </td>
        </tr>
      </tbody>
    </table>
    <h1 class="v-text-align v-font-size" style="margin: 0px; line-height: 130%; text-align: center; word-wrap: break-word; font-weight: normal; font-family: 'Playfair Display',serif; font-size: 40px;">
      Your application has been<br /><strong>Recieved</strong>
    </h1>
    
      <!--[if (!mso)&(!IE)]><!--></div><!--<![endif]-->
      </div>
    </div>
    <!--[if (mso)|(IE)]></td><![endif]-->
          <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
        </div>
      </div>
    </div>
    
    
    
    <div class="u-row-container v-row-background-image--outer" style="padding: 0px;background-color: transparent">
      <div class="u-row" style="Margin: 0 auto;min-width: 320px;max-width: 600px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: transparent;">
        <div class="v-row-background-image--inner" style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-color: transparent;">
          <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td class="v-row-background-image--outer" style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr class="v-row-background-image--inner" style="background-color: transparent;"><![endif]-->
          
    <!--[if (mso)|(IE)]><td align="center" width="600" style="width: 600px;padding: 0px 0px 60px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;" valign="top"><![endif]-->
    <div class="u-col u-col-100" style="max-width: 320px;min-width: 600px;display: table-cell;vertical-align: top;">
      <div style="height: 100%;width: 100% !important;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;">
      <!--[if (!mso)&(!IE)]><!--><div style="padding: 0px 0px 60px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;"><!--<![endif]-->
      
    <table id="u_content_text_1" style="font-family:'Raleway',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
      <tbody>
        <tr>
          <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:60px 30px 20px;font-family:'Raleway',sans-serif;" align="left">
            <h1 class="v-text-align v-font-size" style="margin: 0px; line-height: 130%; text-align: center; word-wrap: break-word; font-weight: normal; font-family: 'Playfair Display',serif; font-size: 40px;">
              A copy of your application is attached to this mail
            </h1>
    
          </td>
        </tr>
      </tbody>
    </table>
    </body>
    
    </html>
    

    `;

    try {
      await sendEmail({
        to: user.email,
        subject: "Form Submitted",
        text: message,
        attachments: [
          {
            filename: "output.pdf",
            path: path.join(__dirname, "..", "output.pdf"),
            contentType: "application/pdf",
          },
        ],
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
