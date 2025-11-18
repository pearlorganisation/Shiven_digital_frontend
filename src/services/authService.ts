import {
  UserApiResponseSchema,
  type UserApiResponseType,
} from "@/schemas/user/userSchema";
import instance from "../lib/apiClient";
import {
  EmptyApiResponseSchema,
  type EmptyApiResponseType,
} from "@/schemas/common/schema";

class AuthService {
  // --- Login ---
  async login(payload: {
    email: string;
    password: string;
  }): Promise<UserApiResponseType> {
    try {
      const { data } = await instance.post(`/auth/login`, payload);

      return UserApiResponseSchema.parse(data);
    } catch (error) {
      console.error("Login failed:", error);
      throw error;
    }
  }

  async register(payload: {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    role: string;
  }): Promise<EmptyApiResponseType> {
    try {
      const { data } = await instance.post(`/auth/register`, payload);
      return EmptyApiResponseSchema.parse(data);
    } catch (err) {
      console.error("Register failed:", err);
      throw err;
    }
  }

  // --- Forgot Password ---
  async forgotPassword(payload: { email: string }): Promise<EmptyApiResponseType> {
    try {
      const { data } = await instance.post(`/auth/forgot-password`, payload);
      return EmptyApiResponseSchema.parse(data);
    } catch (err) {
      console.error("Forgot password failed:", err);
      throw err;
    }
  }

  // --- Logout ---
  async logout(): Promise<EmptyApiResponseType> {
    try {
      const { data } = await instance.post(`/auth/logout`);

      // ✅ Validate generic response
      return EmptyApiResponseSchema.parse(data);
    } catch (error) {
      console.error("Logout failed:", error);
      throw error;
    }
  }
}

const authService = new AuthService();
export default authService;
