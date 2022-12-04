import { Router } from "express";
import { validateSchemaMiddleware } from "../middlewares/validateSchema.js";
import { signInSchema, signUpSchema } from "../schemas/authSchema.js";

const router = Router();

router.post("/bubble/sign-in", validateSchemaMiddleware(signInSchema));
router.post("/bubble/sign-up", validateSchemaMiddleware(signUpSchema));

export default router;
