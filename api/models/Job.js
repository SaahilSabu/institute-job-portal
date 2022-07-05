const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please specify a job name"],
    },
    desc: {
      type: String,
      required: [true, "Please specify a job description"],
    },
    dept: {
      type: String,
      required: [true, "Please specify the job department"],
    },
    role: {
      type: String,
      required: [
        true,
        "Please specify what role the job gives (eg: assistant prof, prof etc)",
      ],
    },
    validity: {
      type: String,
      required: [
        true,
        "Please specify what validity the job provides (eg : permanent or temporary)",
      ],
    },
  },
  { timestamps: true }
);

const Job = mongoose.model("Job", jobSchema);
module.exports = Job;
