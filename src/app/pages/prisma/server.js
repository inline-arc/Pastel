import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ error: "Email is required" });
    }

    try {
      const newUser = await prisma.waitlist.create({
        data: { email },
      });
      return res.status(201).json({ message: "Added to waitlist!", newUser });
    } catch (error) {
      return res.status(500).json({ error: "Email already exists or error saving" });
    }
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
