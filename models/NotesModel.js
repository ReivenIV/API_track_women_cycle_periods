// -----------------
//    Notes Model
// -----------------

module.exports = (_db) => {
  db = _db;
  return NotesModel;
};

class NotesModel {
  static async add(data) {
    const query =
      "INSERT INTO track_cycle_periods_db.notes (cycle_id, created_at, note) VALUES (?,CURRENT_TIMESTAMP, ?)";
    const response = await db.query(query, [data.cycle_id, data.note]);
    return response[0];
  }

  static async getAllData() {
    const query = "SELECT * FROM track_cycle_periods_db.notes;";

    const response = await db.query(query, []);
    return response;
  }

  static async getById(commentId) {
    const query = "SELECT * FROM track_cycle_periods_db.notes WHERE id=?;";

    const resGet = await db.query(query, [commentId]);
    return resGet[0];
  }

  static async getByCycleId(cycleId) {
    const query =
      "SELECT * FROM track_cycle_periods_db.notes WHERE cycle_id=?;";

    const resGet = await db.query(query, [cycleId]);
    return resGet[0];
  }

  static async updateById(data, commentId) {
    const query =
      "UPDATE track_cycle_periods_db.notes SET cycle_id=?, note=? WHERE id=?;";

    const resPut = await db.query(query, [data.cycle_id, data.note, commentId]);
    return resPut[0];
  }

  static async deleteById(commentId) {
    const query = "DELETE FROM track_cycle_periods_db.notes WHERE id=?;";

    const resDelete = await db.query(query, [commentId]);
    return resDelete[0];
  }
}
