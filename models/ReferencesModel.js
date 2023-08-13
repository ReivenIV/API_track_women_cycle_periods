// -----------------
//    Notes Model
// -----------------

module.exports = (_db) => {
  db = _db;
  return ReferencesModel;
};

class ReferencesModel {


  static async getAllActivitiesReferences() {
    const query = "SELECT * FROM track_cycle_periods_db.activities_reference;";

    const response = await db.query(query, []);
    return response;
  }
  static async getAllDataEmotionsReferences() {
    const query = "SELECT * FROM track_cycle_periods_db.emotions_reference;";

    const response = await db.query(query, []);
    return response;
  }

}
