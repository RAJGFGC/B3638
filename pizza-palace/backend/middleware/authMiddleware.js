const jwt = require("jsonwebtoken");
const User = require("../models/User");

async function authMiddleware(req, res, next) {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res
        .status(401)
        .json({ message: "Authorization header missing or malformed" });
    }

    const token = authHeader.split(" ")[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // const user = await User.findById(decoded.userId).select("-password");
    // if (!user) {
    //   return res.status(401).json({ message: "User not found" });
    // }
    console.log("Decoded token:", decoded);
    req.user = decoded.user; // Attach user to request object
    next();
  } catch (error) {
    console.error("Authentication error:", error);
    res.status(401).json({ message: "Invalid token" });
  }
}

module.exports = authMiddleware;
