const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();
const env = require('node-env-file');
const session = require("express-session");
const cookieParser = require("cookie-parser");
const MongoStore = require("connect-mongo")(session);
const moment = require("moment");

module.exports = function (mongoose, version) {
  env("./.env");

  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(cookieParser());
  app.use(bodyParser.json());

  app.use("/public", express.static("public"));
  app.use("/js_assets", express.static(`src/${version}/assets/js`));
  app.get("/layouts/", function (req, res) {
    res.render("view", { extractScripts: true });
  });

  var expressLayouts = require("express-ejs-layouts");
  app.set("views", path.join(__dirname, `src/${version}/views`));
  app.set("view engine", "ejs");
  app.use(expressLayouts);

  var main_config = require("./config/main")(process.env.PORT, version);
  app.locals = main_config;
  global.base_url = process.env.BASE_URL;
  // global.auth_base_url = process.env.BASE_URL + 'admin_kavachapp/';
  // global.super_admin_base_url = process.env.BASE_URL + 'super_admin/';
  // global.admin_base_url = process.env.BASE_URL + 'admin/';
  global.locals = main_config;
  global.moment = moment;
  global.__dirname = __dirname;
  global.__lang_path = path.join(__dirname, `src/${version}/language/`);
  global.trans = require(`./src/${version}/helpers/LanguageHelper`);

  var dd = new Date();
  var cookieTime = dd.getTime() + 60 * 10e8;
  var session_obj = {
    name: "app.admin",
    secret: "kavachAdmin",
    resave: false,
    saveUninitialized: true,
    store: new MongoStore({ mongooseConnection: mongoose.connection }),
    cookie: { expires: new Date(cookieTime), maxAge: cookieTime },
  };
  app.use(session(session_obj));
  const cors = require("cors");
  app.use(cors());

  app.use(function (req, res, next) {
    const allowedOrigins = ["*"];
    const origin = req.headers.origin;
    if (allowedOrigins.includes(origin)) {
      res.setHeader("Access-Control-Allow-Origin", origin);
    }
    global.currentLang =
      req.headers.lang == undefined || req.headers.lang == ""
        ? "en"
        : req.headers.lang;
    if (typeof req.session.user != "undefined" && req.session.user._id) {
      res.locals.user = req.session.user;
      global.locals.websiteImage =
        base_url + "public/assets/images/logo-text.png";
    }
    next();
  });

  return app;
};
