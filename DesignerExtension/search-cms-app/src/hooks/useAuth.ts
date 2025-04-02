import { useQueryClient, useQuery, useMutation } from "@tanstack/react-query";
import { jwtDecode } from "jwt-decode";



import { User, DecodedToken} from "../types/types";

const base_url ="http://localhost:3000";




interface AuthState {
  user: User;
  sessionToken: string;
}

/**
 * Custom hook for handling authentication state.
 */
export function useAuth() {
  const queryClient = useQueryClient();

  // Query to check authentication status
  const { data: authState, isLoading: isAuthLoading } = useQuery<AuthState>({
    queryKey: ["auth"],
    queryFn: async () => {
      const storedUser = localStorage.getItem("wf_hybrid_user");
      if (!storedUser) return { user: { firstName: "", email: "" }, sessionToken: "" };

      try {
        const userData = JSON.parse(storedUser);
        if (!userData.sessionToken) return { user: { firstName: "", email: "" }, sessionToken: "" };

        // Validate session token
        const decodedToken = jwtDecode(userData.sessionToken) as DecodedToken;
        if (decodedToken.exp * 1000 <= Date.now()) {
          localStorage.removeItem("wf_hybrid_user");
          return { user: { firstName: "", email: "" }, sessionToken: "" };
        }

        return {
          user: { firstName: decodedToken.user.firstName, email: decodedToken.user.email },
          sessionToken: userData.sessionToken,
        };
      } catch (error) {
        console.error("Error parsing stored user data:", error);
        localStorage.removeItem("wf_hybrid_user");
        return { user: { firstName: "", email: "" }, sessionToken: "" };
      }
    },
    staleTime: Infinity,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    gcTime: 1000 * 60 * 60,
  });

  // Mutation to exchange ID token for a session token
  const tokenMutation = useMutation({
    mutationFn: async (idToken: string) => {
      const response = await fetch(`${base_url}/api/auth/token`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ idToken }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(`Failed to exchange token: ${JSON.stringify(errorData)}`);
      }

      return response.json();
    },
    onSuccess: (data) => {
      try {
        const decodedToken = jwtDecode(data.sessionToken) as DecodedToken;
        const userData = {
          sessionToken: data.sessionToken,
          firstName: decodedToken.user.firstName,
          email: decodedToken.user.email,
        };

        localStorage.setItem("wf_hybrid_user", JSON.stringify(userData));

        queryClient.setQueryData<AuthState>(["auth"], {
          user: { firstName: decodedToken.user.firstName, email: decodedToken.user.email },
          sessionToken: data.sessionToken,
        });
      } catch (error) {
        console.error("Error decoding token:", error);
      }
    },
  });

  // Function to trigger token exchange
  const exchangeAndVerifyIdToken = async (idToken: string) => {
    try {
      // Trigger the mutation to exchange and verify the token
      await tokenMutation.mutateAsync(idToken);
      console.log("Token exchange successful!");
    } catch (error) {
      console.error("Error exchanging token:", error);

      // Clear local storage if an error occurs
      localStorage.removeItem("wf_hybrid_user");

     
    }
  };

  return {
    user: authState?.user || { firstName: "", email: "" },
    sessionToken: authState?.sessionToken || "",
    isAuthLoading,
    exchangeAndVerifyIdToken,
  };
}
