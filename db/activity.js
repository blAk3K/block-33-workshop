const client = require('./client')

const createActivity = async (activityName, activityDescription) => {
  try {
    const {rows: [id, activityName, activityDescription]} = await client.query(`
    INSERT INTO activity (name, description)
    VALUES ('${activityName}', '${activityDescription}');
   
  `);
  return {id, activityName, activityDescription}
  } catch (err) {
    console.log(err);
  }
};

const getActivity = async() => {
  try {
    const {rows} = await client.query(`
    SELECT * FROM activity;
    `)
  }catch(err){
    console.log(err)
  }
}
module.exports = {
  createActivity
}