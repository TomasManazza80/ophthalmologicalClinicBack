// routes/auth.routes.js
const express = require("express");
const router = express.Router();
const auth = require("../validation/AllValidation");

router.post("/decode-token", async (req, res) => {
  const { token } = req.body;
  
  try {
    const decoded = await auth.decodeToken(token);
    if (decoded) {
      res.json({ role: decoded.role });
    } else {
      res.status(401).json({ message: "Invalid token" });
    }
    console.log(
      
      "Decoded token######################:",
      decoded
    );
  } catch (error) {
    console.error("Error decoding token:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

module.exports = router;
