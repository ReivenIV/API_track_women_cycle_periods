// -----------------
//    Notes Model
// -----------------

module.exports = (_db) => {
  db = _db;
  return SleepModel;
};

class SleepModel {
  static async add(data) {
    const query =
      "INSERT INTO track_cycle_periods_db.sleep (cycle_id, created_at, sleep_quality, duration_min) VALUES (?, ?, ?, ?)";
    const response = await db.query(query, [
      data.cycle_id,
      data.created_at,
      data.sleep_quality,
      data.duration_min,
    ]);
    return response[0];
  }

  static async getAllData() {
    const query = "SELECT * FROM track_cycle_periods_db.sleep;";

    const response = await db.query(query, []);
    return response;
  }

  static async getById(sleepId) {
    const query = "SELECT * FROM track_cycle_periods_db.sleep WHERE id=?;";

    const resGet = await db.query(query, [sleepId]);
    return resGet[0];
  }

  static async getByCycleId(cycleId) {
    const query =
      "SELECT * FROM track_cycle_periods_db.sleep WHERE cycle_id=?;";

    const resGet = await db.query(query, [cycleId]);
    return resGet[0];
  }

  static async updateById(data, sleepId) {
    const query =
      "UPDATE track_cycle_periods_db.sleep SET cycle_id=?, created_at=?, sleep_quality=?, duration_min=? WHERE id=?;";

    const resPut = await db.query(query, [
      data.cycle_id,
      data.created_at,
      data.sleep_quality,
      data.duration_min,
      sleepId,
    ]);
    return resPut[0];
  }

  static async deleteById(sleepId) {
    const query = "DELETE FROM track_cycle_periods_db.sleep WHERE id=?;";

    const resDelete = await db.query(query, [sleepId]);
    return resDelete[0];
  }
}
