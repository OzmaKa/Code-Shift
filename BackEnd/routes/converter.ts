import express, { Router } from "express";
import { convertCode } from "../controllers/converterController";

const router: Router = express.Router();

router.post('/converter', convertCode)

export default router;