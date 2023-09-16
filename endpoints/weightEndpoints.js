const errorHandler = require("../middlewares/errorHandler.js");
const authenticateToken = require("../middlewares/authenticateToken.js");

// ---------------------------
//    Temperature Endpoints
// ---------------------------

module.exports = (app, db) => {
  const WeightModel = require("./../models/WeightModel.js")(db);

  app.post(
    "/api/v1/weight/add",
    errorHandler,
    authenticateToken,
    async (req, res, next) => {
      try {
        let resPost = await WeightModel.add(req.body, req.userId);

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
    "/api/v1/weight/all_data",
    errorHandler,
    authenticateToken,
    async (req, res, next) => {
      try {
        let responseGet = await WeightModel.getAllData(req.userId);

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
    "/api/v1/weight/update/:weight_id",
    errorHandler,
    authenticateToken,
    async (req, res, next) => {
      try {
        let resOldData = await WeightModel.getById(
          parseInt(req.params.weight_id),
          req.userId
        );

        if (resOldData.length === 0) {
          return res.status(400).json({
            received_weight_id: parseInt(req.params.weight_id),
            msg: "Data not founded in the Database check your payload and try again.",
          });
        }

        let resPut = await WeightModel.updateById(
          req.body,
          parseInt(req.params.weight_id),
          req.userId
        );

        if (resPut.affectedRows === 0) {
          return res
            .status(400)
            .json({ msg: "We had a problem please try again" });
        }

        return res.status(200).json({
          id: parseInt(req.params.weight_id),
          msg: "row aupdated",
          affected_rows: resPut.affectedRows,
        });
      } catch (error) {
        next(error);
      }
    }
  );

  app.delete(
    "/api/v1/weight/delete/:weight_id",
    errorHandler,
    authenticateToken,
    async (req, res, next) => {
      try {
        let resOldData = await WeightModel.getById(
          parseInt(req.params.weight_id),
          req.userId
        );

        if (resOldData.length === 0) {
          return res.status(400).json({
            received_weight_id: parseInt(req.params.weight_id),
            msg: "Data not founded in the Database check your payload and try again.",
          });
        }

        let resDelete = await WeightModel.deleteById(
          parseInt(req.params.weight_id),
          req.userId
        );

        if (resDelete.affectedRows === 0) {
          return res.status(400).json({
            received_weight_id: parseInt(req.params.weight_id),
            msg: "We had a problem please try again",
          });
        }

        return res.status(200).json({
          id: parseInt(req.params.weight_id),
          msg: "row deleted",
          affected_rows: resDelete.affectedRows,
        });
      } catch (error) {
        next(error);
      }
    }
  );
};
