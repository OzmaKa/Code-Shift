import { Request, Response } from "express";
import { streamTranslateCode } from "../aiService/aiService";

export const convertCode = async (req: Request, res: Response) => {
  const { from, to, code } = req.body;
  if (!from || !to || !code) {
    return res.status(400).json({ message: "Missing required fields" });
  }
  try {
    // Manually set CORS for streaming response
    res.setHeader("Access-Control-Allow-Origin", "https://code-shift-dev.web.app");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    
    // Set headers for SSE
    res.setHeader("Content-Type", "text/event-stream");
    res.setHeader("Cache-Control", "no-cache");
    res.setHeader("Connection", "keep-alive");

    await streamTranslateCode(from, to, code, (chunk) => {
      res.write(`data: ${JSON.stringify({ chunk })}\n\n`);
    });

    res.write(`data: ${JSON.stringify({ done: true })}\n\n`);
    res.end();
  } catch (error) {
    res.status(500).json({ message: "Error converting code" });
  }
};