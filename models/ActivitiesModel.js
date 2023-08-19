// ---------------------
//    Activities Model
// ---------------------

module.exports = (_db) => {
  db = _db;
  return ActivitiesModel;
};

class ActivitiesModel {
  static async add(data) {
    const query =
      "INSERT INTO track_cycle_periods_db.activities_data (cycle_id, created_at, activity_reference_id, duration_min) VALUES (?, ?, ?,?);";
    const response = await db.query(query, [
      data.cycle_id,
      data.created_at,
      data.activity_reference_id,
      data.duration_min,
    ]);
    return response[0];
  }

  static async getAllData() {
    const query = "SELECT * FROM track_cycle_periods_db.activities_data;";

    const response = await db.query(query, []);
    return response;
  }

  static async getById(commentId) {
    const query =
      "SELECT * FROM track_cycle_periods_db.activities_data WHERE id=?;";

    const resGet = await db.query(query, [commentId]);
    return resGet[0];
  }

  static async getByCycleId(cycleId) {
    const query =
      "SELECT * FROM track_cycle_periods_db.activities_data WHERE cycle_id=?;";

    const resGet = await db.query(query, [cycleId]);
    return resGet[0];
  }

  static async updateById(data, commentId) {
    const query =
      "UPDATE track_cycle_periods_db.activities_data SET cycle_id=?, activity_reference_id=?, created_at=?, duration_min=? WHERE id=?;";

    const resPut = await db.query(query, [
      data.cycle_id,
      data.activity_reference_id,
      data.created_at,
      data.duration_min,
      commentId,
    ]);
    return resPut[0];
  }

  static async deleteById(commentId) {
    const query =
      "DELETE FROM track_cycle_periods_db.activities_data WHERE id=?;";

    const resDelete = await db.query(query, [commentId]);
    return resDelete[0];
  }
}
