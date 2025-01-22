const mongoose = require("mongoose");
const Movie = require("./models/Movie");
require("dotenv").config();

const seedData = [
    {
        name: "Harry Potter and the Order of the Phoenix",
        img: "https://bit.ly/2IcnSwz",
        summary:
            "Harry Potter and Dumbledore's warning about the return of Lord Voldemort is not heeded...",
    },
    {
        name: "The Lord of the Rings: The Fellowship of the Ring",
        img: "https://bit.ly/2tC1Lcg",
        summary:
            "A young hobbit, Frodo, who has found the One Ring that belongs to the Dark Lord Sauron...",
    },
    {
        name: "Avengers: Endgame",
        img: "https://bit.ly/2Pzczlb",
        summary:
            "Adrift in space with no food or water, Tony Stark sends a message to Pepper Potts...",
    },
];

mongoose
    .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(async () => {
        console.log("MongoDB connected");
        await Movie.deleteMany({});
        await Movie.insertMany(seedData);
        console.log("Database seeded!");
        process.exit();
    })
    .catch((err) => console.error("Error:", err));
