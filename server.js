const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const passport = require("passport");
const session = require("express-session");

// DATABASE Configuration
const db = require("./models");
// Express Router Configuration
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/barbook");

// PASSPORT Configuration
app.use(session({ secret: "test", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

//Flash
app.use(flash());

//Require passport strategies
require("./passport/passport")(passport, db.User);

// Add routes, both API and view
app.use(routes);

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});