const Database = require('./db') 
const createProffy = require('./createProffy')


Database.then(async (db) => {
    // insert datas
    proffyValue = {
        name: 'Mock',
        avatar: 'https://mock',
        whatsapp: 'mock',
        bio: 'Mock'
    }

    classValue = {
        subject: 1,
        cost: '15',
        // where proffy_id? will come to database
    }

    classScheduleValues = [
        // where class_id? will come to database 
        {
            weekday: 0,
            time_from: 720,
            time_to: 1220
        },
        {
            weekday: 0,
            time_from: 820,
            time_to: 1820
        }
    ]

    // await createProffy (db, {proffyValue, classValue, classScheduleValues})

    // consult insert datas 

    // all proffys
    const selectedProffys = await db.all("SELECT * FROM proffys")
    // console.log(selectedProffys)

    //consult one proffy classses, and bring datas 
    const selectClassesAndProffys = await db.all(`
        SELECT classes.*, proffys.*
        FROM proffys 
        JOIN classes ON (classes.proffy_id = proffys.id)
        WHERE classes.proffy_id = 1;
    `)
    // console.log(selectedProffys)

    // time the people work, for example, is 8am to 18pm
    // time time_from - 8am, need to be small or ecqual to time required 
    // time time_to   - 18pm, need to be above 
    const selectClassesSchedules = await db.all(`
        SELECT class_schedule.*
        FROM class_schedule
        WHERE class_schedule.class_id = "1"
        AND class_schedule.weekday = "0"
        AND class_schedule.time_from <= "720" 
        AND class_schedule.time_to > "720"
    `)

    console.log(selectClassesSchedules)
})