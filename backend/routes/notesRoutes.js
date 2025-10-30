import express from "express";
import { getNotes, addNote, deleteNote } from "../controllers/notesController.js";

const router = express.Router();

router.get("/", getNotes);
router.post("/", addNote);
router.delete("/:id", deleteNote);

export default router;
