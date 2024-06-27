const router = require("express").Router();
const apiRoutes = require("./api");

// Middleware for logging requests
router.use((req, res, next) => {
  console.log(`${req.method} request for '${req.url}'`);
  next();
});

// Use the API routes for any paths starting with /api
router.use("/api", (req, res, next) => {
  console.log("Handling /api route");
  next();
}, apiRoutes);

// Middleware for handling 404 errors
router.use((req, res) => {
  console.log("Handling 404 error for", req.url);
  res.status(404).send("<h1>404 Error</h1>");
});

module.exports = router;
