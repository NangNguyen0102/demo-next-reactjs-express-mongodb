const mongoose = require("mongoose");
require("dotenv").config();

const connectURI = process.env.MONGO_DB_URI;

mongoose.set("useCreateIndex", true);

const connect = async () => {
  try {
    await mongoose.connect(connectURI, {
      //useNewUrlParser: true,
      //useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    });

    console.log("Connected to database");
  } catch (e) {
    console.log(`An error occured ${e.message}`);
  }
};

module.exports = connect;
