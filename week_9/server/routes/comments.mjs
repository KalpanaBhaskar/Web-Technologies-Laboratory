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

router.get("/post/:postId", async (req, res) => {
  try {
    const postId = toObjectId(req.params.postId);
    if (!postId) return res.status(400).json({ error: "Invalid post ID" });

    const comments = await getDb()
      .collection("comments")
      .find({ postId })
      .sort({ createdAt: 1 })
      .toArray();

    res.json(comments);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.post("/post/:postId", async (req, res) => {
  try {
    const postId = toObjectId(req.params.postId);
    if (!postId) return res.status(400).json({ error: "Invalid post ID" });

    const post = await getDb().collection("posts").findOne({ _id: postId });
    if (!post) return res.status(404).json({ error: "Post not found" });

    const { author, content, parentId } = req.body;
    if (!content?.trim()) {
      return res.status(400).json({ error: "Comment content is required" });
    }

    if (parentId) {
      const parent = toObjectId(parentId);
      if (!parent) return res.status(400).json({ error: "Invalid parent comment ID" });
      const parentComment = await getDb().collection("comments").findOne({ _id: parent, postId });
      if (!parentComment) return res.status(404).json({ error: "Parent comment not found" });
    }

    const comment = {
      postId,
      author: author?.trim() || "Anonymous",
      content: content.trim(),
      parentId: parentId ? toObjectId(parentId) : null,
      createdAt: new Date(),
    };

    const result = await getDb().collection("comments").insertOne(comment);
    res.status(201).json({ ...comment, _id: result.insertedId });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const id = toObjectId(req.params.id);
    if (!id) return res.status(400).json({ error: "Invalid comment ID" });

    const result = await getDb().collection("comments").deleteOne({ _id: id });
    if (result.deletedCount === 0) return res.status(404).json({ error: "Comment not found" });

    await getDb().collection("comments").deleteMany({ parentId: id });
    res.json({ message: "Comment deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
