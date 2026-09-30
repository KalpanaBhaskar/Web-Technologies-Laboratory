import express from "express";
import cors from "cors";
import { loadEnvironment } from "./loadEnvironment.mjs";
import { connectToDatabase } from "./db/conn.mjs";
import postsRouter from "./routes/posts.mjs";
import commentsRouter from "./routes/comments.mjs";

loadEnvironment();

const app = express();
const PORT = process.env.PORT || 5050;

app.use(cors());
app.use(express.json({ limit: "2mb" }));

app.get("/", (_req, res) => {
  res.json({ message: "Blog Post Management API", version: "1.0.0" });
});

app.use("/posts", postsRouter);
app.use("/comments", commentsRouter);

app.use((_req, res) => {
  res.status(404).json({ error: "Route not found" });
});

async function start() {
  try {
    await connectToDatabase();
    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  } catch (err) {
    console.error("Failed to start server:", err.message);
    process.exit(1);
  }
}

start();
