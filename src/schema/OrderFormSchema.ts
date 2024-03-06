import { z } from "zod";

export const orderFormSchema = z
  .object({
    name: z
      .string({
        required_error: "Name is required",
        invalid_type_error: "Name must be a string",
      })
      .min(3),
    email: z.string().email({ message: "Invalid email address" }),
    city: z.string().min(5),
    zip: z
      .string()
      .regex(/^\d{5}(-\d{4})?$/)
      .refine((val) => val.length === 5 || val.length === 10, {
        message: "Invalid ZIP code format",
      }),
    area: z.string().min(5),
    address: z.string().min(5),
    shipping: z.string(),
    payment: z.string(),
    instructions: z.string(),
    onlineMethod: z.string(),
  })
  .required();
