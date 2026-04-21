import express, { Router } from "express";
import {  ReviewCode } from "../controllers/reviewerController";

const router: Router = express.Router();

router.post('/review', ReviewCode)

export default router;