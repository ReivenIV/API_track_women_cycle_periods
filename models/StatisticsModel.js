// statisticsModel.js
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

  async getDataByCycleId(cycle_id) {
    const [resActivities, resNotes, resCervix, resEmotions, resTemperature] =
      await Promise.all([
        this.activitiesModel.getByCycleId(cycle_id),
        this.notesModel.getByCycleId(cycle_id),
        this.cervixModel.getByCycleId(cycle_id),
        this.emotionsModel.getByCycleId(cycle_id),
        this.temperatureModel.getByCycleId(cycle_id),
      ]);

    let all_data = {
      activities: resActivities,
      notes: resNotes,
      cervix: resCervix,
      emotions: resEmotions,
      temperature: resTemperature,
    };
    return all_data;
  }
}
