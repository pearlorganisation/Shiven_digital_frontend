import {
  UserApiResponseSchema,
  type UserApiResponseType,
} from "@/schemas/user/userSchema";
import instance from "../lib/apiClient";
import {
  EmptyApiResponseSchema,
  type EmptyApiResponse,
} from "@/schemas/common/schema";

class AuthService {
  // --- Login ---
  async login(payload: {
    email: string;
    password: string;
  }): Promise<UserApiResponseType> {
    try {
      const { data } = await instance.post(`/auth/login`, payload);

      // ✅ Validate response with Zod
      console.log("Login response data:", data);
      return UserApiResponseSchema.parse(data);
    } catch (error) {
      console.error("Login failed:", error);
      throw error;
    }
  }

  // --- Logout ---
  async logout(): Promise<EmptyApiResponse> {
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
