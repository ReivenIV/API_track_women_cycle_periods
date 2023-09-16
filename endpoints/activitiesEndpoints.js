const errorHandler = require("../middlewares/errorHandler.js");
const authenticateToken = require("../middlewares/authenticateToken.js");

// --------------------
//    Notes Endpoints
// --------------------

module.exports = (app, db) => {
  const ActivitiesModel = require("./../models/ActivitiesModel.js")(db);

  app.post(
    "/api/v1/activities/add",
    errorHandler,
    authenticateToken,
    async (req, res, next) => {
      try {
        let resPost = await ActivitiesModel.add(req.body, req.userId);

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
    "/api/v1/activities/all_data",
    errorHandler,
    authenticateToken,
    async (req, res, next) => {
      try {
        let responseGet = await ActivitiesModel.getAllData(req.userId);

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
    "/api/v1/activities/update/:activity_id",
    errorHandler,
    authenticateToken,
    async (req, res, next) => {
      try {
        let resOldData = await ActivitiesModel.getById(
          req.userId,
          parseInt(req.params.activity_id)
        );

        if (resOldData.length === 0) {
          return res.status(400).json({
            msg: "Data not founded in the Database check your payload and try again.",
            received_activity_id: parseInt(req.params.activity_id),
          });
        }

        let resPut = await ActivitiesModel.updateById(
          req.body,
          parseInt(req.params.activity_id),
          req.userId
        );

        if (resPut.affectedRows === 0) {
          return res.status(400).json({
            msg: "We had a problem please try again",
            affected_rows: resPut.affectedRows,
          });
        }

        return res.status(200).json({
          id: parseInt(req.params.activity_id),
          msg: "row aupdated",
          affected_rows: resPut.affectedRows,
        });
      } catch (error) {
        next(error);
      }
    }
  );

  app.delete(
    "/api/v1/activities/delete/:activity_id",
    errorHandler,
    authenticateToken,
    async (req, res, next) => {
      try {
        let resOldData = await ActivitiesModel.getById(
          req.userId,
          parseInt(req.params.activity_id)
        );

        if (resOldData.length === 0) {
          return res.status(400).json({
            msg: "Data not founded in the Database check your payload and try again.",
            received_activity_id: parseInt(req.params.activity_id),
          });
        }

        let resDelete = await ActivitiesModel.deleteById(
          parseInt(req.params.activity_id),
          req.userId
        );

        if (resDelete.affectedRows === 0) {
          return res.status(400).json({
            msg: "We had a problem please try again",
            received_activity_id: parseInt(req.params.activity_id),
          });
        }

        return res.status(200).json({
          id: parseInt(req.params.activity_id),
          msg: "row deleted",
          affected_rows: resDelete.affectedRows,
        });
      } catch (error) {
        next(error);
      }
    }
  );
};
