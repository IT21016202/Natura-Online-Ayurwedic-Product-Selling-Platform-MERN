const express = require("express");
const {
  createfeedbackDetail,
  getfeedbackDetails,
  getfeedbackDetail,
  deletefeedbackDetail,
  updatefeedbackDetail,
} = require("../controllers/feedbackController");

const router = express.Router();

//GET all feedbacks
router.get("/", getfeedbackDetails);

//GET a single feedbacks
router.get("/:id", getfeedbackDetail);

//POST a new feedback
router.post("/add-feedback", createfeedbackDetail);

//DELETE a new feedback
router.delete("/:id", deletefeedbackDetail);

//UPDATE a new feedback
router.patch("/:id", updatefeedbackDetail);

module.exports = router;
