const http = require("http");
const mongoose = require("mongoose");
const version = "v1";
const app = require("./app_express")(mongoose, version);
const cors = require("cors");

mongoose.Promise = global.Promise;
mongoose
  .connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Successfully connected to the database");
  })
  .catch((err) => {
    console.log("Could not connect to the database. Exiting now...", err);
    process.exit();
  });
mongoose.set("useCreateIndex", true);
mongoose.set("debug", false);

app.use(cors());
const admin = require("./src/v1/routes/admin.js");
app.use("/api/admin", admin);

const httpServer = http.createServer(app);

httpServer.listen(process.env.PORT, function (err) {
  console.log("listening on *:" + process.env.PORT);
});
