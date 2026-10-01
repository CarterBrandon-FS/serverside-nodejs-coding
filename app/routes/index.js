const express = require("express");
const router = express.Router();

// GET /api
router.get("/", (req, res) => {
  res.status(200).json({
    message: "GET - api",
    metadata: { hostname: req.hostname, method: req.method },
  });
});

// GET /api/:bob
router.get("/:bob", (req, res) => {
  const { bob } = req.params;
  res.status(200).json({
    message: "GET to /api/:bob",
    bob,
    metadata: { hostname: req.hostname, method: req.method },
  });
});

// POST /api
router.post("/", (req, res) => {
  const { data } = req.body;
  res.status(200).json({
    message: "POST to /api",
    data,
    metadata: { hostname: req.hostname, method: req.method },
  });
});

module.exports = router;
