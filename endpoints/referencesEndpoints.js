const errorHandler = require("../middlewares/errorHandler.js");

// --------------------
//    Notes Endpoints
// --------------------

module.exports = (app, db) => {
  const ReferencesModel = require("./../models/ReferencesModel.js")(db);

  app.get(
    "/api/v1/references/activities",
    errorHandler,
    async (req, res, next) => {
      try {
        let resGet = await ReferencesModel.getActivitiesReferences();

        if (resGet.length === 0) {
          return res
            .status(200)
            .json({ msg: "no data in Database, for the moment" });
        }
        return res.status(200).json(resGet);
      } catch (error) {
        next(error);
      }
    }
  );

  app.get(
    "/api/v1/references/emotions",
    errorHandler,
    async (req, res, next) => {
      try {
        let resGet = await ReferencesModel.getEmotionsReferences();

        if (resGet.length === 0) {
          return res
            .status(200)
            .json({ msg: "no data in Database, for the moment" });
        }
        return res.status(200).json(resGet);
      } catch (error) {
        next(error);
      }
    }
  );

  app.get(
    "/api/v1/references/food_tendency",
    errorHandler,
    async (req, res, next) => {
      try {
        let resGet = await ReferencesModel.getFoodTendencyReferences();

        if (resGet.length === 0) {
          return res
            .status(200)
            .json({ msg: "no data in Database, for the moment" });
        }
        return res.status(200).json(resGet);
      } catch (error) {
        next(error);
      }
    }
  );

  app.get(
    "/api/v1/references/symptoms",
    errorHandler,
    async (req, res, next) => {
      try {
        let resGet = await ReferencesModel.getSymptomsReferences();

        if (resGet.length === 0) {
          return res
            .status(200)
            .json({ msg: "no data in Database, for the moment" });
        }
        return res.status(200).json(resGet);
      } catch (error) {
        next(error);
      }
    }
  );

    app.get(
    "/api/v1/references/all",
    errorHandler,
    async (req, res, next) => {
      try {
        let resGet = await ReferencesModel.getAllReferences();
        return res.status(200).json(resGet);
      } catch (error) {
        next(error);
      }
    }
  );
};
