import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
	function middleware(req) {
		const userRole = req.nextauth.token?.role;
		if (userRole === "admin" && !req.nextUrl.pathname.startsWith("/sms-list")) {
			return NextResponse.redirect(new URL("/sms-list", req.url));
		}
	},
	{
		callbacks: {
			authorized: ({ token }) => token?.role === "admin",
		},
		pages: {
			signIn: "/login",
		},
	}
);

export const config = {
	matcher: ["/sms-list/:path*"],
};
