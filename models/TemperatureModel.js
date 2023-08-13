// ------------------------
//    Temperature Model
// ------------------------

module.exports = (_db) => {
  db = _db;
  return TermperatureModel;
};

class TermperatureModel {
  static async add(data) {
    const query =
      "INSERT INTO track_cycle_periods_db.temperature (cycle_id, celsius_degrees, created_at) VALUES (?,?, CURRENT_TIMESTAMP)";
    const response = await db.query(query, [
      data.cycle_id,
      data.celsius_degrees,
    ]);
    return response[0];
  }

  static async getAllData() {
    const query = "SELECT * FROM track_cycle_periods_db.temperature;";

    const response = await db.query(query, []);
    return response;
  }

  static async getById(temperatureId) {
    const query =
      "SELECT * FROM track_cycle_periods_db.temperature WHERE id=?;";

    const resGet = await db.query(query, [temperatureId]);
    return resGet[0];
  }

  static async updateById(data, temperatureId) {
    const query =
      "UPDATE track_cycle_periods_db.temperature SET cycle_id=?, celsius_degrees=? WHERE id=?;";

    const resPut = await db.query(query, [
      data.cycle_id,
      data.celsius_degrees,
      temperatureId,
    ]);
    return resPut[0];
  }

  static async deleteById(temperatureId) {
    const query = "DELETE FROM track_cycle_periods_db.temperature WHERE id=?;";

    const resDelete = await db.query(query, [temperatureId]);
    return resDelete[0];
  }
}