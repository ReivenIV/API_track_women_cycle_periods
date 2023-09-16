// ------------------------
//    Temperature Model
// ------------------------

module.exports = (_db) => {
  db = _db;
  return TemperatureModel;
};

class TemperatureModel {
  static async add(data, userId) {
    const query =
      "INSERT INTO track_cycle_periods_db.temperature (cycle_id, celsius_degrees, created_at, user_id) VALUES (?,?,?,?)";
    const response = await db.query(query, [
      data.cycle_id,
      data.celsius_degrees,
      data.created_at,
      userId,
    ]);
    return response[0];
  }

  static async getAllData(userId) {
    const query =
      "SELECT * FROM track_cycle_periods_db.temperature WHERE user_id=?;";

    const response = await db.query(query, [userId]);
    return response;
  }

  static async getById(temperatureId, userId) {
    const query =
      "SELECT * FROM track_cycle_periods_db.temperature WHERE id=? AND user_id=?;";

    const resGet = await db.query(query, [temperatureId, userId]);
    return resGet[0];
  }

  static async getByCycleId(cycleId, userId) {
    const query =
      "SELECT * FROM track_cycle_periods_db.temperature WHERE cycle_id=? AND user_id=?;";

    const resGet = await db.query(query, [cycleId, userId]);
    return resGet[0];
  }

  static async updateById(data, temperatureId, userId) {
    const query =
      "UPDATE track_cycle_periods_db.temperature SET cycle_id=?, celsius_degrees=?, created_at=? WHERE id=? AND user_id=?;";

    const resPut = await db.query(query, [
      data.cycle_id,
      data.celsius_degrees,
      data.created_at,
      temperatureId,
      userId,
    ]);
    return resPut[0];
  }

  static async deleteById(temperatureId, userId) {
    const query =
      "DELETE FROM track_cycle_periods_db.temperature WHERE id=? AND user_id=?;";

    const resDelete = await db.query(query, [temperatureId, userId]);
    return resDelete[0];
  }
}
