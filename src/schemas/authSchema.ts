import Joi from "joi";
import { signInBody, signUpBody } from "../types/authTypes";

export const signInSchema = Joi.object<signInBody>({
  email: Joi.string().email().required(),
  password: Joi.string().min(7).required(),
});

export const signUpSchema = Joi.object<signUpBody>({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(7).required(),
  picture: Joi.string().uri().required(),
  category: Joi.string().valid("Aluno", "Professor").required(),
});
