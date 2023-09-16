// ------------------------
//    Cycles Model
// ------------------------

module.exports = (_db) => {
  db = _db;
  return CyclesModel;
};

class CyclesModel {
  static async add(data, userId) {
    const query =
      "INSERT INTO track_cycle_periods_db.cycles (created_at, user_id) VALUES (?,?)";
    const response = await db.query(query, [data.created_at, userId]);
    return response[0];
  }

  static async getAllData(userId) {
    const query =
      "SELECT * FROM track_cycle_periods_db.cycles WHERE user_id=?;";

    const response = await db.query(query, [userId]);
    return response;
  }

  static async getDataByCycleId(cycleId, userId) {
    const query =
      "SELECT * FROM track_cycle_periods_db.cycles WHERE cycle_id=? AND user_id=?;";

    const resGet = await db.query(query, [cycleId, userId]);
    return resGet[0];
  }

  static async updateCycleById(dateUtc, cycleId, userId) {
    const query =
      "UPDATE track_cycle_periods_db.cycles SET created_at=? WHERE cycle_id=? AND user_id=?;";

    const resPut = await db.query(query, [dateUtc, cycleId, userId]);
    return resPut[0];
  }

  static async deleteCycleById(cycleId, userId) {
    const query =
      "DELETE FROM `track_cycle_periods_db`.`cycles` WHERE `cycle_id`=? AND user_id=?;";

    const resDelete = await db.query(query, [cycleId, userId]);
    return resDelete[0];
  }
}
