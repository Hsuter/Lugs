const helmet = require("helmet");
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const login = require("./routes/login.js");
const register = require("./routes/register");
const productsRoute = require("./routes/products.js");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();

dotenv.config();

app.use(cors());
app.use(
  helmet.contentSecurityPolicy({
    directives: {
      defaultSrc: ["'self'"],
      scriptSrc: ["'self'", "'unsafe-inline'", "'unsafe-eval'"],
      styleSrc: ["'self'", "'unsafe-inline'"],
      fontSrc: ["'self'"],
      imgSrc: ["'self'", "data:"],
      connectSrc: ["'self'"],
    },
  })
);
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "500mb", extended: true }));
app.use(express.json());

app.use("/api/login", login);
app.use("/api/register", register);
app.use("/api/products", productsRoute);


app.use(express.static(path.join(__dirname, "client", "build")));

// Catch-all route for client-side routing
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

//get request

const port = 8000;
const uri =
  "mongodb+srv://lugariconstituecy:lugs@cluster0.lmiae4z.mongodb.net/";

app.listen(port, console.log(`Server running on port ${port}`));

mongoose.set("strictQuery", false);

mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Mogodb conn successfull"));
