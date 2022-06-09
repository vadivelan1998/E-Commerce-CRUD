const express = require("express");
const User = require("../models/users.model");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const user = await User.find().lean().exec();
    return res.status(200).send({ user, status: true });
  } catch (error) {
    return res.status(400).send({ error: error.message, status: false });
  }
});

router.post("/", async (req, res) => {
  try {
    const user = await User.create(req.body);
    return res
      .status(200)
      .send({ user, status: true, message: "data added successfully" });
  } catch (error) {
    return res.status(400).send({ error: error.message, status: false });
  }
});

module.exports();
