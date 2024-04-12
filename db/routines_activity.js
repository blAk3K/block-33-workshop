const client = require('./client')

const createRoutinesActivity = async(routineId, activityId, count) => {
  try {
    await client.query(`
    INSERT INTO routines (count, routine_id, activity_id);
    VALUES ('${count}', '${routineId}', '${activityId}')
    `)

  }catch(err){
    console.log(err)
  }
};

const getRoutinesActivity = async() => {
  try {
    const {rows} = await client.query(`
    SELECT * FROM RoutinesActivity;
    `)
  }catch(err){
    console.log(err)
  }
}
module.exports = {
  createRoutinesActivity
}
