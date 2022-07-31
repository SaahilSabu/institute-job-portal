const User = require("../models/User");
const errorResponse = require("../utils/errorResponse");
const sendEmail = require("../utils/sendEmail");
const pdf = require("html-pdf");
const pdfTemplate = require("../docs/index");
const path = require("path");

exports.createPdf = async (req, res) => {
  pdf.create(pdfTemplate(req.body), {}).toFile("result.pdf", (err) => {
    if (err) {
      res.send(Promise.reject());
    }

    res.send(Promise.resolve());
  });
};

exports.getPdf = async (req, res) => {
  res.sendFile(path.join(__dirname, "..", "result.pdf"));
};
