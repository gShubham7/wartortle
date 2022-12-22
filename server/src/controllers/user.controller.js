const jwt = require("jsonwebtoken");
const UserModel = require("../models/user.model");
const LectureModel = require("../models/lecture.model");

//profile of the particular user......................
const profile = async (req, res) => {
  const token = req.headers.authorization;

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await UserModel.findById(decoded._id);
    if (!user) {
      return res.status(404).send({ error: "User not found" });
    }
    const posts = await PostModel.find({ author_id: user._id });
    // const likedPosts = await PostModel.find({ likes: decoded._id });
    return res.status(200).send({
      id: user._id,
      name: user.name,
      email: user.email,
      posts: posts,
      // likedPosts: likedPosts,
    });
  } catch (err) {
    return res.status(401).send({ error: "Invalid token" });
  }
};

//all lectures displayed........
const alllectures = async (req, res) => {
  try {
    const lectures = await LectureModel.find();
    return res.status(200).send(lectures);
  } catch (err) {
    return res.status(401).send({ error: "Invalid token" });
  }
};

//search lectures........
const searchLecture = async (req, res) => {
  const { std, sub } = req.params;
  try {
    if (!std && !sub) {
      const lectures = await LectureModel.find();
      return res.status(200).send(lectures);
    } else if (!sub) {
      const lectures = await LectureModel.find({
        "snippet.title": { $regex: std },
      });
      return res.status(200).send(lectures);
    } else if (!std) {
      const lectures = await LectureModel.find({
        "snippet.title": { $regex: sub },
      });
      return res.status(200).send(lectures);
    }
    console.log(std, sub);
    const lectures = await LectureModel.find({
      "snippet.title": { $regex: `${std} ${sub}` },
    });
    res.status(200).send(lectures);
  } catch (err) {
    return res.status(401).send({ error: "Invalid token" });
  }
};

const getTeachers = async (req, res) => {
  try {
    const teachers = await UserModel.find({ role: "Teacher" });
    return res.status(200).send({ teachers });
  } catch (err) {
    return res.status(401).send({ error: err.message });
  }
};

//admin routes.........................

module.exports = {
  profile,
  alllectures,
  searchLecture,
  getTeachers,
};
