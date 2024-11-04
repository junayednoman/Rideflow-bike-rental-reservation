import z from "zod";
export const signValidationSchema = z.object({
  name: z.string({ required_error: "name is required!" }),
  email: z.string({ required_error: "email is required!" }),
  phone: z.string({ required_error: "phone is required!" }),
  password: z.string({ required_error: "password is required!" }),
  address: z.string({ required_error: "address is required!" }),
});
export const loginValidationSchema = z.object({
  email: z.string({ required_error: "email is required!" }),
  password: z.string({ required_error: "password is required!" }),
});