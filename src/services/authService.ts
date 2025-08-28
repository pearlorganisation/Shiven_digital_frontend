import { AuthResponseSchema, type AuthResponse } from "@/schemas/user/userSchema";
import instance from "../lib/apiClient";

class AuthService {
  async login(payload: { email: string; password: string }): Promise<AuthResponse> {
    try {
      const {data} =  await instance.post(`/auth/login`, payload);
      return AuthResponseSchema.parse(data);
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}

const authService = new AuthService();

export default authService;
