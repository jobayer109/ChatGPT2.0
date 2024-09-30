import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";

const app = express();
const port = process.env.PORT || 5000;

dotenv.config();
app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
