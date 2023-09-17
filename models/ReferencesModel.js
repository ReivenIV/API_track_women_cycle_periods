// -----------------
//    Notes Model
// -----------------

module.exports = (_db) => {
  db = _db;
  return ReferencesModel;
};

class ReferencesModel {
  static async getActivitiesReferences() {
    const query = "SELECT * FROM track_cycle_periods_db.activities_reference;";

    const response = await db.query(query, []);
    return response;
  }
  static async getEmotionsReferences() {
    const query = "SELECT * FROM track_cycle_periods_db.emotions_reference;";

    const response = await db.query(query, []);
    return response;
  }

  static async getFoodTendencyReferences() {
    const query =
      "SELECT * FROM track_cycle_periods_db.food_tendency_reference;";

    const response = await db.query(query, []);
    return response;
  }

  static async getSymptomsReferences() {
    const query = "SELECT * FROM track_cycle_periods_db.symptoms_reference;";

    const response = await db.query(query, []);
    return response;
  }
}
