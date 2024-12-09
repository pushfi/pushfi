"use client";
import React, { useEffect, useState } from "react";
// import tree1 from "@/assets/illustrations/objects/tree-1.png";
// import tree2 from "@/assets/illustrations/objects/tree-2.png";
// import authmask1 from "@/assets/pages/auth-v1-mask-dark.png";
// import authmask2 from "@/assets/pages/auth-v1-mask-light.png";
import Image from "next/image";
import FormUi from "./FormUi";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const Login = () => {
	const session = useSession();
	// display maskimage based on color scheme
	const [theme, setTheme] = useState<"dark" | "light">("light");
	useEffect(() => {
		const colorScheme = document.documentElement.style.colorScheme as
			| "dark"
			| "light";
		setTheme(colorScheme);
	}, []);
	const router = useRouter();
	// check session

	useEffect(() => {
		// @ts-ignore
		if (session?.data?.user?.role === "admin") {
			router.replace("/sms-list");
		}
	}, [session?.data?.user]);

	return (
		<div className=" flex bg-bgColor text-textColor  min-h-screen ">
			<div className="fixed bottom-0 left-0  h-full w-full flex justify-center items-center z-20">
				<FormUi />
			</div>
		</div>
	);
};

export default Login;
