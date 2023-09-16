// ---------------------
//    Activities Model
// ---------------------

module.exports = (_db) => {
  db = _db;
  return ActivitiesModel;
};

class ActivitiesModel {
  static async add(data, userId) {
    const query =
      "INSERT INTO track_cycle_periods_db.activities_data (user_id,cycle_id, created_at, activity_reference_id, duration_min) VALUES (?,?,?,?,?);";
    const response = await db.query(query, [
      userId,
      data.cycle_id,
      data.created_at,
      data.activity_reference_id,
      data.duration_min,
    ]);
    return response[0];
  }

  static async getAllData(userId) {
    const query =
      "SELECT * FROM track_cycle_periods_db.activities_data WHERE user_id=?";

    const response = await db.query(query, [userId]);
    return response;
  }

  static async getById(userId, activityId) {
    const query =
      "SELECT * FROM track_cycle_periods_db.activities_data WHERE user_id=? AND id=?;";

    const resGet = await db.query(query, [userId, activityId]);
    return resGet[0];
  }

  static async getByCycleId(cycleId, userId) {
    const query =
      "SELECT * FROM track_cycle_periods_db.activities_data WHERE cycle_id=? AND user_id=?;";

    const resGet = await db.query(query, [cycleId, userId]);
    return resGet[0];
  }

  static async updateById(data, activityId, userId) {
    const query =
      "UPDATE track_cycle_periods_db.activities_data SET cycle_id=?, activity_reference_id=?, created_at=?, duration_min=? WHERE id=? AND user_id=?;";

    const resPut = await db.query(query, [
      data.cycle_id,
      data.activity_reference_id,
      data.created_at,
      data.duration_min,
      activityId,
      userId,
    ]);
    return resPut[0];
  }

  static async deleteById(activityId, userId) {
    const query =
      "DELETE FROM track_cycle_periods_db.activities_data WHERE id=? AND user_id=?;";

    const resDelete = await db.query(query, [activityId, userId]);
    return resDelete[0];
  }
}
