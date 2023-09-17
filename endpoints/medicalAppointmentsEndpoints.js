const errorHandler = require("../middlewares/errorHandler.js");
const authenticateToken = require("../middlewares/authenticateToken.js");

// ----------------------------------
//    medicalAppointment Endpoints
// ----------------------------------

module.exports = (app, db) => {
  const MedicalAppointmentsModel =
    require("./../models/MedicalAppointmentsModel.js")(db);

  app.post(
    "/api/v1/medical_appointments/add",
    errorHandler,
    authenticateToken,
    async (req, res, next) => {
      try {
        let resPost = await MedicalAppointmentsModel.add(req.body, req.userId);

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
    "/api/v1/medical_appointments/all_data",
    errorHandler,
    authenticateToken,
    async (req, res, next) => {
      try {
        let responseGet = await MedicalAppointmentsModel.getAllData(req.userId);

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
    "/api/v1/medical_appointments/update/:appointment_id",
    errorHandler,
    authenticateToken,
    async (req, res, next) => {
      try {
        let resOldData = await MedicalAppointmentsModel.getById(
          parseInt(req.params.appointment_id),
          req.userId
        );

        if (resOldData.length === 0) {
          return res.status(400).json({
            msg: "Data not founded in the Database check your payload and try again.",
            received_appointment_id: parseInt(req.params.appointment_id),
          });
        }

        let resPut = await MedicalAppointmentsModel.updateById(
          req.body,
          parseInt(req.params.appointment_id),
          req.userId
        );

        if (resPut.affectedRows === 0) {
          return res
            .status(400)
            .json({ msg: "We had a problem please try again" });
        }

        return res.status(200).json({
          id: parseInt(req.params.appointment_id),
          msg: "row aupdated",
          affected_rows: resPut.affectedRows,
          received_payload: req.body,
        });
      } catch (error) {
        next(error);
      }
    }
  );

  app.delete(
    "/api/v1/medical_appointments/delete/:appointment_id",
    errorHandler,
    authenticateToken,
    async (req, res, next) => {
      try {
        let resOldData = await MedicalAppointmentsModel.getById(
          parseInt(req.params.appointment_id),
          req.userId
        );

        if (resOldData.length === 0) {
          return res.status(400).json({
            msg: "Data not founded in the Database check your payload and try again.",
            received_appointment_id: parseInt(req.params.appointment_id),
          });
        }

        let resDelete = await MedicalAppointmentsModel.deleteById(
          parseInt(req.params.appointment_id),
          req.userId
        );

        if (resDelete.affectedRows === 0) {
          return res.status(400).json({
            msg: "We had a problem please try again",
            received_appointment_id: parseInt(req.params.appointment_id),
          });
        }

        return res.status(200).json({
          id: parseInt(req.params.appointment_id),
          msg: "row deleted",
          affected_rows: resDelete.affectedRows,
        });
      } catch (error) {
        next(error);
      }
    }
  );
};
