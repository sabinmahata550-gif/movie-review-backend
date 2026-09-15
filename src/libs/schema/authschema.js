import z, { maxLength, minLength, regex } from "zod";

import { emailRegex,passwordRegex } from "../../constants/authRegex.js";


export const registerSchema = z.object({
  name: z
    .string({ error: "Name is required" })
    .check(
      minLength(3, "Name must be at least 3 characters"),
      maxLength(50, "Name must be less than 50 characters")
    )
    .trim(),

  email: z
    .string({ error: "Email is required" })
    .regex(emailRegex, {
      error: "Invalid email address",
    })
    .trim()
    .toLowerCase(),

  phone: z
    .string({ error: "Phone is required" })
    .check(
      minLength(10, "Phone must be 10 digits"),
      maxLength(10, "Phone must be 10 digits")
    ),

  password: z
    .string({ error: "Password is required" })
    .check(
      minLength(8, "Password must be at least 8 characters"),
      regex(passwordRegex, {
        error:
          "Password must contain lowercase, uppercase, number and special character",
      })
    ),
});



export const loginSchema = z.object({
  email: z
    .string({ error: "Email is required" })
    .regex(emailRegex, {
      error: "Invalid email address",
    })
    .trim()
    .toLowerCase(),

  password: z
    .string({ error: "Password is required" })
    .min(1, "Password is required"),
});