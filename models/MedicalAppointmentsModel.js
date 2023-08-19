// -----------------
//    Notes Model
// -----------------

module.exports = (_db) => {
  db = _db;
  return MedicalAppointmentsModel;
};

class MedicalAppointmentsModel {
  static async add(data) {
    const query =
      "INSERT INTO track_cycle_periods_db.medical_appointments (created_at, doctor_type, personal_notes, doctor_notes) VALUES (?, ?, ?, ?)";
    const response = await db.query(query, [
      data.created_at,
      data.doctor_type,
      data.personal_notes,
      data.doctor_notes,
    ]);
    return response[0];
  }

  static async getAllData() {
    const query = "SELECT * FROM track_cycle_periods_db.medical_appointments;";

    const response = await db.query(query, []);
    return response;
  }

  static async getById(appointmentId) {
    const query =
      "SELECT * FROM track_cycle_periods_db.medical_appointments WHERE id=?;";

    const resGet = await db.query(query, [appointmentId]);
    return resGet[0];
  }

  static async updateById(data, appointmentId) {
    const query =
      "UPDATE track_cycle_periods_db.medical_appointments SET  created_at=?, doctor_type=?, personal_notes=?, doctor_notes=? WHERE id=?;";

    const resPut = await db.query(query, [
      data.created_at,
      data.doctor_type,
      data.personal_notes,
      data.doctor_notes,
      appointmentId,
    ]);
    return resPut[0];
  }

  static async deleteById(appointmentId) {
    const query =
      "DELETE FROM track_cycle_periods_db.medical_appointments WHERE id=?;";

    const resDelete = await db.query(query, [appointmentId]);
    return resDelete[0];
  }
}
