import express from "express";

const router = express.Router();

// Dummy auth route for testing
router.get("/", (req, res) => {
  res.send("Auth route is working!");
});

export default router;
