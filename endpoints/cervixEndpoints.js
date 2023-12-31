const errorHandler = require("../middlewares/errorHandler.js");
const authenticateToken = require("../middlewares/authenticateToken.js");

// --------------------
//    cervix Endpoints
// --------------------

module.exports = (app, db) => {
  const CervixModel = require("./../models/CervixModel.js")(db);

  app.post(
    "/api/v1/cervix/add",
    errorHandler,
    authenticateToken,
    async (req, res, next) => {
      try {
        let resPost = await CervixModel.add(req.body, req.userId);

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
    "/api/v1/cervix/all_data",
    errorHandler,
    authenticateToken,
    async (req, res, next) => {
      try {
        let responseGet = await CervixModel.getAllData(req.userId);

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
    "/api/v1/cervix/update/:cervix_id",
    errorHandler,
    authenticateToken,
    async (req, res, next) => {
      try {
        let resOldData = await CervixModel.getById(
          parseInt(req.params.cervix_id),
          req.userId
        );

        if (resOldData.length === 0) {
          return res.status(400).json({
            msg: "Data not founded in the Database check your payload and try again.",
            received_cervix_id: parseInt(req.params.cervix_id),
          });
        }

        let resPut = await CervixModel.updateById(
          req.body,
          parseInt(req.params.cervix_id),
          req.userId
        );

        if (resPut.affectedRows === 0) {
          return res
            .status(400)
            .json({ msg: "We had a problem please try again" });
        }

        return res.status(200).json({
          id: parseInt(req.params.cervix_id),
          msg: "row aupdated",
          affected_rows: resPut.affectedRows,
        });
      } catch (error) {
        next(error);
      }
    }
  );

  app.delete(
    "/api/v1/cervix/delete/:cervix_id",
    errorHandler,
    authenticateToken,
    async (req, res, next) => {
      try {
        let resOldData = await CervixModel.getById(
          parseInt(req.params.cervix_id),
          req.userId
        );

        if (resOldData.length === 0) {
          return res.status(400).json({
            msg: "Data not founded in the Database check your payload and try again.",
            received_cervix_id: parseInt(req.params.cervix_id),
          });
        }

        let resDelete = await CervixModel.deleteById(
          parseInt(req.params.cervix_id),
          req.userId
        );

        if (resDelete.affectedRows === 0) {
          return res.status(400).json({
            msg: "We had a problem please try again",
            received_cervix_id: parseInt(req.params.cervix_id),
          });
        }

        return res.status(200).json({
          id: parseInt(req.params.cervix_id),
          msg: "row deleted",
          affected_rows: resDelete.affectedRows,
        });
      } catch (error) {
        next(error);
      }
    }
  );
};
