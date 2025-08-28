import { z } from "zod";
import { ApiResponseSchema } from "../common/schema";

const UserSchema = z.object({
  _id: z.string(),
  userName: z.string(),
  email: z.string(),
  role: z.string(),
  refreshToken: z.string(),
});

const TokensSchema = z.object({
  accessToken: z.string(),
  refreshToken: z.string(),
});

const AuthDataSchema = z.object({
  user: UserSchema,
  tokens: TokensSchema,
});

 
export const AuthResponseSchema = ApiResponseSchema(AuthDataSchema);
export const TokenResponseSchema = ApiResponseSchema(TokensSchema);


export type Tokens = z.infer<typeof TokensSchema>;
export type AuthData = z.infer<typeof AuthDataSchema>;
export type AuthResponse = z.infer<typeof AuthResponseSchema>;
export type User = z.infer<typeof UserSchema>;

 