const express = require("express");
const env = require("dotenv");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
//environment variable or constants

//routes
const userRoutes = require("./routes/user");

env.config();

//mongodb

//mongodb+srv://root:<password>@cluster0.7g4nujn.mongodb.net/?retryWrites=true&w=majority

mongoose
  .connect(
    `mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@cluster0.7g4nujn.mongodb.net/${process.env.MONGO_DB_DATABASE}?retryWrites=true&w=majority`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("Database Connected");
  });

app.use(bodyParser());

app.use("./api", userRoutes);

// app.get("/", (req, res, nect) => {
//   res.status(200).json({
//     message: "Hello form server",
//   });
// });
// app.post("/data", (req, res, nect) => {
//   res.status(200).json({
//     message: req.body,
//   });
// });

app.listen(process.env.PORT, () => {
  console.log(`server is running on port ${process.env.PORT}`);
});
