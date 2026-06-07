import express from "express";
import noteRoutes from "./routes/note.routes.js";

const app = express();  //Creates Express application.

app.use(express.json());   //Express converts it into: req.body

app.use("/api/notes", noteRoutes);

export default app;