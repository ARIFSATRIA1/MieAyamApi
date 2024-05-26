const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const app = express();
const rateLimit = require("express-rate-limit")


const limiter = rateLimit({
    windowsMs: 10 * 60 * 1000,
    limit: 75,
    standardHeaders: 'draft-7',
    legacyHeaders: false,
})



let corsOptions  = {
    origin: "http://localhost:2000"
}


app.use(limiter)
app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: true}));

dotenv.config();

const PORT = process.env.PORT;
app.use(express.json());

const mieAyamController = require("./mieayam/mieayam.controller");

app.use("/api", mieAyamController);


app.listen(PORT, () => {
    console.log("Express API Running in Port " + PORT);
})

module.exports = app;