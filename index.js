const express = require("express");
const { createPool } = require("mysql2/promise");
require("dotenv").config();
const fileUpload = require("express-fileupload");

const app = express();
const cors = require("cors");
app.use(cors());

app.use(
  fileUpload({
    createParentPath: true,
  })
);

// Parse les Url
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static(__dirname + "/public"));

const PORT = process.env.PORT;

// Import endpoints
const cyclesEndpoints = require("./endpoints/cyclesEndpoints.js");
const temperatureEndpoints = require("./endpoints/temperatureEndpoints.js");
const notesEndpoints = require("./endpoints/notesEndpoints.js");
const cervixEndpoints = require("./endpoints/cervixEndpoints.js");
const emotionsEndpoints = require("./endpoints/emotionsEndpoints.js");
const activitiesEndpoints = require("./endpoints/activitiesEndpoints.js");
const referencesEndpoints = require("./endpoints/referencesEndpoints.js");
const statisticsEndpoints = require("./endpoints/statisticsEndpoints.js");
const medicalAppointmentsEndpoints = require("./endpoints/medicalAppointmentsEndpoints.js");
const sleepEndpoints = require("./endpoints/sleepEndpoints.js");
const userEndpoints = require("./endpoints/userEndpoints.js");
const weightEndpoints = require("./endpoints/weightEndpoints.js");
const foodTendencyEndpoints = require("./endpoints/foodTendencyEndpoints.js");
const symptomsEndpoints = require("./endpoints/symptomsEndpoints.js");

(async () => {
  try {
    const db = await createPool({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      port: process.env.DB_PORT,
    });

    cyclesEndpoints(app, db);
    temperatureEndpoints(app, db);
    notesEndpoints(app, db);
    cervixEndpoints(app, db);
    emotionsEndpoints(app, db);
    activitiesEndpoints(app, db);
    referencesEndpoints(app, db);
    statisticsEndpoints(app, db);
    medicalAppointmentsEndpoints(app, db);
    sleepEndpoints(app, db);
    userEndpoints(app, db);
    weightEndpoints(app, db);
    foodTendencyEndpoints(app, db);
    symptomsEndpoints(app, db);

    app.listen(PORT, () => {
      console.log(`Listening on PORT: ${PORT}`);
    });
  } catch (error) {
    console.error("Error creating database pool:", error);
  }
})();
