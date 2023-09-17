// -------------------
//    Symptoms Model
// -------------------

module.exports = (_db) => {
  db = _db;
  return SymptomsModel;
};

class SymptomsModel {
  static async add(data, userId) {
    const query =
      "INSERT INTO track_cycle_periods_db.symptoms_data (cycle_id, symptom_id, symptom_name, notes, created_at, user_id) VALUES (?,?,?,?,?,?)";
    const response = await db.query(query, [
      data.cycle_id,
      data.symptom_id,
      data.symptom_name,
      data.notes,
      data.created_at,
      userId,
    ]);
    return response[0];
  }

  static async getAllData(userId) {
    const query =
      "SELECT * FROM track_cycle_periods_db.symptoms_data WHERE user_id=?;";

    const response = await db.query(query, [userId]);
    return response;
  }

  static async getById(symptomId, userId) {
    const query =
      "SELECT * FROM track_cycle_periods_db.symptoms_data WHERE id=? AND user_id=?;";

    const resGet = await db.query(query, [symptomId, userId]);
    return resGet[0];
  }

  static async getByCycleId(cycleId, userId) {
    const query =
      "SELECT * FROM track_cycle_periods_db.symptoms_data WHERE cycle_id=? AND user_id=?;";

    const resGet = await db.query(query, [cycleId, userId]);
    return resGet[0];
  }

  static async updateById(data, symptomId, userId) {
    const query =
      "UPDATE track_cycle_periods_db.symptoms_data SET cycle_id=?, symptom_id=?, symptom_name=?, notes=?, created_at=? WHERE id=? AND user_id=?;";

    const resPut = await db.query(query, [
      data.cycle_id,
      data.symptom_id,
      data.symptom_name,
      data.notes,
      data.created_at,
      symptomId,
      userId,
    ]);
    return resPut[0];
  }

  static async deleteById(symptomId, userId) {
    const query =
      "DELETE FROM track_cycle_periods_db.symptoms_data WHERE id=? AND user_id=?;";

    const resDelete = await db.query(query, [symptomId, userId]);
    return resDelete[0];
  }
}
