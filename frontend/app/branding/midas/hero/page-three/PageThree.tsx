import Image from "next/image";

import React from "react";
import MidasLogo from "@/assets/images/midaslogo2.png";
import Container from "@/components/layout/Container";
import Form from "./Form";

const PageThree = () => {
    return (
        <div className="flex justify-center items-center flex-col gap-4 w-full snap-start">
            <Image src={MidasLogo} alt="midas" className="mt-[3vh] w-[100px]" />
            <h1 className="text-yellow-300 text-4xl">Let&apos;s Partner Up!</h1>

            <Form />
        </div>
    );
};

export default PageThree;
