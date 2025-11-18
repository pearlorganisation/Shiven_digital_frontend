import { z } from "zod";
import { createApiResponseSchema } from "../common/schema";

// --- Schemas (runtime validation) ---
const UserSchema = z.object({
  _id: z.string(),
  firstName: z.string(),
  lastName:z.string(),
  email: z.string().email(),
  role: z.string(),
});

// API response schema that wraps user (runtime check)
export const UserApiResponseSchema = createApiResponseSchema(
  z.object({
     user: UserSchema.nullable(), 
  })
);

// --- Types (static typing) ---
export type UserType = z.infer<typeof UserSchema>;              // For Redux, props, state 
export type UserApiResponseType = z.infer<typeof UserApiResponseSchema>; // For API calls for login
