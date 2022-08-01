const User = require("../models/User");
const errorResponse = require("../utils/errorResponse");
const sendEmail = require("../utils/sendEmail");
// const pdf = require("html-pdf");
const path = require("path");

const puppeteer = require("puppeteer");

const fs = require("fs-extra");

const hbs = require("handlebars");

exports.createPdf = async (req, res) => {
  // pdf.create(pdfTemplate(req.body), {}).toFile("result.pdf", (err) => {
  //   if (err) {
  //     res.send(Promise.reject());
  //   }

  //   res.send(Promise.resolve());
  // });

  const data = req.body;

  const compile = async function (templateName, data) {
    const filePath = path.join(process.cwd(), "docs", `${templateName}.hbs`);
    const html = await fs.readFile(filePath, "utf8");
    return hbs.compile(html)(data);
  };

  (async function () {
    try {
      const browser = await puppeteer.launch();

      const page = await browser.newPage();

      const content = await compile("template", data);

      await page.setContent(content);

      await page.pdf({
        path: "output.pdf",
        format: "A4",
        printBackground: true,
      });

      console.log("done creating pdf");

      await browser.close();
    } catch (e) {
      console.log(e);
    }
  })();
};

exports.getPdf = async (req, res) => {
  res.sendFile(path.join(__dirname, "..", "output.pdf"));
};
