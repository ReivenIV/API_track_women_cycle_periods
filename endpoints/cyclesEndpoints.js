//const validator = require('../../middlewares/validator.js');
const errorHandler = require('../middlewares/errorHandler.js');

// ---------------------------
//    cycle Endpoints
// ---------------------------

module.exports = (app, db) => {
  const CyclesModel = require('./../models/CyclesModel')(db);

  app.post(
    '/api/v1/cycle/add',
    errorHandler,
    async (req, res, next) => {
      try {
        let resPost = await CyclesModel.add();

        if (resPost.affectedRows === 0) {
          res.status(400).json({
            msg: 'user not updated',
            affected_rows: resPost.affectedRows,
          });
        }

        return res.status(200).json({
          msg: 'information added to DB',
          affected_rows: resPost.affectedRows,
        });
      } catch (error) {
        next(error);
      }
    },
  );

  app.get(
    '/api/v1/cycle/all_data',
    errorHandler,
    async (req, res, next) => {
      try {
        let responseGet = await CyclesModel.getAllData();

        if (responseGet[0].length === 0) {
          return res.status(200).json({ msg: "User doesn't have data" });
        }
        return res.status(200).json(responseGet[0]);
      } catch (error) {
        next(error);
      }
    },
  );
};
