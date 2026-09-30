import { Router } from "express";
import { ObjectId } from "mongodb";
import { getDb } from "../db/conn.mjs";

const router = Router();

function toObjectId(id) {
  try {
    return new ObjectId(id);
  } catch {
    return null;
  }
}

router.get("/", async (_req, res) => {
  try {
    const posts = await getDb()
      .collection("posts")
      .find({})
      .sort({ createdAt: -1 })
      .toArray();
    res.json(posts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const id = toObjectId(req.params.id);
    if (!id) return res.status(400).json({ error: "Invalid post ID" });

    const post = await getDb().collection("posts").findOne({ _id: id });
    if (!post) return res.status(404).json({ error: "Post not found" });
    res.json(post);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.post("/", async (req, res) => {
  try {
    const { title, content, author, tags, excerpt } = req.body;
    if (!title?.trim() || !content?.trim()) {
      return res.status(400).json({ error: "Title and content are required" });
    }

    const now = new Date();
    const post = {
      title: title.trim(),
      content: content.trim(),
      author: author?.trim() || "Anonymous",
      tags: Array.isArray(tags) ? tags.filter(Boolean) : [],
      excerpt: excerpt?.trim() || content.trim().slice(0, 160),
      createdAt: now,
      updatedAt: now,
    };

    const result = await getDb().collection("posts").insertOne(post);
    res.status(201).json({ ...post, _id: result.insertedId });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.patch("/:id", async (req, res) => {
  try {
    const id = toObjectId(req.params.id);
    if (!id) return res.status(400).json({ error: "Invalid post ID" });

    const { title, content, author, tags, excerpt } = req.body;
    const updates = { updatedAt: new Date() };

    if (title !== undefined) updates.title = title.trim();
    if (content !== undefined) updates.content = content.trim();
    if (author !== undefined) updates.author = author.trim();
    if (tags !== undefined) updates.tags = Array.isArray(tags) ? tags.filter(Boolean) : [];
    if (excerpt !== undefined) updates.excerpt = excerpt.trim();

    const result = await getDb()
      .collection("posts")
      .findOneAndUpdate({ _id: id }, { $set: updates }, { returnDocument: "after" });

    if (!result) return res.status(404).json({ error: "Post not found" });
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const id = toObjectId(req.params.id);
    if (!id) return res.status(400).json({ error: "Invalid post ID" });

    const result = await getDb().collection("posts").deleteOne({ _id: id });
    if (result.deletedCount === 0) return res.status(404).json({ error: "Post not found" });

    await getDb().collection("comments").deleteMany({ postId: id });
    res.json({ message: "Post deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
