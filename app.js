import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import path from "path";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

app.use(express.static(path.join(process.cwd(), "public")));

app.get("/api/key", (req, res) => {
  res.json({ apiKey: process.env.API_KEY });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
