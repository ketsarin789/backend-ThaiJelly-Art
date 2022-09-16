const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose"); //connect to mangoDB datebase
const register = require("./routes/register")
const products = require("./products");

const app = express();

require("dotenv").config();  //go with mongoose


app.use(express.json());   
app.use(cors());

app.use("/api/register", register)

app.get("/", (req, res) => {
  res.send("Welcome to our THAIJELLYART...");
});

app.get("/products", (req, res) => {
  res.send(products);
});


const port = process.env.PORT || 8000;
const uri = process.env.DB_URI;

app.listen(port, console.log(`Server running on port ${port}`));

mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connection success..."))
  .catch((error) => console.error("MongoDB connection failed:", error.message));