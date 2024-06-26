import NextAuth from "next-auth";

export const authOptions = {
  providers: [
    {
      id: "asgardeo",
      name: "Asgardeo",
      type: "oauth",
      clientId: process.env.ASGARDEO_CLIENT_ID,
      clientSecret: process.env.ASGARDEO_CLIENT_SECRET,
      wellKnown: `${process.env.ASGARDEO_SERVER_ORIGIN}/oauth2/token/.well-known/openid-configuration`,
      authorization: {
        params: {
          scope: "openid email profile",
        },
      },
      idToken: true,
      checks: ["pkce", "state"],
      profile(profile) {
        return {
          id: profile?.sub,
          name: profile?.given_name,
          email: profile?.email,
        };
      },
      httpOptions: {
        timeout: 40000,
      },
    },
  ],
  secret: process.env.SECRET,

  session: {
    strategy: "jwt",
  },
  callbacks: {
    jwt({ token, account, user }) {
      if (account) {
        token.accessToken = account.access_token;
        token.id = user.id;
      }
      return token;
    },
    session({ session, token }) {
      if (session.user) {
        session.user.id = token.sub;
      }
      return session;
    },
  },
  theme: {
    colorScheme: "light", // "auto" | "dark" | "light"
  },
  debug: true,
};
export const handler = NextAuth(authOptions);
export { handler as GET, handler as POST }