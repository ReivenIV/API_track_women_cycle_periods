const errorHandler = require("../middlewares/errorHandler.js");
const authenticateToken = require("../middlewares/authenticateToken.js");

// ---------------------------
//    Symptoms Endpoints
// ---------------------------

module.exports = (app, db) => {
  const SymptomsModel = require("./../models/SymptomsModel.js")(db);

  app.post(
    "/api/v1/symptoms/add",
    errorHandler,
    authenticateToken,
    async (req, res, next) => {
      try {
        let resPost = await SymptomsModel.add(req.body, req.userId);

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
    "/api/v1/symptoms/all_data",
    errorHandler,
    authenticateToken,
    async (req, res, next) => {
      try {
        let responseGet = await SymptomsModel.getAllData(req.userId);

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
    "/api/v1/symptoms/update/:symptom_id",
    errorHandler,
    authenticateToken,
    async (req, res, next) => {
      try {
        let resOldData = await SymptomsModel.getById(
          parseInt(req.params.symptom_id),
          req.userId
        );

        if (resOldData.length === 0) {
          return res.status(400).json({
            received_symptom_id: parseInt(req.params.symptom_id),
            msg: "Data not founded in the Database check your payload and try again.",
          });
        }

        let resPut = await SymptomsModel.updateById(
          req.body,
          parseInt(req.params.symptom_id),
          req.userId
        );

        if (resPut.affectedRows === 0) {
          return res
            .status(400)
            .json({ msg: "We had a problem please try again" });
        }

        return res.status(200).json({
          id: parseInt(req.params.symptom_id),
          msg: "row aupdated",
          affected_rows: resPut.affectedRows,
        });
      } catch (error) {
        next(error);
      }
    }
  );

  app.delete(
    "/api/v1/symptoms/delete/:symptom_id",
    errorHandler,
    authenticateToken,
    async (req, res, next) => {
      try {
        let resOldData = await SymptomsModel.getById(
          parseInt(req.params.symptom_id),
          req.userId
        );

        if (resOldData.length === 0) {
          return res.status(400).json({
            received_symptom_id: parseInt(req.params.symptom_id),
            msg: "Data not founded in the Database check your payload and try again.",
          });
        }

        let resDelete = await SymptomsModel.deleteById(
          parseInt(req.params.symptom_id),
          req.userId
        );

        if (resDelete.affectedRows === 0) {
          return res.status(400).json({
            received_symptom_id: parseInt(req.params.symptom_id),
            msg: "We had a problem please try again",
          });
        }

        return res.status(200).json({
          id: parseInt(req.params.symptom_id),
          msg: "row deleted",
          affected_rows: resDelete.affectedRows,
        });
      } catch (error) {
        next(error);
      }
    }
  );
};
