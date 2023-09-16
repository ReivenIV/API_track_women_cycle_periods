// -----------------
//    sleep Model
// -----------------

module.exports = (_db) => {
  db = _db;
  return SleepModel;
};

class SleepModel {
  static async add(data, userId) {
    const query =
      "INSERT INTO track_cycle_periods_db.sleep (cycle_id, created_at, sleep_quality, duration_min, user_id) VALUES (?, ?, ?, ?,?)";
    const response = await db.query(query, [
      data.cycle_id,
      data.created_at,
      data.sleep_quality,
      data.duration_min,
      userId
    ]);
    return response[0];
  }

  static async getAllData(userId) {
    const query = "SELECT * FROM track_cycle_periods_db.sleep WHERE user_id=?;";

    const response = await db.query(query, [userId]);
    return response;
  }

  static async getById(sleepId, userId) {
    const query = "SELECT * FROM track_cycle_periods_db.sleep WHERE id=? AND user_id=?;";

    const resGet = await db.query(query, [sleepId, userId]);
    return resGet[0];
  }

  static async getByCycleId(cycleId, userId) {
    const query =
      "SELECT * FROM track_cycle_periods_db.sleep WHERE cycle_id=? AND user_id=?;";

    const resGet = await db.query(query, [cycleId, userId]);
    return resGet[0];
  }

  static async updateById(data, sleepId, userId) {
    const query =
      "UPDATE track_cycle_periods_db.sleep SET cycle_id=?, created_at=?, sleep_quality=?, duration_min=? WHERE id=? AND user_id=?;";

    const resPut = await db.query(query, [
      data.cycle_id,
      data.created_at,
      data.sleep_quality,
      data.duration_min,
      sleepId,
      userId
    ]);
    return resPut[0];
  }

  static async deleteById(sleepId, userId) {
    const query = "DELETE FROM track_cycle_periods_db.sleep WHERE id=? AND user_id=?;";

    const resDelete = await db.query(query, [sleepId, userId]);
    return resDelete[0];
  }
}
