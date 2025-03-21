const express = require("express");
const cors = require("cors");
const { PrismaClient } = require("@prisma/client");
const dotenv = require("dotenv");

dotenv.config();
const app = express();
const prisma = new PrismaClient();

app.use(express.json());
app.use(cors({ origin: "http://localhost:3000" }));

app.post("/api/waitlist", async (req:any, res:any) => {
  try {
    const { email } = req.body;
    if (!email) return res.status(400).json({ error: "Email is required" });

    const newEntry = await prisma.waitlist.create({ data: { email } });
    return res.status(201).json({ message: "Added to waitlist", newEntry });
  } catch (error) {
    console.error("Error adding to waitlist:", error);
    return res.status(500).json({ error: "Failed to add to waitlist" });
  }
});

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});
