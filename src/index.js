const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const app = express();

let corsOptions  = {
    origin: "http://localhost:2000"
}

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