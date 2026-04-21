import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import router from "./routes/converter";
import reviewerRouter from "./routes/reviewer"; // Import the reviewer routes

const app = express();

app.use(express.json());
app.use(cors({
  origin: ["http://localhost:3000", "https://code-shift-dev.web.app"],
  methods: ["GET", "POST", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
}));


app.use("/convert", router);
app.use("/review", reviewerRouter); // Add this line to use the reviewer routes

app.get("/", (req, res) => {
  res.send("Hello");
});

const port = process.env.PORT || 3003;
app.listen(port, () => {
  console.log("Server is running");
});