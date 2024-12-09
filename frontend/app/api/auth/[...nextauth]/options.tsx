import CredentialsProvider from "next-auth/providers/credentials";
import { getServerSession } from "next-auth";
import axios from "axios";
import { NextResponse } from "next/server";

interface Icredentials {
	email: string;
	password: string;
}

export const options = {
	providers: [
		CredentialsProvider({
			credentials: {},
			name: "Credentials",
			async authorize(credentials: Record<string, string> | undefined) {
				try {
					if (!credentials) {
						throw new Error("Credentials are missing.");
					}

					const typedCredentials: Icredentials = {
						email: credentials.email,
						password: credentials.password,
					};

					const res = await axios.post(
						`${process.env.NEXT_PUBLIC_BACKEND_URL}/backend/auth/login`,
						{
							email: typedCredentials.email,
							password: typedCredentials.password,
						},
						{
							headers: {
								authorization: process.env.NEXT_PUBLIC_BACKEND_API_KEY,
							},
						}
					);
					console.log(res);

					if (res.data.error) {
						console.log("error2", res.data.error);
						throw new Error(res.data.error);
					}
					return {
						...res.data.message,
					};
				} catch (error: any) {
					throw new Error(error.response.data.message);
				}
			},
		}),
	],
	// redirect page incase of success or error
	pages: {
		signIn: "/login",
		signOut: "/login",
	},
	callbacks: {
		async jwt({ token, user }: { token: any; user: any }) {
			if (user) {
				token = user as object;
			}
			return token;
		},
		async session({ session, token }: { session: any; token: any }) {
			if (session?.user) session.user.role = token.role;
			session.user.email = token.email;
			session.user.fullName = token.fullName;
			session.user.userId = token.userId;
			return session;
		},
	},
};

export const getServerAuthSession = () => getServerSession(options);
