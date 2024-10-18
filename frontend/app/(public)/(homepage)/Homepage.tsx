import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
const Homepage = () => {
    return (
        <div className="flex flex-col bg-gray-100 min-h-screen h-full">
            <div className="flex bg-white p-4 justify-center shadow-sm shadow-purple-500/10">
                <div className="flex w-full lg:container">
                    <Image
                        src="/images/logo.png"
                        alt=""
                        width={500}
                        height={500}
                        className="w-36"
                    />
                </div>
            </div>
            <div className="flex w-full grow justify-center items-center">
                <div className="flex p-4">
                    <Link
                        href={"/sms-list"}
                        className="bg-violet-600 text-white p-3 rounded-[0.4rem] flex gap-2 items-center"
                    >
                        sms list <FaLongArrowAltRight className="text-xl" />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Homepage;
