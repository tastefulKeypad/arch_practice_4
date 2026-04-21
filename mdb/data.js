db = db.getSiblingDB("servicedb");

const carsIds = db.cars.insertMany([
    {
        carClass: 1,
        price: 1500,
        capacity: 2,
        name: "Bugatti"
    },
    {
        carClass: 2,
        price: 800,
        capacity: 4,
        name: "Maybach"
    },
    {
        carClass: 3,
        price: 480,
        capacity: 2,
        name: "Porsche"
    },
    {
        carClass: 4,
        price: 350,
        capacity: 4,
        name: "Lexus"
    },
    {
        carClass: 4,
        price: 300,
        capacity: 4,
        name: "Tesla"
    },
    {
        carClass: 4,
        price: 285,
        capacity: 4,
        name: "Jaguar"
    },
    {
        carClass: 5,
        price: 200,
        capacity: 4,
        name: "Ford"
    },
    {
        carClass: 5,
        price: 185,
        capacity: 4,
        name: "Honda"
    },
    {
        carClass: 6,
        price: 100,
        capacity: 4,
        name: "Skoda"
    },
    
    {
        carClass: 6,
        price: 90,
        capacity: 4,
        name: "Hyundai"
    }
]).insertedIds;

const usersIds = db.users.insertMany([
    {
        email: "admin@example.com",
        name: "Admin",
        surname: "Adminovich",
        password: "$argon2id$v=19$m=65536,t=3,p=4$L/zdZeZbUgw7FVQBU3Ob9g$CIz0BUlERwmCeKhO/IK4oRFCNStqBrxYzoqNjSc01O4",
        isAdmin: true
    },
    {
        email: "user1@example.com",
        name: "Pyotr",
        surname: "Novikov",
        password: "$argon2id$v=19$m=65536,t=3,p=4$Iho8i4xAWtjahDO70/sJYw$xagc7c4SjBt+mZ19PsLdX+q7XZaqSB0HJAmkEPeCtqI",
        isAdmin: false
    },
    {
        email: "user2@example.com",
        name: "Sergei",
        surname: "Novikov",
        password: "$argon2id$v=19$m=65536,t=3,p=4$J6d2FKqciAq1ge/mAxaubA$KRJ2K2+ITyxMIiJ6+9dLkELVpLZx57kQP06XRIig0dY",
        isAdmin: false
    },
    {
        email: "user3@example.com",
        name: "Andrey",
        surname: "Kolmogorov",
        password: "$argon2id$v=19$m=65536,t=3,p=4$mQb1M4P+QriojNSNU7OD0Q$tsik2hGDTZgDbF/eCIO1nmZygCSxbEMKydeO01Zyyzk",
        isAdmin: false
    },
    {
        email: "user4@example.com",
        name: "Mikhail",
        surname: "Tal",
        password: "$argon2id$v=19$m=65536,t=3,p=4$Iho8i4xAWtjahDO70/sJYw$xagc7c4SjBt+mZ19PsLdX+q7XZaqSB0HJAmkEPeCtqI",
        isAdmin: false
    },
    {
        email: "user5@example.com",
        name: "Garry",
        surname: "Kasparov",
        password: "$argon2id$v=19$m=65536,t=3,p=4$J6d2FKqciAq1ge/mAxaubA$KRJ2K2+ITyxMIiJ6+9dLkELVpLZx57kQP06XRIig0dY",
        isAdmin: false
    },
    {
        email: "user6@example.com",
        name: "Anatoly",
        surname: "Karpov",
        password: "$argon2id$v=19$m=65536,t=3,p=4$mQb1M4P+QriojNSNU7OD0Q$tsik2hGDTZgDbF/eCIO1nmZygCSxbEMKydeO01Zyyzk",
        isAdmin: false
    },
    {
        email: "user7@example.com",
        name: "Bobby",
        surname: "Fischer",
        password: "$argon2id$v=19$m=65536,t=3,p=4$Iho8i4xAWtjahDO70/sJYw$xagc7c4SjBt+mZ19PsLdX+q7XZaqSB0HJAmkEPeCtqI",
        isAdmin: false
    },
    {
        email: "user8@example.com",
        name: "Magnus",
        surname: "Carlsen",
        password: "$argon2id$v=19$m=65536,t=3,p=4$J6d2FKqciAq1ge/mAxaubA$KRJ2K2+ITyxMIiJ6+9dLkELVpLZx57kQP06XRIig0dY",
        isAdmin: false
    },
    {
        email: "user9@example.com",
        name: "Anatoly",
        surname: "Karpov",
        password: "$argon2id$v=19$m=65536,t=3,p=4$mQb1M4P+QriojNSNU7OD0Q$tsik2hGDTZgDbF/eCIO1nmZygCSxbEMKydeO01Zyyzk",
        isAdmin: false
    }
]).insertedIds;

db.rents.insertMany([
    {
        carId: carsIds[2],
        userId: usersIds[1],
        dateStart: new Date("2023-05-01T15:00:00"),
        dateEnd: new Date("2024-05-01T15:00:00"),
        status: "Inactive"
    },
    {
        carId: carsIds[0],
        userId: usersIds[2],
        dateStart: new Date("2024-07-01T13:00:00"),
        dateEnd: new Date("2024-10-10T16:30:00"),
        status: "Inactive"
    },
    {
        carId: carsIds[3],
        userId: usersIds[3],
        dateStart: new Date("2024-05-01T15:00:00"),
        dateEnd: new Date("2024-05-10T15:00:00"),
        status: "Inactive"
    },
    {
        carId: carsIds[1],
        userId: usersIds[4],
        dateStart: new Date("2025-05-01T13:00:00"),
        dateEnd: new Date("2025-05-10T16:30:00"),
        status: "Inactive"
    },
    {
        carId: carsIds[4],
        userId: usersIds[5],
        dateStart: new Date("2026-01-01T15:00:00"),
        dateEnd: new Date("2026-01-02T12:00:00"),
        status: "Inactive"
    },
    {
        carId: carsIds[8],
        userId: usersIds[6],
        dateStart: new Date("2026-03-01T15:00:00"),
        dateEnd: new Date("2026-03-25T15:00:00"),
        status: "Inactive"
    },
    {
        carId: carsIds[7],
        userId: usersIds[7],
        dateStart: new Date("2026-04-01T12:00:00"),
        dateEnd: new Date("2026-04-18T12:00:00"),
        status: "Active"
    },
    {
        carId: carsIds[5],
        userId: usersIds[8],
        dateStart: new Date("2026-04-01T14:00:00"),
        dateEnd: new Date("2026-04-19T17:00:00"),
        status: "Active"
    },
    {
        carId: carsIds[6],
        userId: usersIds[9],
        dateStart: new Date("2026-04-01T17:25:00"),
        dateEnd: new Date("2026-04-27T17:25:00"),
        status: "Active"
    },
    {
        carId: carsIds[9],
        userId: usersIds[1],
        dateStart: new Date("2026-04-01T17:25:00"),
        dateEnd: new Date("2026-05-10T17:20:00"),
        status: "Active"
    },
]);
