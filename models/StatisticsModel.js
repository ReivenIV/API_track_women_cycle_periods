// ---------------------
//    Statistics Model
// ---------------------


const ActivitiesModel = require("./ActivitiesModel.js");
const CervixModel = require("./CervixModel.js");
const EmotionsModel = require("./EmotionsModel.js");
const NotesModel = require("./NotesModel.js");
const TemperatureModel = require("./TemperatureModel.js");

module.exports = (_db) => {
  return new StatisticsModel(_db);
};

class StatisticsModel {
  constructor(db) {
    this.db = db;
    this.activitiesModel = ActivitiesModel(db);
    this.notesModel = NotesModel(db);
    this.cervixModel = CervixModel(db);
    this.emotionsModel = EmotionsModel(db);
    this.temperatureModel = TemperatureModel(db);
  }

  async getDataByCycleId(cycle_id, userId) {
    const [resActivities, resNotes, resCervix, resEmotions, resTemperature] =
      await Promise.all([
        this.activitiesModel.getByCycleId(cycle_id, userId),
        this.notesModel.getByCycleId(cycle_id, userId),
        this.cervixModel.getByCycleId(cycle_id, userId),
        this.emotionsModel.getByCycleId(cycle_id, userId),
        this.temperatureModel.getByCycleId(cycle_id, userId),
      ]);

    let all_data = {
      activities_data: resActivities,
      notes_data: resNotes,
      cervix_data: resCervix,
      emotions_data: resEmotions,
      temperature_data: resTemperature,
    };
    return all_data;
  }
}
