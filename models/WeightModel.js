// ------------------
//    weight Model
// ------------------

module.exports = (_db) => {
  db = _db;
  return WeightModel;
};

class WeightModel {
  static async add(data, userId) {
    const query =
      "INSERT INTO track_cycle_periods_db.weight (cycle_id, weight_kg, created_at, user_id) VALUES (?,?,?,?)";
    const response = await db.query(query, [
      data.cycle_id,
      data.weight_kg,
      data.created_at,
      userId,
    ]);
    return response[0];
  }

  static async getAllData(userId) {
    const query =
      "SELECT * FROM track_cycle_periods_db.weight WHERE user_id=?;";

    const response = await db.query(query, [userId]);
    return response;
  }

  static async getById(weightId, userId) {
    const query =
      "SELECT * FROM track_cycle_periods_db.weight WHERE id=? AND user_id=?;";

    const resGet = await db.query(query, [weightId, userId]);
    return resGet[0];
  }

  static async getByCycleId(cycleId, userId) {
    const query =
      "SELECT * FROM track_cycle_periods_db.weight WHERE cycle_id=? AND user_id=?;";

    const resGet = await db.query(query, [cycleId, userId]);
    return resGet[0];
  }

  static async updateById(data, weightId, userId) {
    const query =
      "UPDATE track_cycle_periods_db.weight SET cycle_id=?, weight_kg=?, created_at=? WHERE id=? AND user_id=?;";

    const resPut = await db.query(query, [
      data.cycle_id,
      data.weight_kg,
      data.created_at,
      weightId,
      userId,
    ]);
    return resPut[0];
  }

  static async deleteById(weightId, userId) {
    const query =
      "DELETE FROM track_cycle_periods_db.weight WHERE id=? AND user_id=?;";

    const resDelete = await db.query(query, [weightId, userId]);
    return resDelete[0];
  }
}
