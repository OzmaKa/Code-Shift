import { Request, Response } from "express";
import { reviewCode } from "../aiService/reviewService";
export const ReviewCode = async (req: Request, res: Response) => {
  const { language, code } = req.body;
  if (!code || !language) {
    return res.status(400).json({ message: "Missing required fields" });
  }
try {
    const result = await reviewCode(language, code);
    res.status(200).json(result);
} catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error reviewing code" });
}
};
