// -----------------
//    Notes Model
// -----------------

module.exports = (_db) => {
  db = _db;
  return NotesModel;
};

class NotesModel {
  static async add(data, userId) {
    const query =
      "INSERT INTO track_cycle_periods_db.notes (cycle_id, created_at, note, user_id) VALUES (?, ?, ?,?)";
    const response = await db.query(query, [
      data.cycle_id,
      data.created_at,
      data.note,
      userId,
    ]);
    return response[0];
  }

  static async getAllData(userId) {
    const query = "SELECT * FROM track_cycle_periods_db.notes WHERE user_id=?;";

    const response = await db.query(query, [userId]);
    return response;
  }

  static async getById(commentId, userId) {
    const query =
      "SELECT * FROM track_cycle_periods_db.notes WHERE id=? AND user_id=?;";

    const resGet = await db.query(query, [commentId, userId]);
    return resGet[0];
  }

  static async getByCycleId(cycleId, userId) {
    const query =
      "SELECT * FROM track_cycle_periods_db.notes WHERE cycle_id=? AND user_id=?;";

    const resGet = await db.query(query, [cycleId, userId]);
    return resGet[0];
  }

  static async updateById(data, commentId, userId) {
    const query =
      "UPDATE track_cycle_periods_db.notes SET cycle_id=?, note=?, created_at=? WHERE id=? AND user_id=?;";

    const resPut = await db.query(query, [
      data.cycle_id,
      data.note,
      data.created_at,
      commentId,
      userId,
    ]);
    return resPut[0];
  }

  static async deleteById(commentId, userId) {
    const query =
      "DELETE FROM track_cycle_periods_db.notes WHERE id=? AND user_id=?;";

    const resDelete = await db.query(query, [commentId, userId]);
    return resDelete[0];
  }
}
