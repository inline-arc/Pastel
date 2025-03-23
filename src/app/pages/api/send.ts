import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  try {
    const { email } = req.body;

    if (!email || !email.includes("@")) {
      return res.status(400).json({ error: "Invalid email" });
    }

    // Store email in Neon Postgres using Prisma
    await prisma.waitlist.create({
      data: { email },
    });

    return res.status(200).json({ message: "Email added successfully!" });
  } catch (error) {
    return res.status(500).json({ error: "Internal Server Error" });
  }
}
