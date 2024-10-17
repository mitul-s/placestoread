import { NextApiRequest, NextApiResponse } from "next";
import { sql } from "@vercel/postgres";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const {
      userTwitter,
      suggestedBook,
      parkName,
      city,
      country,
      parkDescription,
    } = req.body;

    try {
      await sql`
        INSERT INTO places_to_read (user_twitter, suggested_book, park_name, city, country, park_description)
        VALUES (${userTwitter}, ${suggestedBook}, ${parkName}, ${city}, ${country}, ${parkDescription})
      `;
      res.status(200).json({ message: "Place submitted successfully" });
    } catch (error) {
      console.error("Error submitting place:", error);
      res.status(500).json({ message: "Error submitting place" });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
