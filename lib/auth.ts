import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";

export const { handlers, auth, signIn, signOut } = NextAuth({
    providers: [
        GitHub({
            clientId: process.env.GITHUB_ID!,
            clientSecret: process.env.GITHUB_SECRET!,
        }),
    ],

    session: {
        strategy: "jwt",
        maxAge: 2 * 60 * 60, // optional 2-hour timeout
    },

    jwt: {
        maxAge: 2 * 60 * 60, // optional
    },

    callbacks: {
        async redirect({ url, baseUrl }) {
            // Always redirect to /dashboard after login
            return "/dashboard";
        },
    },
});
