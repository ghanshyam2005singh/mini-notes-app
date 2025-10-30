import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import notesRoutes from "./routes/notesRoutes.js";

const app = express();

app.use(cors());
app.use(bodyParser.json());

// Routes
app.use("/api/notes", notesRoutes);

app.listen(5000, () => console.log("🚀 Server running on http://localhost:5000"));
