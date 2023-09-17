// ------------------------
//    Food Tendency Model
// ------------------------

module.exports = (_db) => {
  db = _db;
  return FoodTendencyModel;
};

class FoodTendencyModel {
  static async add(data, userId) {
    const query =
      "INSERT INTO track_cycle_periods_db.food_tendency_data (cycle_id, food_tendency_id, food_tendency_name, notes, created_at, user_id) VALUES (?,?,?,?,?,?)";
    const response = await db.query(query, [
      data.cycle_id,
      data.food_tendency_id,
      data.food_tendency_name,
      data.notes,
      data.created_at,
      userId,
    ]);
    return response[0];
  }

  static async getAllData(userId) {
    const query =
      "SELECT * FROM track_cycle_periods_db.food_tendency_data WHERE user_id=?;";

    const response = await db.query(query, [userId]);
    return response;
  }

  static async getById(weightId, userId) {
    const query =
      "SELECT * FROM track_cycle_periods_db.food_tendency_data WHERE id=? AND user_id=?;";

    const resGet = await db.query(query, [weightId, userId]);
    return resGet[0];
  }

  static async getByCycleId(cycleId, userId) {
    const query =
      "SELECT * FROM track_cycle_periods_db.food_tendency_data WHERE cycle_id=? AND user_id=?;";

    const resGet = await db.query(query, [cycleId, userId]);
    return resGet[0];
  }

  static async updateById(data, foodTendencyId, userId) {
    const query =
      "UPDATE track_cycle_periods_db.food_tendency_data SET cycle_id=?, food_tendency_id=?, food_tendency_name=?, notes=?,created_at=? WHERE id=? AND user_id=?;";

    const resPut = await db.query(query, [
      data.cycle_id,
      data.food_tendency_id,
      data.food_tendency_name,
      data.notes,
      data.created_at,
      foodTendencyId,
      userId,
    ]);
    return resPut[0];
  }

  static async deleteById(foodTendencyId, userId) {
    const query =
      "DELETE FROM track_cycle_periods_db.food_tendency_data WHERE id=? AND user_id=?;";

    const resDelete = await db.query(query, [foodTendencyId, userId]);
    return resDelete[0];
  }
}
