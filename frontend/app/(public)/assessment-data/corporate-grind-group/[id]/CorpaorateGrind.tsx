"use client";
import React from "react";
import Image1 from "./asserts/corporate-grind-group.png";
import Image2 from "./asserts/credit-score.png";
import Image3 from "./asserts/ripefunding.png";
import Image4 from "./asserts/instagram.png";
import Image5 from "./asserts/linkedin.png";
import Image6 from "./asserts/facebook.png";
import Image7 from "./asserts/PushFi-150.png";
import Image from "next/image";
import Link from "next/link";
import { FaLinkedinIn } from "react-icons/fa6";
import { GiCheckMark } from "react-icons/gi";
import { MdOutlineArrowRightAlt } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";
import { useFetchBurnInforQuery } from "@/redux/slices/burn/burnApiSlice";
import { notFound } from "next/navigation";
import { useFetchCorporateGrindQuery } from "@/redux/slices/assessment-data/assessmentDataApiSlice";
const EmailTemplate = ({ id }: { id: any }) => {
    // fetch user

    const { data, error, isFetching, isLoading } = useFetchCorporateGrindQuery({
        id,
    });

    if (isFetching) {
        return (
            <div className="w-full h-screen flex justify-center items-center">
                please wait
            </div>
        );
    }
    if (error) {
        return notFound();
    }
    return (
        <div className="bg-gray-100 font-sans text-gray-700">
            <div className="p-4 mx-auto max-w-[40rem]">
                <Image
                    src={Image1}
                    alt="HMB Logo Top"
                    className="w-56 mx-auto"
                />
                <div className="mt-4 text-left">
                    <p className="text-2xl font-normal ">
                        Let&apos;s fund{" "}
                        <span className="text-[#106beb] font-bold">
                            Your Business
                        </span>{" "}
                        together!
                    </p>
                </div>
                <div className="mt-4 text-left flex flex-col gap-6">
                    <p className="text-lg font-semibold text-[#106beb]">
                        Hello {data?.name},
                    </p>
                    <p className="mt-2">
                        Great news! Your funding request has been successfully
                        processed using our loan assessment system. We&apos;ve
                        identified custom funding options tailored specifically
                        for you.
                    </p>
                    <p className="text-md font-bold text-[#106beb]">
                        Please see the details below.
                    </p>
                </div>
            </div>
            <div className="bg-[#106beb] text-white  flex">
                <div className="flex w-full max-w-[40rem] mx-auto gap-4 p-4 flex-col md:flex-row items-center md:items-start">
                    <Image
                        src={Image2}
                        alt="HMB Credit %"
                        className="w-[8rem]  h-fit"
                    />
                    <div className="w-full flex flex-col gap-6 ">
                        <h1 className="text-2xl font-bold">
                            Credit Score Analysis:
                        </h1>
                        <p>
                            TransUnion ={" "}
                            <strong className="text-xl">
                                {data?.transUnion}
                            </strong>
                        </p>

                        <div className="w-full flex flex-col">
                            <p>
                                Unsecured Debt Balance ={" "}
                                <strong>{data.UnsecuredDebtBalance}</strong>
                            </p>
                            <p>
                                Revolving Debt Balance ={" "}
                                <strong>{data.revolvingDebtBalance}</strong>
                            </p>
                            <p>
                                # of Revolving Accounts ={" "}
                                <strong>{data.revolvingAccounts}</strong>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="p-4 max-w-[40rem] mx-auto flex flex-col gap-6 py-8 ">
                <h1 className="text-2xl font-bold underline text-blue-600">
                    Conditional Funding Offer Details:
                </h1>
                <div className="mt-4">
                    <h2 className="text-xl font-bold mb-6">
                        Specialty/StartUp/Business Term Loans:
                    </h2>
                    <p>
                        Minimum Estimated Range ={" "}
                        <strong>{data.tMinRange}</strong>
                    </p>
                    <p>
                        Maximum Estimated Range ={" "}
                        <strong>{data.tMaxRange}</strong>
                    </p>
                    <p>
                        Interest Rate Range = <strong>{data.tInterest}</strong>
                    </p>
                    <p>
                        Terms = <strong>5 years to 10 years+</strong>
                    </p>
                </div>
            </div>
            <div className=" bg-white max-w-full">
                <div className="flex flex-col max-w-[40rem] mx-auto pb-8 p-4">
                    <h2 className="text-xl font-bold mb-8">
                        Business Credit Card Lines:
                    </h2>
                    <p>
                        Minimum Estimated Range ={" "}
                        <strong>{data.cMinRange}</strong>
                    </p>
                    <p>
                        Maximum Estimated Range ={" "}
                        <strong>{data.cMaxRange}</strong>
                    </p>
                    <p>
                        Interest Rate Range ={" "}
                        <strong>{data.tInterest} + 0% Promotion</strong>
                    </p>
                    <p>
                        Terms = <strong>Revolving & Charge</strong>
                    </p>
                </div>
            </div>
            <div className="mx-auto p-4 text-center max-w-[40rem] gap-8 flex flex-col py-8">
                <h1 className="text-4xl font-bold text-gray-700">
                    Ready to accept?
                </h1>
                <p className="mt-2 text-sm">
                    After signing your loan agreement, you&apos;ll be able to
                    track the progress of your loans through our{" "}
                    <strong>PushFi</strong> client portal, ensuring ease of
                    access and management.
                </p>
                <a
                    href="https://www.ripefunding.com/ripe-agreement/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-4 px-8 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300 w-full"
                >
                    ACCEPT FUNDING OFFER
                </a>
                <Image src={Image3} alt="" className="mx-auto mt-4 w-1/4" />
                <div className="mt-4 flex justify-center space-x-2">
                    <a
                        href="https://www.instagram.com/ripefunding/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8"
                    >
                        <Image
                            src={Image4}
                            alt="Instagram"
                            className="w-full h-full"
                        />
                    </a>
                    <a
                        href="https://www.linkedin.com/company/ripefunding"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8"
                    >
                        <Image
                            src={Image5}
                            alt="LinkedIn"
                            className="w-full h-full"
                        />
                    </a>
                    <a
                        href="https://www.facebook.com/ripefunding/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8"
                    >
                        <Image
                            src={Image6}
                            alt="Facebook"
                            className="w-full h-full"
                        />
                    </a>
                </div>
                <Image
                    src={Image7}
                    alt="HMB Logo"
                    className="mx-auto mt-4 w-36"
                />
            </div>
        </div>
    );
};

export default EmailTemplate;
