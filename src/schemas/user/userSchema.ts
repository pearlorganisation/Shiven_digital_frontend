import { z } from "zod";

export const LoggedInUserSchema = z.object({
  _id: z.string(),
  userName: z.string(),
  password: z.string(),
});



export const LoginResponseSchema = z.object({
  data: z.object({
    user: LoggedInUserSchema,
    accessToken : z.string(), 
    refreshToken : z.string(),
    sessionId: z.string()
  }),
  message: z.string(),
});

export const RefreshTOkenSchema = z.object({
  data: z.object({
    accessToken : z.string(), 
    refreshToken : z.string(),
  }),
  success: z.boolean(),
  message: z.string(),
});

export type LoggedInUser = z.infer<typeof LoggedInUserSchema>;
export type LoginResponse = z.infer<typeof LoginResponseSchema>;