import { useMutation, useQueryClient } from "@tanstack/react-query";
import apiClient from "@/lib/apiClient";

type LoginPayload = { email: string; password: string };
type User = { id: string; email: string; role: string };

export const useLogin = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (credentials: LoginPayload) => {
      const res = await apiClient.post<User>("/auth/login", credentials, {
        withCredentials: true, // important if JWT is in cookies
      });
      return res.data;
    },
    onSuccess: (user) => {
      // ✅ update React Query cache so UI instantly knows user is logged in
      queryClient.setQueryData(["currentUser"], user);
    },
  });
};
