const errorHandler = require("../middlewares/errorHandler.js");
const authenticateToken = require("../middlewares/authenticateToken.js");

// ---------------------------
//    cycle Endpoints
// ---------------------------

module.exports = (app, db) => {
  const CyclesModel = require("./../models/CyclesModel")(db);

  app.post(
    "/api/v1/cycle/add",
    errorHandler,
    authenticateToken,
    async (req, res, next) => {
      try {
        let resPost = await CyclesModel.add(req.body, req.userId);

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
    }
  );

  app.get(
    "/api/v1/cycle/all_data",
    errorHandler,
    authenticateToken,
    async (req, res, next) => {
      try {
        let responseGet = await CyclesModel.getAllData(req.userId);

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
    "/api/v1/cycle/update/:cycle_id",
    errorHandler,
    authenticateToken,
    async (req, res, next) => {
      try {
        let resOldData = await CyclesModel.getDataByCycleId(
          parseInt(req.params.cycle_id),
          req.userId
        );

        if (resOldData.length === 0) {
          return res.status(400).json({
            msg: "Data not founded in the Database check your payload and try again.",
            received_cycle_id: parseInt(req.params.cycle_id),
          });
        }

        let resPut = await CyclesModel.updateCycleById(
          req.body.created_at,
          parseInt(req.params.cycle_id),
          req.userId
        );

        if (resPut.affectedRows === 0) {
          return res
            .status(400)
            .json({ msg: "We had a problem please try again" });
        }

        return res.status(200).json({
          id: parseInt(req.params.cycle_id),
          msg: "row aupdated",
          affected_rows: resPut.affectedRows,
        });
      } catch (error) {
        next(error);
      }
    }
  );

  app.delete(
    "/api/v1/cycle/delete/:cycle_id",
    errorHandler,
    authenticateToken,
    async (req, res, next) => {
      try {
        let resOldData = await CyclesModel.getDataByCycleId(
          parseInt(req.params.cycle_id),
          req.userId
        );

        if (resOldData.length === 0) {
          return res.status(400).json({
            msg: "Data not founded in the Database check your payload and try again.",
            received_cycle_id: parseInt(parseInt(req.params.cycle_id)),
          });
        }

        let resDelete = await CyclesModel.deleteCycleById(
          parseInt(parseInt(req.params.cycle_id)),
          req.userId
        );

        if (resDelete.affectedRows === 0) {
          return res.status(400).json({
            msg: "We had a problem please try again",
            received_cycle_id: parseInt(parseInt(req.params.cycle_id)),
          });
        }

        return res.status(200).json({
          id: parseInt(parseInt(req.params.cycle_id)),
          msg: "row deleted",
          affected_rows: resDelete.affectedRows,
        });
      } catch (error) {
        next(error);
      }
    }
  );
};
