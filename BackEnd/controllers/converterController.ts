import { Request, Response } from "express";
import { translateCode } from "../aiService/aiService";

export const convertCode = async(req: Request, res: Response) => {
    const {from , to, code} = req.body;
    if(!from || !to || !code){
        return res.status(400).json({message: "Missing required fields"});
    }
    try{
        const result = await translateCode(from, to, code);
    res.status(200).json({result});
    }
    catch(error) {
    console.log(error);
    res.status(500).json({ message: "Error converting code" });
}
    
}