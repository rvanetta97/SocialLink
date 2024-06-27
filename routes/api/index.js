const router = require("express").Router();
const userRoute = require("./userRoute");
const thoughtRoute = require("./thoughtRoute");

// Middleware for logging requests
router.use((req, res, next) => {
  console.log(`${req.method} request for '${req.url}'`);
  next();
});

// Use the userRoute for paths starting with /users
router.use("/users", (req, res, next) => {
  console.log("Handling /users route");
  next();
}, userRoute);

// Use the thoughtRoute for paths starting with /thoughts
router.use("/thoughts", (req, res, next) => {
  console.log("Handling /thoughts route");
  next();
}, thoughtRoute);

module.exports = router;
