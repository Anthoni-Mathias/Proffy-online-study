const subjects = [
    
    "Arts",
    "Biology",
    "Science",
    "Physical education",
    "Physics",
    "Geography",
    "History",
    "Maths",
    "English",
    "Chemistry",
]

const weekdays = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
]
   
function getSubject(subjectNumber) {
    const position = +subjectNumber - 1
    return subjects[position]
}

function convertHoursToMinutes(time) {
   const [hour, minutes] = time.split(":")
   return Number((hour * 60) + minutes)
}

module.exports = {
    subjects,
    weekdays,
    getSubject,
    convertHoursToMinutes
}