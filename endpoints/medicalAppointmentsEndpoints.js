const errorHandler = require("../middlewares/errorHandler.js");

// --------------------
//    medicalAppointment Endpoints
// --------------------

module.exports = (app, db) => {
  const medicalAppointmentsModel = require("./../models/medicalAppointmentsModel.js")(db);

  app.post("/api/v1/medical_appointments/add", errorHandler, async (req, res, next) => {
    try {
      let resPost = await medicalAppointmentsModel.add(req.body);

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

  app.get("/api/v1/medical_appointments/all_data", errorHandler, async (req, res, next) => {
    try {
      let responseGet = await medicalAppointmentsModel.getAllData();

      if (responseGet[0].length === 0) {
        return res.status(200).json({ msg: "User doesn't have data" });
      }
      return res.status(200).json(responseGet[0]);
    } catch (error) {
      next(error);
    }
  });

  app.put(
    "/api/v1/medical_appointments/update/:appointment_id",
    errorHandler,
    async (req, res, next) => {
      try {
        let resOldData = await medicalAppointmentsModel.getById(parseInt(req.params.appointment_id));

        if (resOldData.length === 0) {
          return res.status(400).json({
            msg: "Data not founded in the Database check your payload and try again.",
            received_appointment_id: parseInt(req.params.appointment_id),
          });
        }

        let resPut = await medicalAppointmentsModel.updateById(
          req.body,
          parseInt(req.params.appointment_id)
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
    async (req, res, next) => {
      try {
        let resOldData = await medicalAppointmentsModel.getById(parseInt(req.params.appointment_id));

        if (resOldData.length === 0) {
          return res.status(400).json({
            msg: "Data not founded in the Database check your payload and try again.",
            received_appointment_id: parseInt(req.params.appointment_id),
          });
        }

        let resDelete = await medicalAppointmentsModel.deleteById(
          parseInt(req.params.appointment_id)
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
