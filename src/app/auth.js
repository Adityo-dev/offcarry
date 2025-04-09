import jwt from "jsonwebtoken";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
// Your own logic for dealing with plaintext password strings; be careful!

export const { handlers, signIn, signOut, auth } = NextAuth({
  session: {
    strategy: "jwt",
  },

  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        try {
          if (!credentials?.email || !credentials?.password) {
            return null;
          }

          const res = await fetch(
            `${process.env.NEXT_PUBLIC_API_ROUT_URL}/auth/login`,
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(credentials),
            }
          );

          if (!res.ok) {
            console.error("Failed to log in:", res.statusText);
            return res;
          }

          const user = await res.json();

          // Validate role
          if (credentials.role === "admin" && user.user.role.name === "user") {
            console.error("Admin login attempt with a user role.");
            return null;
          }

          if (credentials.role === "user" && user.user.role.name === "admin") {
            console.error("User login attempt with an admin role.");
            return null;
          }

          return {
            id: user.user.id,
            email: user.user.email,
            name: user.user.name,
            role: user.user.role.name,
            mobile: user.user.mobile,
            address: user.user.adress,
            token: user.token,
            refreshToken: user.refreshToken,
          };

          // Assuming password comparison is already handled on the server-side
        } catch (error) {
          console.error("Error during authorization:", error);
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user, account }) {
      // Initial sign-in
      if (account && user) {
        token.accessToken = user.token; // Store the initial access token
        token.refreshToken = user.refreshToken; // Store the refresh token
        token.accessTokenExpires = jwt.decode(user.token).exp * 1000; // Decode the expiration time
        token.role = user.role;
        token.mobile = user.mobile;
        token.address = user.adress;
        return token;
      }

      // Check if the access token has expired
      const currentTime = Date.now();
      if (token.accessTokenExpires && currentTime < token.accessTokenExpires) {
        // Access token is still valid
        return token;
      }
      // Access token has expired, attempt to refresh
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_APP_URL_API}/api/v1/auth/refresh-token`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              refreshToken: token.refreshToken,
            }),
          }
        );

        if (!res.ok) {
          throw new Error("Failed to refresh token");
        }

        const newToken = await res.json();
        token.accessToken = newToken.accessToken; // Update access token
        token.accessTokenExpires = jwt.decode(newToken.accessToken).exp * 1000; // Update expiration
        token.refreshToken = newToken.refreshToken || token.refreshToken; // Update refresh token if provided
      } catch (error) {
        console.error("Error refreshing token:", error.message);
        // Optionally, clear tokens if refresh fails
        token.accessToken = null;
        token.refreshToken = null;
        await signOut({ redirect: false });
      }

      return token;
    },
    async session({ session, token }) {
      session.user = token;
      return session;
    },
  },
  trustHost:
    process.env.AUTH_TRUST_HOST ||
    "https://localhost:3000" ||
    "http://localhost:3000",
});
