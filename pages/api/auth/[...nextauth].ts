/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
 
 
const authOptions: NextAuthOptions = {
 
  providers: [
    // ...add more providers here
    CredentialsProvider({
      type: "credentials",
      credentials: {},
      authorize(credentials: any, req) {
        return {
          ...credentials,
        };
      },
    }),
  ],
 
 
 
 
};
 
export default NextAuth(authOptions);