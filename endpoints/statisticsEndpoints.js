const errorHandler = require("../middlewares/errorHandler.js");

// ------------------------
//    statistics Endpoints
// ------------------------

module.exports = (app, db) => {
  const StatisticsModel = require("./../models/StatisticsModel.js")(db);

  app.get(
    "/api/v1/statistics/all_data_by_cicle/:cycle_id",
    errorHandler,
    async (req, res, next) => {
      try {
        let resGetAllData = await StatisticsModel.getDataByCycleId(
          parseInt(req.params.cycle_id)
        );

        return res.status(200).json({
          msg: "Here you have all data related to cycle_id",
          received_payload: parseInt(req.params.cycle_id),
          cycle_data: resGetAllData,
        });
      } catch (error) {
        next(error);
      }
    }
  );

};
