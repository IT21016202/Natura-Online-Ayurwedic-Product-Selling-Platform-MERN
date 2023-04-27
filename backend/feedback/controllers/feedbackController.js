const Feedback = require("../models/feedbackModel");
const mongoose = require("mongoose");

//get all feedback details
const getfeedbackDetails = async (req, res) => {
  const feedbackDetails = await Feedback.find({}).sort({ createdAt: -1 });

  res.status(200).json(feedbackDetails);
};

//get a single feedback Detail
const getfeedbackDetail = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such feedback Detail" });
  }

  const feedbackDetail = await Feedback.findById(id);

  if (!feedbackDetail) {
    return res.status(404).json({ error: "No such feedback Detail" });
  }

  res.status(200).json(feedbackDetail);
};

//create a new feedback
const createfeedbackDetail = async (req, res) => {
  const { topic, description } = req.body;

  let emptyFields = [];

  if (!topic) {
    emptyFields.push("topic");
  }
  if (!description) {
    emptyFields.push("description");
  }

  if (emptyFields.length > 0) {
    return res
      .status(400)
      .json({ error: "Please fill in all the fields", emptyFields });
  }

  try {
    const feedbackDetail = await Feedback.create({ topic, description });
    res.status(200).json(feedbackDetail);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//delete a feedback
const deletefeedbackDetail = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such feedback Detail" });
  }

  const feedbackDetail = await Feedback.findOneAndDelete({ _id: id });

  if (!feedbackDetail) {
    return res.status(404).json({ error: "No such feedback Detail" });
  }

  res.status(200).json(feedbackDetail);
};

//update a feedback
const updatefeedbackDetail = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such feedback Detail" });
  }

  const feedbackDetail = await Feedback.findOneAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );

  if (!feedbackDetail) {
    return res.status(404).json({ error: "No such feedback Detail" });
  }

  res.status(200).json(feedbackDetail);
};

module.exports = {
  getfeedbackDetails,
  getfeedbackDetail,
  createfeedbackDetail,
  deletefeedbackDetail,
  updatefeedbackDetail,
};
