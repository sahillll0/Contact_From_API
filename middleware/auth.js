import jwt from "jsonwebtoken";

export const authMiddleware = (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(" ")[1]; // Bearer TOKEN

    if (!token) {
      return res.status(401).json({ message: "No token provided, authorization denied" });
    }

    console.log("Token received:", token);
    console.log("JWT_SECRET:", process.env.JWT_SECRET);
    
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // Add user info to request
    next();
  } catch (error) {
    console.log("Token verification error:", error.message);
    res.status(401).json({ message: "Invalid token, authorization denied", error: error.message });
  }
};
