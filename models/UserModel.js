require("dotenv").config();
const bcrypt = require("bcrypt");
const saltRounds = bcrypt.genSaltSync(parseFloat(process.env.JWT_SALT_ROUNDS));
const jwt = require("jsonwebtoken");

// --------------------
//     user Model
// --------------------

module.exports = (_db) => {
  db = _db;
  return userModel;
};

class userModel {
  static async getByEmailOrUsername(data) {
    const query =
      "SELECT * FROM `track_cycle_periods_db`.`users` WHERE (email = ? OR username = ?)";
    const response = await db.query(query, [data.email, data.username]);

    return response[0];
  }

  static async getByUserId(id) {
    const query =
      "SELECT * FROM `track_cycle_periods_db`.`users` WHERE id = ?;";
    const response = await db.query(query, [id]);
    return response[0];
  }

  static async registerUser(data) {
    const passwordHashed = await bcrypt.hash(data.password, saltRounds);

    const response = await db.query(
      "INSERT INTO `track_cycle_periods_db`.`users` (`username`, `password`, `email`, `birth_date`) VALUES (?,?,?,?)",
      [data.username, passwordHashed, data.email, data.birth_date]
    );
    return response;
  }

  static async authenticateUser(data) {
    let existingUser = await userModel.getByEmailOrUsername(data);
    let token = jwt.sign(
      { userId: existingUser[0].id },
      process.env.JWT_SECRET
    );

    return token;
  }

  static async testCredentials(payloadPassword, hashedPasword) {
    let testPasswordResponse = bcrypt.compareSync(
      payloadPassword,
      hashedPasword
    );

    return testPasswordResponse;
  }

  // `username`, `password`, `email`, `birth_date`
  static async updateUser(data, userId) {
    let query =
      "UPDATE `track_cycle_periods_db`.`users` SET `username`= ?, `email`=?, `birth_date`=? WHERE `id` =?;";

    const response = await db.query(query, [
      data.username,
      data.email,
      data.birth_date,
      userId,
    ]);

    return response;
  }

  static async updatePassword(newPassword, id) {
    let query =
      "UPDATE `track_cycle_periods_db`.`users` SET `password`= ?,`updated_at`=NOW() WHERE `id` =?;";
    const passwordHashed = await bcrypt.hash(newPassword, saltRounds);
    const response = await db.query(query, [passwordHashed, id]);

    return response;
  }
}
