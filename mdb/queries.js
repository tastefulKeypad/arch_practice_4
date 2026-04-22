db = db.getSiblingDB("servicedb");

// ===================== USER FUNCTIONS =====================
function CreateUser(uEmail, uName, uSurname, uPassword, uIsAdmin = false) {
    const result = db.users.insertOne({
        email: uEmail,
        name: uName,
        surname: uSurname,
        password: uPassword,
        isAdmin: uIsAdmin
    });
    return db.users.findOne(
        {_id: result.insertedId},
        {password: 0}
    );
}

function GetAllUsers() {
    return db.users.find(
        {},
        {password: 0}
    ).sort({_id: 1}).toArray();
}

function GetUserByEmail(uEmail) {
    return db.users.findOne(
        {email: uEmail},
        {password: 0}
    );
}

function GetUserByNameAndSurname(uName, uSurname) {
    return db.users.find(
        {
            name: {$regex: uName, $options: "i"}, 
            surname: {$regex: uSurname, $options: "i"}  
        },
        {password: 0}
    ).sort({_id: 1}).toArray();
}

// ===================== CARS FUNCTIONS =====================
function CreateCar(cCarClass, cPrice, cCapacity, cName) {
    const result = db.cars.insertOne({
        carClass: cCarClass,
        price: cPrice,
        capacity: cCapacity,
        name: cName
    });
    return db.cars.findOne({_id: result.insertedId});
}

function GetAllCars() {
    return db.cars.find().sort({_id: 1}).toArray();
}

function GetCarByClass(cCarClass) {
    return db.cars.find({carClass: cCarClass}).sort({_id: 1}).toArray();
}

function GetAvailableCars(cStartDate, cEndDate) {
    const rentedCars = db.rents.distinct("carId", {
        status: "Active",
        dateStart: {$lt: cEndDate},
        dateEnd: {$gt: cStartDate}
    });
    return db.cars.find(
        {_id: {$nin: rentedCars}}
        ).sort({_id: 1}).toArray();
}

// ===================== RENTS FUNCTIONS =====================
function CreateRent(rCarId, rUserId, rDateStart, rDateEnd, rStatus) {
    const result = db.rents.insertOne({
        carId: rCarId,
        userId: rUserId,
        dateStart: rDateStart,
        dateEnd: rDateEnd,
        status: rStatus
    });
    return db.rents.findOne({_id: result.insertedId});
}

function GetRentActiveByUserId(rUserId) {
    return db.rents.find({
        userId: rUserId,
        status: "Active"
    }).sort({dateStart: 1}).toArray();
}

function GetRentHistoryByUserId(rUserId) {
    return db.rents.find({
        userId: rUserId
    }).sort({dateStart: 1}).toArray();
}

function UpdateRentStatusToInactive(rId) {
    const result = db.rents.updateOne(
        {_id: rId, status: "Active"},
        {$set: {status: "Inactive"}}
    );
    return (result.modifiedCount > 0) ? 
        db.rents.findOne({_id: rId}) : null;
}
