/*===========================================================================
    Express Server and Dependency Setup
===========================================================================*/
const express = require("express");
const app = express();
const cors = require("cors");
const PORT = 8000;
const DB = "trella_db";

/*===========================================================================
    Middleware 
===========================================================================*/
app.use(express.json(), express.urlencoded({ extended: true }), cors());

/*===========================================================================
    DB Connection 
===========================================================================*/
// This will fire our mongoose.connect statement to initialize our db connection
require("./config/mongoose.config")(DB);

/*===========================================================================
    Import Server Routes
===========================================================================*/
// This will connect out routes
require('./routes/Item.routes')(app);
require('./routes/List.routes')(app);

// Test to see if server is running upon setup...
app.listen(PORT, () => console.log("The server is all fired up on port 8000"));
