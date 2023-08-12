// ------------------------
//    Track Time Model
// ------------------------

module.exports = (_db) => {
  db = _db;
  return CyclesModel;
};

class CyclesModel {
  static async add() {
    const query = "INSERT INTO track_cycle_periods_db.cycles () VALUES ()";
    const response = await db.query(query, []);
    return response[0];
  }

  static async getAllData() {
    const query = "SELECT * FROM track_cycle_periods_db.cycles;";

    const response = await db.query(query, []);
    return response;
  }

  static async getDataByCycleId(cycleId) {
    const query =
      "SELECT * FROM track_cycle_periods_db.cycles WHERE cycle_id=?;";

    const resGet = await db.query(query, [cycleId]);
    return resGet[0];
  }

  static async updateCycleById(dateUtc, cycleId) {
    const query =
      "UPDATE track_cycle_periods_db.cycles SET created_at=? WHERE cycle_id=?;";

    const resPut = await db.query(query, [dateUtc, cycleId]);
    return resPut[0];
  }

    static async deleteCycleById(cycleId) {
    const query =
      "DELETE FROM `track_cycle_periods_db`.`cycles` WHERE `cycle_id` =?;";

    const resDelete = await db.query(query, [cycleId]);
    return resDelete[0];
  }
}
