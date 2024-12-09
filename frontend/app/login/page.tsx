import Image from "next/image";
import { getServerAuthSession } from "@/app/api/auth/[...nextauth]/options";
import { redirect } from "next/navigation";
import Login from "./Login";

export default async function Home() {
	const session = await getServerAuthSession();
	if (session?.user?.role === "admin") {
		return redirect("/sms-list");
	}

	return <Login />;
}
