// -----------------
//    cervix Model
// -----------------

module.exports = (_db) => {
  db = _db;
  return CervixModel;
};

class CervixModel {
  static async add(data, userId) {
    const query =
      "INSERT INTO track_cycle_periods_db.cervix_data (cycle_id, created_at, cervix_position, mucus_type, user_id) VALUES (?, ?, ?, ?,?);";
    const response = await db.query(query, [
      data.cycle_id,
      data.created_at,
      data.cervix_position,
      data.mucus_type,
      userId,
    ]);
    return response[0];
  }

  static async getAllData(userId) {
    const query =
      "SELECT * FROM track_cycle_periods_db.cervix_data WHERE user_id=?;";

    const response = await db.query(query, [userId]);
    return response;
  }

  static async getById(cervixId, userId) {
    const query =
      "SELECT * FROM track_cycle_periods_db.cervix_data WHERE id=? AND user_id=?;";

    const resGet = await db.query(query, [cervixId, userId]);
    return resGet[0];
  }

  static async getByCycleId(cycleId, userId) {
    const query =
      "SELECT * FROM track_cycle_periods_db.cervix_data WHERE cycle_id=? AND user_id=?;";

    const resGet = await db.query(query, [cycleId, userId]);
    return resGet[0];
  }

  static async updateById(data, cervixId, userId) {
    const query =
      "UPDATE track_cycle_periods_db.cervix_data SET cycle_id=?, cervix_position=?, mucus_type=?, created_at=? WHERE id=? AND user_id=?;";

    const resPut = await db.query(query, [
      data.cycle_id,
      data.cervix_position,
      data.mucus_type,
      data.created_at,
      cervixId,
      userId,
    ]);
    return resPut[0];
  }

  static async deleteById(cervixId, userId) {
    const query =
      "DELETE FROM track_cycle_periods_db.cervix_data WHERE id=? AND user_id=?;";

    const resDelete = await db.query(query, [cervixId, userId]);
    return resDelete[0];
  }
}
