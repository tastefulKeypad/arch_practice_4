db = db.getSiblingDB("servicedb");
db.createCollection("cars", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ["carClass", "price", "capacity", "name"],
            properties: {
                "_id": {bsonType: "objectId"},
                "carClass": {
                    bsonType: "int",
                    minimum: 1
                },
                "price": {
                    bsonType: "int",
                    minimum: 1
                },
                "capacity": {
                    bsonType: "int",
                    minimum: 1
                },
                "name": {
                    bsonType: "string",
                    minLength: 1,
                    maxLength: 200
                }
            }
        }
    },
    validationLevel: "strict",
    validationAction: "error"
});



db.createCollection("users", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ["email", "name", "surname", "password", "isAdmin"],
            properties: {
                "_id": {bsonType: "objectId"},
                "email": {
                    bsonType: "string",
                    minLength: 1,
                    maxLength: 300,
                    pattern: "^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+\\.[a-zA-Z]{2,}$"
                },
                "name": {
                    bsonType: "string",
                    minLength: 1,
                    maxLength: 100
                },
                "surname": {
                    bsonType: "string",
                    minLength: 1,
                    maxLength: 100
                },
                "password": {
                    bsonType: "string",
                    minLength: 1,
                    maxLength: 300
                },
                "isAdmin": {bsonType: "bool"}
            }
        }
    },
    validationLevel: "strict",
    validationAction: "error"
});
db.users.createIndex({"email": 1}, {unique: true});



db.createCollection("rents", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ["carId", "userId", "dateStart", "dateEnd", "status"],
            properties: {
                "_id": {bsonType: "objectId"},
                "carId": {bsonType: "objectId"},
                "userId": {bsonType: "objectId"},
                "dateStart": {bsonType: "date"},
                "dateEnd": {bsonType: "date"},
                "status": {
                    bsonType: "string",
                    minLength: 1,
                    maxLength: 100
                }
            }
        },
        $expr: { $lt: ["$dateStart", "$dateEnd"] }
    },
    validationLevel: "strict",
    validationAction: "error"
});
