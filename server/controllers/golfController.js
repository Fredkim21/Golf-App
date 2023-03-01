const { query } = require('../models/golfModels');


const golfController = {};

golfController.getAllDrills = async () => {
  try {
    const { rows } = await query('SELECT * FROM drills');
    return rows;
  } catch (err) {
    console.log(err.message);
  }
};

golfController.getSingleDrill = async (drillId) => {
  try {
    const result = await query('SELECT * FROM drills WHERE drill_id = $1', [drillId]);
    return result.rows[0];
  } catch (err) {
    console.error(err.message);
  }
};

golfController.addNewDrill = async (newDrill) => {
  try {
    const { drill_info, name, skillLevel, category } = newDrill;
    const result = await query(
      'INSERT INTO drills (drill_info, name, skillLevel, category) VALUES ($1, $2, $3, $4) RETURNING *',
      [drill_info, name, skillLevel, category]
    );
    return result.rows[0];
  } catch (err) {
    console.log(err.message);
  }
};

golfController.updateDrill = async (drillId, updatedDrill) => {
  try {
    const { drill_info, name, skillLevel, category } = updatedDrill;
    const result = await query(
      'UPDATE drills SET drill_info = $1, name = $2, skillLevel = $3, category = $4 WHERE drill_id = $5 RETURNING *',
      [drill_info, name, skillLevel, category, drillId]
    );
    return result.rows[0];
  } catch (err) {
    console.error(err.message);
  }
};

module.exports = golfController;