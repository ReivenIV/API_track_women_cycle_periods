// -----------------
//    Notes Model
// -----------------

module.exports = (_db) => {
  db = _db;
  return ReferencesModel;
};

  
let queryGetActivitiesReferences = "SELECT * FROM track_cycle_periods_db.activities_reference;";
let queryGetEmotionsReferences = "SELECT * FROM track_cycle_periods_db.emotions_reference;";
let queryGetFoodTendencyReferences = "SELECT * FROM track_cycle_periods_db.food_tendency_reference;";
let queryGetSymptomsReferences = "SELECT * FROM track_cycle_periods_db.symptoms_reference;";
  
class ReferencesModel {
  

  
  static async getActivitiesReferences() {
    const response = await db.query(queryGetActivitiesReferences, []);
    return response;
  }
  static async getEmotionsReferences() {
    const response = await db.query(queryGetEmotionsReferences, []);
    return response;
  }

  static async getFoodTendencyReferences() {
    const response = await db.query(queryGetFoodTendencyReferences, []);
    return response;
  }

  static async getSymptomsReferences() {
    const response = await db.query(queryGetSymptomsReferences, []);
    return response;
  }

  
}
