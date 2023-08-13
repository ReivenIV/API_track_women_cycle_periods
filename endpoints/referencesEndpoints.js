const errorHandler = require("../middlewares/errorHandler.js");

// --------------------
//    Notes Endpoints
// --------------------

module.exports = (app, db) => {
  const ReferencesModel = require("./../models/ReferencesModel.js")(db);

  app.get(
    "/api/v1/activity_reference/all_data",
    errorHandler,
    async (req, res, next) => {
      try {
        let responseGet = await ReferencesModel.getAllActivitiesReferences();

        if (responseGet[0].length === 0) {
          return res
            .status(200)
            .json({ msg: "no data in Database, for the moment" });
        }
        return res.status(200).json(responseGet[0]);
      } catch (error) {
        next(error);
      }
    }
  );

  app.get(
    "/api/v1/emotions_reference/all_data",
    errorHandler,
    async (req, res, next) => {
      try {
        let responseGet = await ReferencesModel.getAllDataEmotionsReferences();

        if (responseGet[0].length === 0) {
          return res
            .status(200)
            .json({ msg: "no data in Database, for the moment" });
        }
        return res.status(200).json(responseGet[0]);
      } catch (error) {
        next(error);
      }
    }
  );
};
