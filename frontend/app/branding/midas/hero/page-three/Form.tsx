import { MdOutlineNavigateNext, MdOutlineStar } from "react-icons/md";
import React, { useCallback, useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import { FiXCircle } from "react-icons/fi";
import LogoUpload from "./LogoUpload";
import W9Upload from "./W9Upload";
const Form = () => {
    const [w9files, setw9files] = useState<(File & { preview: string })[]>([]);
    const [logofiles, setlogofiles] = useState<(File & { preview: string })[]>(
        []
    );
    return (
        <div className="flex flex-col text-gray-200 w-full justify-center max-w-[600px]  gap-4 pb-20">
            <div className="flex text-gray-200 mb-6">
                <p className="max-w-[500px]">
                    The Data/Information you enter below will be used to setup
                    your Unique Links, Back-Office & Branding.{" "}
                </p>
            </div>
            <div className="flex flex-col w-full gap-4 md:flex-row ">
                <div className="flex flex-col gap-2 w-full">
                    <p className="flex">
                        Email{" "}
                        <span className="text-red-500">
                            <MdOutlineStar className="text-sm" />
                        </span>
                    </p>
                    <input
                        type="email"
                        name="email"
                        className="h-11 bg-gray-100/20 rounded-md px-2 outline-none focus:border-gray-200/50 focus:border-[1px]"
                    />
                </div>
                <div className="flex flex-col gap-2 w-full">
                    <p className="flex">
                        Mobile Phone{" "}
                        <span className="text-red-500">
                            <MdOutlineStar className="text-sm" />
                        </span>
                    </p>
                    <input
                        type="text"
                        name="phone"
                        className="h-11 bg-gray-100/20 rounded-md  px-2 outline-none focus:border-gray-200/50 focus:border-[1px]"
                    />
                </div>
            </div>
            <div className="flex w-full flex-col md:flex-row gap-4">
                <div className="flex flex-col gap-2 w-full">
                    <p className="flex">
                        Name{" "}
                        <span className="text-red-500">
                            <MdOutlineStar className="text-sm" />
                        </span>
                    </p>
                    <input
                        type="text"
                        placeholder="First"
                        name="fName"
                        className="h-11 bg-gray-100/20 rounded-md px-2 outline-none focus:border-gray-200/50 focus:border-[1px]"
                    />
                </div>
                <div className="flex flex-col gap-2 justify-end w-full">
                    <input
                        placeholder="Last"
                        type="text"
                        name="lName"
                        className="h-11 bg-gray-100/20 rounded-md  px-2 outline-none focus:border-gray-200/50 focus:border-[1px]"
                    />
                </div>
            </div>
            <div className="flex flex-col gap-2">
                <p className="flex">
                    Company Name{" "}
                    <span className="text-red-500">
                        <MdOutlineStar className="text-sm" />
                    </span>
                </p>
                <input
                    type="text"
                    name="cName"
                    className="h-11 bg-gray-100/20 rounded-md px-2 outline-none focus:border-gray-200/50 focus:border-[1px]"
                />
            </div>
            <div className="flex flex-col gap-2">
                <p className="flex">Website URL </p>
                <input
                    type="text"
                    name="cName"
                    className="h-11 bg-gray-100/20 rounded-md px-2 outline-none focus:border-gray-200/50 focus:border-[1px]"
                />
            </div>
            <div className="flex flex-col gap-2">
                <p className="flex">
                    Disbursement Account Info{" "}
                    <span className="text-red-500">
                        <MdOutlineStar className="text-sm" />
                    </span>
                </p>
                <input
                    type="text"
                    name="cName"
                    className="h-11 bg-gray-100/20 rounded-md px-2 outline-none focus:border-gray-200/50 focus:border-[1px]"
                />
            </div>
            <div className="flex flex-col ">
                <p className="flex">
                    Disbursement Account Info{" "}
                    <span className="text-red-500">
                        <MdOutlineStar className="text-sm" />
                    </span>
                </p>
                <input
                    type="text"
                    name="cName"
                    className="mt-2 h-11 bg-gray-100/20 rounded-md px-2 outline-none focus:border-gray-200/50 focus:border-[1px]"
                />
                <p className="text-[12px] italic">
                    Please input Bank Name, Routing & Account Number. You can
                    also include Zelle Payment Data..
                </p>
            </div>
            <div className="flex flex-col gap-2">
                <p className="flex">
                    Branding Type{" "}
                    <span className="text-red-500">
                        <MdOutlineStar className="text-sm" />
                    </span>
                </p>
                <select
                    name=""
                    id=""
                    className="h-11 bg-gray-100/20 rounded-md px-2 outline-none focus:border-gray-200/50 focus:border-[1px]text-gray-700"
                >
                    <option value="" className="text-gray-900">
                        Choose Type
                    </option>
                    <option value="" className="text-gray-900">
                        Co-Branded with Midas
                    </option>
                    <option value="" className="text-gray-900">
                        Midas only Branded With Agent Name
                    </option>
                </select>
            </div>
            <div className="flex w-full flex-col md:flex-row gap-4">
                <LogoUpload logofiles={logofiles} setlogofiles={setlogofiles} />
                <W9Upload w9files={w9files} setw9files={setw9files} />
            </div>
            <div className="flex flex-col ">
                <p className="flex">
                    Enter Full Name for Digital Signature
                    <span className="text-red-500">
                        <MdOutlineStar className="text-sm" />
                    </span>
                </p>
                <input
                    type="text"
                    name="fName"
                    className="mt-2 h-11 bg-gray-100/20 rounded-md px-2 outline-none focus:border-gray-200/50 focus:border-[1px]"
                />
                <p className="italic text-[12px] mt-2">
                    By proceeding forward and signing this document by clicking
                    “I Agree” below this document, you are agreeing that you
                    have reviewed the following disclosure and consent to
                    conduct business using electronic communications, to receive
                    any document or communication electronically, and to utilize
                    your electronic signature in lieu of signing paper
                    documents.
                </p>
            </div>
            <h5 className="text-2xl text-yellow-300">FTC Guidelines</h5>
            <p className=" text-gray-200">
                These aren’t our rules… but the FTC says they are important!
            </p>
            <p className=" text-gray-200">
                Affiliate MUST read and understand the following guidelines from
                the FTC:
            </p>
            <ol className="pl-8 list-decimal text-[14px]">
                <li>
                    {" "}
                    <a
                        href="https://www.ftc.gov/sites/default/files/attachments/press-releases/ftc-publishes-final-guides-governing-endorsements-testimonials/091005revisedendorsementguides.pdf"
                        target="_blank"
                    >
                        FTC Endorsement Guidelines
                    </a>
                </li>
                <li>
                    <a
                        href="https://www.ftc.gov/business-guidance/resources/ftcs-endorsement-guides-what-people-are-asking"
                        target="_blank"
                    >
                        Endorsement Guidelines FAQ
                    </a>
                </li>
            </ol>
            <p className="font-semibold">Read Midas Terms of Service?</p>
            <div className="flex">
                <div className="flex gap-2">
                    <input type="checkbox" name="yes" id="" />
                    <p>yes</p>
                </div>
            </div>

            <div className="flex items-center p-1 px-4  bg-yellow-300 text-gray-600 rounded-md cursor-pointer w-fit">
                <p>submit</p>
            </div>
        </div>
    );
};

export default Form;
