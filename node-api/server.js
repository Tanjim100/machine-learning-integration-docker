const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('My Server is running');
})

app.get("/api/predict", (req, res) => {
  res.send('This is the prediction server. ');
})

app.post("/api/predict", async (req, res) => {
  try {
    console.log(req.body);
    const response = await axios.post("http://ml-api:8000/predict", req.body);
    res.json(response.data);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: "Prediction service failed." });
  }
});

const PORT = 5001;
app.listen(PORT, () => console.log(`Node.js API running on port http://localhost:${PORT}`));
