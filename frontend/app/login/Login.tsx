"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import FormUi from "./FormUi";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const Login = () => {
	const session = useSession();
	const router = useRouter();
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
