// -----------------
//    Notes Model
// -----------------

module.exports = (_db) => {
  db = _db;
  return CervixModel;
};

class CervixModel {
  static async add(data) {
    const query =
      "INSERT INTO track_cycle_periods_db.cervix_data (cycle_id, created_at, cervix_position, mucus_type ) VALUES (?,CURRENT_TIMESTAMP, ?, ?);";
    const response = await db.query(query, [
      data.cycle_id,
      data.cervix_position,
      data.mucus_type,
    ]);
    return response[0];
  }

  static async getAllData() {
    const query = "SELECT * FROM track_cycle_periods_db.cervix_data;";

    const response = await db.query(query, []);
    return response;
  }

  static async getById(commentId) {
    const query =
      "SELECT * FROM track_cycle_periods_db.cervix_data WHERE id=?;";

    const resGet = await db.query(query, [commentId]);
    return resGet[0];
  }

  static async getByCycleId(cycleId) {
    const query =
      "SELECT * FROM track_cycle_periods_db.cervix_data WHERE cycle_id=?;";

    const resGet = await db.query(query, [cycleId]);
    return resGet[0];
  }

  static async updateById(data, commentId) {
    const query =
      "UPDATE track_cycle_periods_db.cervix_data SET cycle_id=?, cervix_position=?, mucus_type=? WHERE id=?;";

    const resPut = await db.query(query, [
      data.cycle_id,
      data.cervix_position,
      data.mucus_type,
      commentId,
    ]);
    return resPut[0];
  }

  static async deleteById(commentId) {
    const query = "DELETE FROM track_cycle_periods_db.cervix_data WHERE id=?;";

    const resDelete = await db.query(query, [commentId]);
    return resDelete[0];
  }
}
