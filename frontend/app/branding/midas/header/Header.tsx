"use client";
import Container from "@/components/layout/Container";
import Link from "next/link";
import React from "react";
import {
    FaFacebookSquare,
    FaInstagramSquare,
    FaLinkedin,
} from "react-icons/fa";
import midasBrandingLogo from "@/assets/images/midaslogo.png";
import Image from "next/image";

const Header = () => {
    return (
        <div className="flex items-center text-yellow-400 flex-col ">
            <Container>
                <div className="flex justify-between w-ful py-3 lg:py-4 items-center flex-col-reverse gap-2 lg:flex-row">
                    {/* <h1 className="text-white">Midas</h1> */}
                    <Link href={"tel:+1 (888) 338-7025"}>
                        Click to Call: +1 (888) 338-7025
                    </Link>
                    <div className="flex gap-4">
                        <a
                            href="https://www.facebook.com/midasfinco"
                            target="_blank"
                        >
                            <FaFacebookSquare className="text-3xl" />
                        </a>
                        <a
                            href="https://www.instagram.com/midasfinco/"
                            target="_blank"
                        >
                            {" "}
                            <FaInstagramSquare className="text-3xl" />{" "}
                        </a>
                        <a
                            href="https://www.linkedin.com/company/midasfinco/"
                            target="_blank"
                        >
                            {" "}
                            <FaLinkedin className="text-3xl" />
                        </a>
                    </div>
                </div>
            </Container>
            <div className="flex justify-center bg-white/30 w-full">
                <Container>
                    <div className="flex items-center gap-8 py-2 w-48 lg:w-96">
                        <Image
                            src={midasBrandingLogo}
                            alt="midas"
                            width={240}
                        />{" "}
                    </div>
                </Container>
            </div>
            <div className="flex justify-center">
                <Container>
                    <h1 className="text-white text-xl font-bold lg:text-3xl mt-3 lg:mt-6">
                        Affliate/Loan Agent Program
                    </h1>
                </Container>
            </div>
        </div>
    );
};

export default Header;
