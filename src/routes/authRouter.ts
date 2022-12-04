import { Router } from "express";
import { SignIn, SignUp } from "../controllers/authController.js";
import { validateSchemaMiddleware } from "../middlewares/validateSchema.js";
import { signInSchema, signUpSchema } from "../schemas/authSchema.js";

const router = Router();

router.post("/bubble/sign-in", validateSchemaMiddleware(signInSchema), SignIn);
router.post("/bubble/sign-up", validateSchemaMiddleware(signUpSchema), SignUp);

export default router;
