require('dotenv').config();
const authenticateToken = require('../middlewares/authenticateToken.js');
const errorHandler = require('../middlewares/errorHandler.js');
//const validator = require('../../middlewares/validator.js');

// --------------------
//    user Endpoints
// --------------------

module.exports = (app, db) => {
  const UserModel = require('./../models/UserModel')(db);

  app.post(
    '/api/v1/user/register',
    errorHandler,
    //validator.validatorRegister,
    async (req, res, next) => {
      try {
        let checkAllUsers = await UserModel.getByEmailOrUsername(req.body);

        if (checkAllUsers.length > 0) {
          return res
            .status(401)
            .json({ msg: 'email or username already stored in DB' });
        }
        const resgiterResponse = await UserModel.registerUser(req.body);
        let token = await UserModel.authenticateUser(req.body);

        return res.status(200).json({
          user_id: resgiterResponse[0].insertId,
          msg: 'User aded to database',
          token: token,
        });
      } catch (error) {
        next(error);
      }
    },
  );

  app.post('/api/v1/user/login', errorHandler, async (req, res, next) => {
    try {
      let userData = await UserModel.getByEmailOrUsername(req.body);

      if (userData[0].length === 0) {
        return res.status(401).json({ msg: 'invalid credentials' });
      }
      let resultTest = await UserModel.testCredentials(
        req.body.password,
        userData[0].password,
      );
      if (resultTest === false) {
        return res.status(401).json({ msg: 'invalid credentials' });
      }

      let token = await UserModel.authenticateUser(req.body);

      return res.status(200).json({ user_id: userData[0].id, token: token });
    } catch (error) {
      next(error);
    }
  });

  // will SELECT all data by user id.
  app.get(
    '/api/v1/user/data',
    authenticateToken,
    errorHandler,
    async (req, res, next) => {
      try {
        let resUserData = await UserModel.getByUserId(req.id);
        if (resUserData.length === 0) {
          return res
            .status(401)
            .json({ msg: 'user not found in DB / credentials not valid' });
        }

        return res.status(200).json({
          user_id: resUserData[0].id,
          timezone: resUserData[0].birth_date,
          username: resUserData[0].username,
          email: resUserData[0].email,
          created_at: resUserData[0].created_at,
          updated_at: resUserData[0].updated_at
        });

      } catch (error) {
        next(error);
      }
    },
  );

  app.put(
    '/api/v1/user/update',
    authenticateToken,
    errorHandler,
    async (req, res, next) => {
      try {
        let updatedData = await UserModel.updateUser(req.body, req.id);

        if (updatedData[0].affectedRows === 0) {
          res.status(400).json({
            msg: 'user not updated',
            affectedRows: updatedData[0].affectedRows,
          });
        }

        res.status(200).json({
          msg: 'user updated',
          affectedRows: updatedData[0].affectedRows,
        });
      } catch (error) {
        next(error);
      }
    },
  );

  app.put(
    '/api/v1/user/update_password',
    authenticateToken,
    errorHandler,
    async (req, res, next) => {
      try {
        let responseGet = await UserModel.getByUserId(req.id);

        if (responseGet.length === 0) {
          res.status(400).json({
            msg: 'user not not found in DB',
          });
        }

        let result = await UserModel.updatePassword(
          req.body.new_password,
          req.id,
        );

        if (result[0].affectedRows === 0) {
          res.status(400).json({
            msg: 'user not updated',
            affectedRows: result[0].affectedRows,
          });
        }

        res.status(200).json({
          msg: 'password updated',
          affectedRows: result[0].affectedRows,
        });
      } catch (error) {
        next(error);
      }
    },
  );
};
