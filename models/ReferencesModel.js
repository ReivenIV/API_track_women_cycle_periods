// ---------------------
//    References Model
// ---------------------

module.exports = (_db) => {
  db = _db;
  return ReferencesModel;
};

  
let queryGetActivitiesReferences = "SELECT * FROM track_cycle_periods_db.activities_reference;";
let queryGetEmotionsReferences = "SELECT * FROM track_cycle_periods_db.emotions_reference;";
let queryGetFoodTendencyReferences = "SELECT * FROM track_cycle_periods_db.food_tendency_reference;";
let queryGetSymptomsReferences = "SELECT * FROM track_cycle_periods_db.symptoms_reference;";
  
class ReferencesModel {
    constructor(db) {
    this.db = db;
  }
  
  static async getActivitiesReferences() {
    const response = await db.query(queryGetActivitiesReferences, []);
    return response[0];
  }
  static async getEmotionsReferences() {
    const response = await db.query(queryGetEmotionsReferences, []);
    return response[0];
  }

  static async getFoodTendencyReferences() {
    const response = await db.query(queryGetFoodTendencyReferences, []);
    return response[0];
  }

  static async getSymptomsReferences() {
    const response = await db.query(queryGetSymptomsReferences, []);
    return response[0];
  }

  

//! Test here

  static async getAllReferences() {
    const [resActivitiesReferences, resEmotionsReferences, resFoodTendencyReferences, resSymptomsReferences] =
      await Promise.all([
        ReferencesModel.getActivitiesReferences(),
        ReferencesModel.getEmotionsReferences(),
        ReferencesModel.getFoodTendencyReferences(),
        ReferencesModel.getSymptomsReferences(),
      ]);

    let all_data = {
      activities_references_data: resActivitiesReferences,
      emotions_references_data: resEmotionsReferences,
      food_tendency_references_data: resFoodTendencyReferences,
      symptoms_references_data: resSymptomsReferences,
    };
    return all_data;
  }
}

