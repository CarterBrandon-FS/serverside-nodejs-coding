const express = require("express");
const router = require("./routes");
const app = express();

app.use(express.json());
// localhost: 3000/
app.get("/", (req, res) => {
  res.status(200).json({
    message: "Get - root",
    metadata: {
      hostname: req.hostname,
      method: req.method,
    },
  });
});

// Actuator - health check
app.get("/actuator", (req, res) => {
  res.status(200).send("Service is up");
});

// Mont the API router
app.use("/api", router);

module.exports = app;
