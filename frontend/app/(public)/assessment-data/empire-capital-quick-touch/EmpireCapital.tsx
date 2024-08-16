import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaLinkedinIn } from "react-icons/fa6";
import { GiCheckMark } from "react-icons/gi";
import { MdOutlineArrowRightAlt } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";
import Image1 from "./assets/empirelogo.png";
import Image2 from "./assets/midasimage.png";
import { useFetchBurnInforQuery } from "@/redux/slices/burn/burnApiSlice";
import { notFound } from "next/navigation";
import Image from "next/image";

const EmpireCapital = () => {
    return (
        <div className="flex  bg-[#f9f9f9] min-h-screen  flex-col items-center">
            <div className="flex w-full max-w-[600px] bg-white flex-col items-center">
                <div className="flex w-full flex-col items-center pt-8 p-6 gap-8 ">
                    <Image
                        className="h-fit w-[60%] lg:w-full max-w-[24rem]"
                        src={Image1}
                        alt=""
                    />

                    <h1 className="font-semibold text-2xl text-center">
                        Funding Assessment Complete!
                    </h1>
                    <h2 className=" font-semibold text-md px-6">
                        Hello{" "}
                        {"{{5.PrimaryContactInformation.Name.FirstAndLast}}"},
                    </h2>
                </div>
                <div className="flex bg-[#eec569] p-6 w-full max-w-[400px] mt-8 flex-col">
                    <h2 className="text-white text-xl ">
                        Let&apos;s fund{" "}
                        <span className="font-semibold">Your Business</span>{" "}
                        together!
                    </h2>
                    <div className="flex flex-col">
                        <p className="text-left mt-6">
                            <span className="font-bold">Great news!</span> Your
                            funding request has been successfully processed
                            using our loan assessment system. We&apos;ve
                            identified custom funding options tailored
                            specifically for you.
                        </p>
                        <p className="text-left font-semibold">
                            Please see the details below.
                        </p>
                    </div>
                    <div className="border-b-[1px] border-white">
                        <div className="border-b-[1px] border-gray-500 pb-2">
                            <p className="mt-6">
                                *After signing your loan agreement, you&apos;ll
                                be able to track the progress of your loans
                                through our{" "}
                                <span className="font-bold">
                                    client portal,
                                </span>{" "}
                                ensuring ease of access and management
                            </p>
                        </div>
                    </div>
                    <div className="flex  mt-6 flex-col items-center w-full">
                        <h2 className="underline  underline-offset-2 text-lg font-semibold">
                            Conditional Funding Offer:
                        </h2>
                        <div className="flex mt-8 text-left w-full flex-col ">
                            <h2 className="text-white w-full">
                                Personal/StartUp/Business Term Loans:
                            </h2>
                            <ul className="list-disc pl-8 pt-2">
                                <li className="">
                                    Minimum Estimated Range =
                                    <span className="font-bold">
                                        ${`{{49.value}}`}
                                    </span>
                                </li>
                                <li className="">
                                    Maximum Estimated Range =
                                    <span className="font-bold">
                                        ${`{{50.value}}`}
                                    </span>
                                </li>
                                <li className="">
                                    Interest Rates:
                                    <span className="font-bold">
                                        {`{{45.value}}`}
                                    </span>
                                </li>
                                <li className="">
                                    Terms:
                                    <span className="font-bold">
                                        {" "}
                                        {"{{"} 5-YR to 10-YR
                                        {"}}"}
                                    </span>
                                </li>
                            </ul>
                        </div>
                        <div className="flex mt-8 text-left w-full flex-col ">
                            <h2 className="text-white w-full">
                                Personal/Business Credit Card Lines:
                            </h2>
                            <ul className="list-disc pl-8 pt-2">
                                <li className="">
                                    Minimum Estimated Range =
                                    <span className="font-bold">
                                        ${`{{51.value}}`}
                                    </span>
                                </li>
                                <li className="">
                                    Maximum Estimated Range =
                                    <span className="font-bold">
                                        ${`{{52.value}}`}
                                    </span>
                                </li>
                                <li className="">
                                    Interest Rates:
                                    <span className="font-bold">
                                        {`{{45.value}}`}
                                    </span>
                                    + 0% Promotion
                                </li>
                                <li className="">
                                    Terms:{" "}
                                    <span className="font-bold">
                                        Revolving & Charge
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex p-3 w-full max-w-[600px] ">
                <div className=" bg-gray-500 w-full h-[1px] " />
            </div>
            <div className="flex w-full max-w-[600px] bg-white flex-col items-center">
                <div className="flex bg-[#eec569] p-6 w-full max-w-[400px]  flex-col items-center">
                    <h2 className="underline  underline-offset-2 text-xl font-semibold ">
                        Credit Score Analysis:
                    </h2>
                    <h2 className="text-white text-lg font-semibold mt-2">
                        TransUnion = {`{{7.data.applicant.score}}`}
                    </h2>
                    <div className="flex flex-col text-left w-full pt-6">
                        <p className="flex w-full">
                            <GiCheckMark className="text-xl pr-2" />
                            Unsecured Debt Balance={" "}
                            <span className="font-bold w-fit">
                                ${`{{7.data.applicant.unsecured_debt}}`}
                            </span>
                        </p>
                        <p className="flex w-full">
                            <GiCheckMark className="text-xl pr-2" />
                            Total Revolving Debt Balance ={" "}
                            <span className="font-bold w-fit">
                                $
                                {`{{7.data.applicant.total_balance_revolving}}`}
                            </span>
                        </p>
                        <p className="flex w-full">
                            <GiCheckMark className="text-xl pr-2" /># of
                            Revolving Accounts ={" "}
                            <span className="font-bold w-fit">
                                {`{{7.data.applicant.count_revolvingaccounts}}`}
                            </span>
                        </p>
                        <p className="flex w-full">
                            <GiCheckMark className="text-xl pr-2" />
                            Total Monthly Payments ={" "}
                            <span className="font-bold w-fit">
                                $
                                {`{{7.data.applicant.total_monthly_all_minusmortgage}}`}
                            </span>
                        </p>
                    </div>
                </div>
                <div className="flex p-4">
                    <h2 className="text-2xl font-semibold">Next Steps...</h2>
                </div>
                <div className="flex px-4 pb-8 w-full">
                    <div className="flex bg-[#eec569] w-full p-4 rounded-md px-6 justify-center">
                        <a
                            href="https://midasfinancialcompany.com/s64gpycwin8cxm2o4ssuw/"
                            className="flex gap-1 items-center"
                        >
                            <span className="font-semibold">Click Here</span>
                            <MdOutlineArrowRightAlt className="text-xl" />
                            to Accept your Funding Offer
                        </a>
                    </div>
                </div>
                <div className="flex bg-[#051c50] w-full">
                    <div className="flex  w-full pt-8 flex-col px-6 items-center">
                        <Image
                            className="w-[100px]"
                            src={Image2}
                            alt="midas image"
                        />
                        <h2 className="text-[#eec569] font-semibold">
                            ALTERNATIVE LENDING MADE EASY
                        </h2>
                        <div className="flex gap-4 mt-6">
                            <Link
                                href="https://www.facebook.com/midasfinco"
                                className="flex bg-white w-8 h-8 rounded-full justify-center items-center"
                            >
                                <FaFacebookF className="text-lg text-[#051c50]" />
                            </Link>
                            <Link
                                href="https://www.linkedin.com/company/midasfinco/"
                                className="flex bg-white w-8 h-8 rounded-full justify-center items-center  "
                            >
                                <FaLinkedinIn className="text-lg text-[#051c50]" />
                            </Link>
                        </div>

                        <div className="flex px-10 w-full py-6">
                            <div className="h-[1px] w-full bg-gray-200/50" />
                        </div>
                        <div className="flex px-6 text-white flex-col gap-2 items-center">
                            <p className="text-white/50">
                                © 2024 All Rights Reserved
                            </p>
                            <p className="italic text-[12px]">
                                Copyright © Midas Financial Company. 2024
                            </p>
                            <p className="text-[12px]">
                                Our mailing address is:
                            </p>
                            <p className="text-[12px]">
                                459 N Gilbert Rd Suite A-208
                            </p>
                            <p className="text-[12px]">Gilbert, AZ 85234</p>
                        </div>
                        <div className="flex px-6 text-white flex-col gap-2 items-center py-10">
                            <p className="text-[12px]">
                                This email was sent to:{" "}
                                {` {{5.PrimaryContactInformation.Email}}`}
                            </p>
                            <p className="text-[12px]">
                                because you applied for a Personalized Funding
                                Offer from one of our Partners.
                            </p>
                            <Link
                                href="https://midasfinancialcompany.com/unsubscribe-pq-offer/"
                                className="text-[12px] text-[#eec569] font-semibold"
                            >
                                unsubscribe from this service
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EmpireCapital;
