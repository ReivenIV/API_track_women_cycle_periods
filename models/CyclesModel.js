// ------------------------
//    Track Time Model
// ------------------------

module.exports = (_db) => {
  db = _db;
  return CyclesModel;
};

class CyclesModel {
  static async add() {
    const query =
      'INSERT INTO track_cycle_periods_db.cycles () VALUES ()';
    const response = await db.query(query, []);
    return response[0];
  }

  static async getAllData() {
    const query =
      'SELECT * FROM track_cycle_periods_db.cycles;';

    const response = await db.query(query, []);
    return response;
  }

}
