const express = require("express");
const db = require("./config/connection");
const routes = require("./routes");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);

// Check if database is connected and handle errors
db.on("error", console.error.bind(console, "MongoDB connection error:"));

// Once the database is open, start the server
db.once("open", () => {
  app.listen(PORT, () => {
    console.log(`The server on port ${PORT} is like a therapist. Ready to listen, not to judge.`);
  });
});

module.exports = app;
