const express = require("express");
const dotenv = require("dotenv");
const app = express();

dotenv.config();

const PORT = process.env.PORT;
app.use(express.json());

const mieAyamController = require("./mieayam/mieayam.controller");

app.use("/api", mieAyamController);


app.listen(PORT, () => {
    console.log("Express API Running in Port " + PORT);
})