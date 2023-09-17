// ---------------------------------
//    Medical Appointments Model
// ---------------------------------

module.exports = (_db) => {
  db = _db;
  return MedicalAppointmentsModel;
};

class MedicalAppointmentsModel {
  static async add(data, userId) {
    const query =
      "INSERT INTO track_cycle_periods_db.medical_appointments (created_at, doctor_type, personal_notes, doctor_notes, user_id) VALUES (?, ?, ?, ?,?)";
    const response = await db.query(query, [
      data.created_at,
      data.doctor_type,
      data.personal_notes,
      data.doctor_notes,
      userId,
    ]);
    return response[0];
  }

  static async getAllData(userId) {
    const query =
      "SELECT * FROM track_cycle_periods_db.medical_appointments WHERE user_id=?;";

    const response = await db.query(query, [userId]);
    return response;
  }

  static async getById(appointmentId, userId) {
    const query =
      "SELECT * FROM track_cycle_periods_db.medical_appointments WHERE id=? AND user_id=?;";

    const resGet = await db.query(query, [appointmentId, userId]);
    return resGet[0];
  }

  static async updateById(data, appointmentId, userId) {
    const query =
      "UPDATE track_cycle_periods_db.medical_appointments SET  created_at=?, doctor_type=?, personal_notes=?, doctor_notes=? WHERE id=? AND user_id=?;";

    const resPut = await db.query(query, [
      data.created_at,
      data.doctor_type,
      data.personal_notes,
      data.doctor_notes,
      appointmentId,
      userId,
    ]);
    return resPut[0];
  }

  static async deleteById(appointmentId, userId) {
    const query =
      "DELETE FROM track_cycle_periods_db.medical_appointments WHERE id=? AND user_id=?;";

    const resDelete = await db.query(query, [appointmentId, userId]);
    return resDelete[0];
  }
}
