import dotenv from "dotenv";
dotenv.config(); // ← immediately after dotenv import, before everything else
  console.log("API KEY:", process.env.COHERE_API_KEY); // ← add this line to check if the API key is loaded
import express from "express";
import cors from "cors";
import router from "./routes/converter";
const app = express();

app.use(express.json());
app.use(cors());
app.use("/convert", router);

app.get("/", (req, res) => {
  res.send("Hello");
});

const port = 3003;
app.listen(port, () => {
  console.log("Server is running");
});