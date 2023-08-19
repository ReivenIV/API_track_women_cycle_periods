const errorHandler = require("../middlewares/errorHandler.js");

// ---------------------------
//    Temperature Endpoints
// ---------------------------

module.exports = (app, db) => {
  const TemperatureModel = require("./../models/TemperatureModel.js")(db);

  app.post("/api/v1/temperature/add", errorHandler, async (req, res, next) => {
    try {
      let resPost = await TemperatureModel.add(req.body);

      if (resPost.affectedRows === 0) {
        res.status(400).json({
          msg: "user not updated",
          affected_rows: resPost.affectedRows,
        });
      }

      return res.status(200).json({
        id: resPost.insertId,
        msg: "information added to DB",
        affected_rows: resPost.affectedRows,
      });
    } catch (error) {
      next(error);
    }
  });

  app.get(
    "/api/v1/temperature/all_data",
    errorHandler,
    async (req, res, next) => {
      try {
        let responseGet = await TemperatureModel.getAllData();

        if (responseGet[0].length === 0) {
          return res.status(200).json({ msg: "User doesn't have data" });
        }
        return res.status(200).json(responseGet[0]);
      } catch (error) {
        next(error);
      }
    }
  );

  app.put(
    "/api/v1/temperature/update/:temperature_id",
    errorHandler,
    async (req, res, next) => {
      try {
        let resOldData = await TemperatureModel.getById(
          parseInt(req.params.temperature_id)
        );

        if (resOldData.length === 0) {
          return res.status(400).json({
            received_temperature_id: parseInt(req.params.temperature_id),
            msg: "Data not founded in the Database check your payload and try again.",
          });
        }

        let resPut = await TemperatureModel.updateById(
          req.body,
          parseInt(req.params.temperature_id)
        );

        if (resPut.affectedRows === 0) {
          return res
            .status(400)
            .json({ msg: "We had a problem please try again" });
        }

        return res.status(200).json({
          id: parseInt(req.params.temperature_id),
          msg: "row aupdated",
          affected_rows: resPut.affectedRows,
        });
      } catch (error) {
        next(error);
      }
    }
  );

  app.delete(
    "/api/v1/temperature/delete/:temperature_id",
    errorHandler,
    async (req, res, next) => {
      try {
        let resOldData = await TemperatureModel.getById(
          parseInt(req.params.temperature_id)
        );

        if (resOldData.length === 0) {
          return res.status(400).json({
            received_temperature_id: parseInt(req.params.temperature_id),
            msg: "Data not founded in the Database check your payload and try again.",
          });
        }

        let resDelete = await TemperatureModel.deleteById(
          parseInt(req.params.temperature_id)
        );

        if (resDelete.affectedRows === 0) {
          return res.status(400).json({
            received_temperature_id: parseInt(req.params.temperature_id),
            msg: "We had a problem please try again",
          });
        }

        return res.status(200).json({
          id: parseInt(req.params.temperature_id),
          msg: "row deleted",
          affected_rows: resDelete.affectedRows,
        });
      } catch (error) {
        next(error);
      }
    }
  );
};
