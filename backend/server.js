const express = require("express");
const mongoose = require("mongoose");
//this mongoose debug code, comment it later
mongoose.set("debug", true);
//You can use the following format:
mongoose.set("debug", (collectionName, method, query, doc) => {
  console.log(`${collectionName}.${method}`, JSON.stringify(query), doc);
});
const cors = require("cors");

const exercisesRouter = require("./routes/exercises");
const usersRouter = require("./routes/users");
const productsRouter = require("./routes/products");
const storeorderRouter = require("./routes/storeorder");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use("/exercises", exercisesRouter);
app.use("/users", usersRouter);
app.use("/products", productsRouter);
app.use("/storeorder", storeorderRouter);

const uri = process.env.ATLAS_URI;

mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true });
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
