import instance from "../lib/apiClient";

class AuthService {
  async login(payload: { email: string; password: string }) {
    try {
      await instance.post(`/auth/login`, payload);
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}

const authService = new AuthService();

export default authService;
