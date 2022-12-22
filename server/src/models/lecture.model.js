const mongoose = require("mongoose");

const LectureSchema = new mongoose.Schema({
  kind: {
    type: String,
  },
  etag: {
    type: String,
  },
  snippet: {
    type: Object,
  },
});

const LectureModel = mongoose.model("lecture", LectureSchema);

module.exports = LectureModel;
