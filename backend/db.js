const mongoose = require("mongoose");
const mongoURI =
  "mongodb://localhost:27017/inotebook?readPreference=primaryPreferred&tls=false&directConnection=true";

const connectToMongo = async () => {
  try {
    mongoose.set("strictQuery", false);
    await mongoose.connect(mongoURI);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error(error);
    process.exit(1); // Exit the process if connection fails
  }
};

module.exports = connectToMongo;
