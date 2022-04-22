const express = require("express");
require("./db/mongoose");
const userRouter = require("./routers/user");
const hbs = require("hbs");

const app = express();
const port = process.env.PORT || 3001;

const cookieParser = require("cookie-parser");
app.set("view engine", "hbs");

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(express.json());
app.use(userRouter);

app.listen(port, () => {
  console.log("Server is up on port " + port);
});
