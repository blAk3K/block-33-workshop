const client = require('./client')
const {createRoutine} = require ('./routines')
const {createActivity} = require ('./activity')
const {createRoutinesActivity} = require('./routines_activity')

const createTables = async() => {
  try{
    await client.query(`
    CREATE TABLE routines (
      id SERIAL PRIMARY KEY,
      name VARCHAR(30) NOT NULL,
      is_public BOOLEAN NOT NULL,
      goal TEXT NOT NULL
    );

    CREATE TABLE activity (
      id SERIAL PRIMARY KEY,
      name VARCHAR(30) NOT NULL,
      description TEXT NOT NULL
    );

    CREATE TABLE routines_activity (
      id SERIAL PRIMARY KEY,
       routine_id int NOT NULL,
       activity_id int NOT NULL
    );



    
    `)
  } catch(err) {
    console.log(err)
  }
}

const dropTables = async() => {
  try {
    await client.query(`
    DROP TABLE IF EXISTS routines;
    DROP TABLE IF EXISTS activity;
    DROP TABLE IF EXISTS routines_activity
    `)
  }catch (err){
  console.log(err)
  }
}

const intDataSeed = async() => {

await client.connect()
console.log('hi')

await dropTables();
console.log(`TABELS DROPPED`)
 
await createTables();
console.log(`TABELS CREATED`)

await createRoutine('leg day', true, 'get bigger')
await createRoutine('arm day', false, 'get bigger')
await createRoutine('chest day', true, 'git slim')
await createRoutine('back day', false, 'tone')

await createActivity('squats', 'bend legs up and down')
await createActivity('curls', 'grab weight and curl it')
await createActivity('crunch', 'laydown and use stomac to pull you body up ')
await createActivity('pushups', 'plank position and use arms to push up and down')



}

intDataSeed()





















