import express from "express";
const router = express.Router();

// Dummy posts route
router.get("/", (req, res) => {
  res.send("Posts route is working!");
});

export default router;

