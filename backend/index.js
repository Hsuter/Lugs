const helmet = require("helmet");
const express = require("express");
const cors = require("cors");
const app = express();
const axios = require("axios");

const options = {
  method: "GET",
  url: "https://newsdata.io/api/1/news?apikey=pub_23206f554d5c9daf754ab158d36a80c9ff3e7&q=kenya&country=ke",
  headers: {
    "X-RapidAPI-Key": "59037cf1fcmshba9ceea6063766cp196fcajsna2e6a26eb492",
    "X-RapidAPI-Host": "newsdata2.p.rapidapi.com",
  },
};

const fetchData = async () => {
  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

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

// Endpoint to fetch the data
app.get("/api/news", async (req, res) => {
  try {
    const data = await fetchData();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

const port = process.env.PORT || 8000;
const uri = process.env.DB_URI;

app.listen(port, console.log(`Server running on port ${port}`));
