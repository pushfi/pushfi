"use client";
import React, { useEffect, useState } from "react";
// import Logo from "@/assets/images/logo.png";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { schema, FormData } from "./validationSchema";
import { FormField } from "./FormField";
import { useAppSelector } from "@/redux/hooks";
import { FaCheck } from "react-icons/fa";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";
import { errorAlert } from "@/components/notification/errorAlert";
import { useRouter } from "next/navigation";
import Preloader from "@/components/ui/preloader/Preloader";
const FormUi = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormData>({
		resolver: zodResolver(schema),
	});
	const router = useRouter();
	const [loading, setloading] = useState(false);
	const onSubmit = async (data: FormData) => {
		try {
			setloading(true);
			console.log(data);

			const response: any | { data: string } = await signIn("credentials", {
				...data,
				redirect: false,
			});
			console.log(response);

			if (response?.error && response.error !== "CredentialsSignin") {
				console.log(response?.error);

				errorAlert(response.error);
			}
			setloading(false);
			router.replace("/sms-list");
		} catch (error) {
			console.log(error);
			setloading(false);
			console.log(error);
		}
	};

	// session redirect
	const session = useSession();
	useEffect(() => {
		// @ts-ignore
		if (session?.data?.user?.role === "admin") {
			router.replace("/asms-list");
		}

		console.log(session);
	}, [session?.data?.user]);

	const [checked, setchecked] = useState(false);
	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className="flex flex-col p-8 py-16 bg-bgColorFade shadow-lg rounded-lg w-[90%] max-w-[30rem]"
		>
			{loading && <Preloader />}
			<div className="flex justify-center gap-2 items-center">
				{/* <Image src={Logo} alt="" className="w-[2.5rem]" /> */}
				<p className="font-bold text-2xl">MIDAS</p>
			</div>
			<div className="flex py-4 gap-4 flex-col">
				<h3 className="text-xl font-semibold">Welcome To Midas!👋🏻</h3>
				<p className="text-sm">
					Please sign-in to your account and start the adventure
				</p>
				<FormField
					label="Email"
					register={register}
					name="email"
					error={errors.email}
				/>
				<FormField
					label="Password"
					register={register}
					name="password"
					error={errors.password}
				/>
				<div className="flex w-full flex-col gap-4">
					<div className="flex w-full">
						<div className="flex gap-2 w-full">
							<div
								className={`flex border ${
									checked
										? "border-2 border-primary bg-primary text-white"
										: "border-2 border-textColor bg-transparent text-transparent"
								} cursor-pointer rounded-[0.2rem] text-[0.6rem] w-5 h-5 items-center justify-center`}
								onClick={() => setchecked((prev) => !prev)}
							>
								<FaCheck />
							</div>
							<p className="w-full text-sm">Remember Me</p>
						</div>
						<div className="flex justify-end w-full">
							<Link href={"/"} className="text-primary text-sm">
								Forgot Password?
							</Link>
						</div>
					</div>
					<button className="bg-primary text-white p-3 rounded-lg">
						Login
					</button>
				</div>
			</div>
		</form>
	);
};

export default FormUi;
