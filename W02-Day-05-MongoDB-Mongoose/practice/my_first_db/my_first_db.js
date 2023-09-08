// Create a database called 'my_first_db' 


// Create a 'students' collection with the specified document format:

db.createCollection('students', {
    validator: {
        $jsonSchema: {
            bsonType: 'object',
            required: ['name', 'home_state', 'lucky_number', 'birthday'],
            properties: {
                name: { bsonType: 'string' },
                home_state: { bsonType: 'string' },
                lucky_number: { bsonType: 'int' },
                birthday: {
                    bsonType: 'object',
                    required: ['month', 'day', 'year'],
                    properties: {
                        month: { bsonType: 'int' },
                        day: { bsonType: 'int' },
                        year: { bsonType: 'int' }
                    }
                }
            }
        }
    }
})
// Insert 5 students:

db.students.insertMany([
    {
        name: 'John Doe',
        home_state: 'California',
        lucky_number: 7,
        birthday: { month: 5, day: 12, year: 1998 },
        interests: ['coding', 'brunch', 'MongoDB']
    },
    {
        name: 'Jane Smith',
        home_state: 'Washington',
        lucky_number: 9,
        birthday: { month: 8, day: 25, year: 2000 },
        interests: ['coding', 'brunch', 'MongoDB']
    },
    {
        name: 'Alice Johnson',
        home_state: 'Texas',
        lucky_number: 4,
        birthday: { month: 3, day: 9, year: 1997 },
        interests: ['coding', 'brunch', 'MongoDB']
    },
    {
        name: 'Bob Brown',
        home_state: 'California',
        lucky_number: 2,
        birthday: { month: 10, day: 3, year: 1995 },
        interests: ['coding', 'brunch', 'MongoDB']
    },
    {
        name: 'Eve Davis',
        home_state: 'Washington',
        lucky_number: 6,
        birthday: { month: 12, day: 19, year: 1999 },
        interests: ['coding', 'brunch', 'MongoDB']
    }
])
// Get all students:
db.students.find({})

// Retrieve all students from California or Washington:

db.students.find({ $or: [{ home_state: 'California' }, { home_state: 'Washington' }] })

// Get all students whose lucky number is greater than 3:

db.students.find({ lucky_number: { $gt: 3 } })

// Get all students whose lucky number is less than or equal to 10:

db.students.find({ lucky_number: { $lte: 10 } })

// Get all students whose lucky number is between 1 and 9 (inclusive):

db.students.find({ lucky_number: { $gte: 1, $lte: 9 } })

// Add the 'interests' field to each student collection:

db.students.updateMany({}, { $set: { interests: ['coding', 'brunch', 'MongoDB'] } })

// Add some unique interests for each student:

db.students.updateOne({ name: 'John Doe' }, { $addToSet: { interests: 'hiking' } })
db.students.updateOne({ name: 'Jane Smith' }, { $addToSet: { interests: 'reading' } })
// Repeat for other students with unique interests


// Add the interest 'taxes' into someone's interest array:
db.students.updateOne({ name: 'Alice Johnson' }, { $addToSet: { interests: 'taxes' } })

// Remove the 'taxes' interest you just added:
db.students.updateOne({ name: 'Alice Johnson' }, { $pull: { interests: 'taxes' } })

// Remove all students from California:
db.students.deleteMany({ home_state: 'California' })

// Remove a student by name:
db.students.deleteOne({ name: 'Bob Brown' })

// Remove a student whose lucky number is greater than 5 (just one):
db.students.deleteOne({ lucky_number: { $gt: 5 } })

// Add a 'number_of_belts' field and set it to 0 for all students:
db.students.updateMany({}, { $set: { number_of_belts: 0 } })

// Increment the 'number_of_belts' field by 1 for all students in Washington:
db.students.updateMany({ home_state: 'Washington' }, { $inc: { number_of_belts: 1 } })

// Rename the 'number_of_belts' field to 'belts_earned':
db.students.updateMany({}, { $rename: { 'number_of_belts': 'belts_earned' } })

// Remove the 'lucky_number' field:
db.students.updateMany({}, { $unset: { lucky_number: '' } })

// Add an 'updated_on' field and set the value as the current date:
db.students.updateMany({}, { $currentDate: { updated_on: true } })