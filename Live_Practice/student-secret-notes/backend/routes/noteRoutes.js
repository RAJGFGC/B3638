const express = require("express");
const Note = require("../models/Note");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router(); // Base route: /api/notes

router.get("/", authMiddleware, async (req, res) => {
  try {
    const notes = await Note.find({ userId: req.user.id }).sort({
      createdAt: -1,
    });
    res.json(notes);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching notes", error: error.message });
  }
});

router.post("/", authMiddleware, async (req, res) => {
  try {
    const { text } = req.body;
    const newNote = new Note({
      text,
      userId: req.user.id,
    });
    await newNote.save();
    res.status(201).json(newNote);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error creating note", error: error.message });
  }
});

module.exports = router;
