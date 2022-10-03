const express = require("express");
const cors = require("cors");
require("dotenv").config();
// db
const dbConnect = require("./config/dbConnect");

const portfolioRoute = require("./routes/portfolioRoute");

dbConnect();

const app = express();
app.use(express.json());
// cors
app.use(cors());

// middlewares
app.use("/api/portfolio", portfolioRoute);

// port
const port = process.env.PORT || 5656;

app.get("/", (req, res) => res.send("Welcome to the APP"));
app.listen(port, () => console.log(`Node Express Server Started at ${port}!`));
