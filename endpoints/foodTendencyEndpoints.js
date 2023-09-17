const errorHandler = require("../middlewares/errorHandler.js");
const authenticateToken = require("../middlewares/authenticateToken.js");

// ---------------------------
//    Food Tendency Endpoints
// ---------------------------

module.exports = (app, db) => {
  const FoodTendencyModel = require("./../models/FoodTendencyModel.js")(db);

  app.post(
    "/api/v1/food_tendency/add",
    errorHandler,
    authenticateToken,
    async (req, res, next) => {
      try {
        let resPost = await FoodTendencyModel.add(req.body, req.userId);

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
    "/api/v1/food_tendency/all_data",
    errorHandler,
    authenticateToken,
    async (req, res, next) => {
      try {
        let responseGet = await FoodTendencyModel.getAllData(req.userId);

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
    "/api/v1/food_tendency/update/:foodTendency_id",
    errorHandler,
    authenticateToken,
    async (req, res, next) => {
      try {
        let resOldData = await FoodTendencyModel.getById(
          parseInt(req.params.foodTendency_id),
          req.userId
        );

        if (resOldData.length === 0) {
          return res.status(400).json({
            received_foodTendency_id: parseInt(req.params.foodTendency_id),
            msg: "Data not founded in the Database check your payload and try again.",
          });
        }

        let resPut = await FoodTendencyModel.updateById(
          req.body,
          parseInt(req.params.foodTendency_id),
          req.userId
        );

        if (resPut.affectedRows === 0) {
          return res
            .status(400)
            .json({ msg: "We had a problem please try again" });
        }

        return res.status(200).json({
          id: parseInt(req.params.foodTendency_id),
          msg: "row aupdated",
          affected_rows: resPut.affectedRows,
        });
      } catch (error) {
        next(error);
      }
    }
  );

  app.delete(
    "/api/v1/food_tendency/delete/:foodTendency_id",
    errorHandler,
    authenticateToken,
    async (req, res, next) => {
      try {
        let resOldData = await FoodTendencyModel.getById(
          parseInt(req.params.foodTendency_id),
          req.userId
        );

        if (resOldData.length === 0) {
          return res.status(400).json({
            received_foodTendency_id: parseInt(req.params.foodTendency_id),
            msg: "Data not founded in the Database check your payload and try again.",
          });
        }

        let resDelete = await FoodTendencyModel.deleteById(
          parseInt(req.params.foodTendency_id),
          req.userId
        );

        if (resDelete.affectedRows === 0) {
          return res.status(400).json({
            received_foodTendency_id: parseInt(req.params.foodTendency_id),
            msg: "We had a problem please try again",
          });
        }

        return res.status(200).json({
          id: parseInt(req.params.foodTendency_id),
          msg: "row deleted",
          affected_rows: resDelete.affectedRows,
        });
      } catch (error) {
        next(error);
      }
    }
  );
};
