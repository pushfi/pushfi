import bcrypt from "bcrypt";
import { RequestHandler } from "express";

const login: RequestHandler = async (req, res) => {
	const { email, password } = req.body;

	try {
		//  check if the user is admin

		if (
			email === process.env.ADMIN_EMAIL &&
			password === process.env.ADMIN_PASS
		) {
			return res.status(200).json({
				message: {
					fullName: "Super Admin",
					email: process.env.ADMIN_EMAIL,
					role: "admin",
					userId: "admin",
				},
			});
		} else {
			return res.status(402).json({ message: "Invalid credentials" });
		}
		// Find the user in the user from the database
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: "Internal Server Error" });
	}
};

export default login;
