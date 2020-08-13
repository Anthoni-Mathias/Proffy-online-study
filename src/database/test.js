const Database = require('./db')
const createProffy = require('./createProffy')

Database.then( async (db) => {
    proffyValue = {
    name: "Anthoni Mathias", 
    avatar: "https://avatars3.githubusercontent.com/u/63785517?s=460&u=2d55bab0bcb319dcbbc68f41493ef71de0fd117d&v=4",
    whatsapp:"987563212", 
    bio:"Passionate about blowing things up in the laboratory and changing people's lives through experiments. More than 200,000 people have experienced one of my explosions.", 
    }

    classValue = {
        subject:1, 
        cost:"20",         
    }

    classScheduleValues = [
        {
            weekday: 1,
            time_from: 720,
            time_to: 1220
        },
        {
            weekday: 0,
            time_from: 520,
            time_to: 1220
        }
    ]

    //await createProffy(db, {proffyValue, classValue, classScheduleValues})
    
    //consultar dados

    //todos os proffys
    const selectedProffys = await db.all("SELECT * FROM proffys")
    //console.log(selectedProffys)

    //consultar as classes de um professor junto com os dados

    const selectClassesAndProffys = await db.all (`
        SELECT classes.*, proffys.*
        FROM proffys
        JOIN classes ON (classes.proffy_id = proffys.id)
        WHERE classes.proffy_id = 1;
    `)
    //console.log(selectClassesAndProffys)

    const selectedClassesSchedules =  await db.all(`
        SELECT  class_schedule.*
        FROM class_schedule
        WHERE class_schedule.class_id = "1"
        AND class_schedule.weekday = "0"
        AND class_schedule.time_from <= "520"
        AND class_schedule.time_to > "520"
    `)

    //console.log(selectedClassesSchedules)

})