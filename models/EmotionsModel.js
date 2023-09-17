// -----------------
//    Emotions Model
// -----------------

module.exports = (_db) => {
  db = _db;
  return EmotionsModel;
};

class EmotionsModel {
  static async add(data, userId) {
    const query =
      "INSERT INTO track_cycle_periods_db.emotions_data (cycle_id, emotion_id, created_at, user_id) VALUES (?, ?, ?,?)";
    const response = await db.query(query, [
      data.cycle_id,
      data.emotion_id,
      data.created_at,
      userId,
    ]);
    return response[0];
  }

  static async getAllData(userId) {
    const query =
      "SELECT * FROM track_cycle_periods_db.emotions_data WHERE user_id=?;";

    const response = await db.query(query, [userId]);
    return response;
  }

  static async getById(emotionId, userId) {
    const query =
      "SELECT * FROM track_cycle_periods_db.emotions_data WHERE id=? AND user_id=?;";

    const resGet = await db.query(query, [emotionId, userId]);
    return resGet[0];
  }

  static async getByCycleId(cycleId, userId) {
    const query =
      "SELECT * FROM track_cycle_periods_db.emotions_data WHERE cycle_id=? AND user_id=?;";

    const resGet = await db.query(query, [cycleId, userId]);
    return resGet[0];
  }

  static async updateById(data, emotionId, userId) {
    const query =
      "UPDATE track_cycle_periods_db.emotions_data SET cycle_id=?, emotion_id=?, created_at=? WHERE id=? AND user_id=?;";

    const resPut = await db.query(query, [
      data.cycle_id,
      data.emotion_id,
      data.created_at,
      emotionId,
      userId,
    ]);
    return resPut[0];
  }

  static async deleteById(emotionId, userId) {
    const query =
      "DELETE FROM track_cycle_periods_db.emotions_data WHERE id=? AND user_id=?;";

    const resDelete = await db.query(query, [emotionId, userId]);
    return resDelete[0];
  }
}
