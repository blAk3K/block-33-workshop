const client = require('./client');

const createRoutine = async(routineName, isPublic, routineGoal) => {
  try{ 
   const {rows: [id, isRoutinePublic, routineName, routineGoal]} = await client.query(`
    INSERT INTO routines (name, is_public, goal)
    VALUES ('${routineName}', ${isPublic}, '${routineGoal}');

    `);
    return {id, isRoutinePublic, routineName, routineGoal}
  }catch (err) {
  console.log(err)
  }
};

const getRoutines = async() => {
  try {
    const {rows} = await client.query(`
    SELECT * FROM routines;
    `)
  }catch(err){
    console.log(err)
  }
}
module.exports = {
  createRoutine
}