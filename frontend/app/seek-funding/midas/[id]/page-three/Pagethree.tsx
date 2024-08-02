import React, { useEffect, useState } from "react";
import {
    MdNavigateBefore,
    MdOutlineNavigateNext,
    MdOutlineStar,
} from "react-icons/md";
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns";
const Pagethree = ({ setpage }: { setpage: any }) => {
    const today = new Date();
    const [date, setDate] = useState<Date | undefined>(today);
    const [datepicker, setdatepicker] = useState(true);

    const [showCalender, setshowCalender] = useState(false);
    const checkboxData = [
        "Personal Term Loans",

        "Business Term Loans",

        "Personal Lines of Credit",

        "Business Lines of Credit",

        "Personal Credit Cards",

        "Business Credit Cards",

        "Equipment Loans",

        "SBA Loans",
    ];
    return (
        <div className="flex flex-col text-gray-50 mt-8 items-center">
            <form className="flex flex-col max-w-[40rem] w-full gap-8 pb-8 ">
                <h2 className="font-bold ">Personal Information</h2>

                <div className="flex gap-4 w-full">
                    <div className="flex flex-col w-full gap-1">
                        <p className="flex text-gray-300">
                            Housing Status{" "}
                            <span className="text-red-500">
                                <MdOutlineStar className="text-sm" />
                            </span>
                        </p>
                        <select className="h-11 bg-gray-100/20 rounded-md px-2 outline-none focus:border-gray-200/50 focus:border-[1px] text-gray-50">
                            <option className="text-gray-800">Fully Own</option>
                            <option className="text-gray-800">Rent</option>
                            <option className="text-gray-800">
                                Live with parents or others
                            </option>
                        </select>
                    </div>
                    <div className="flex flex-col w-full gap-1">
                        <p className="flex text-gray-300">
                            Monthly Housing Payment
                            <span className="text-red-500">
                                <MdOutlineStar className="text-sm" />
                            </span>
                        </p>
                        <input
                            type="email"
                            className="h-11 bg-gray-100/20 rounded-md px-2 outline-none focus:border-gray-200/50 focus:border-[1px]"
                        />
                    </div>
                </div>
                <div className="flex gap-4 w-full">
                    <div className="flex flex-col w-full gap-1">
                        <p className="flex text-gray-300">
                            Date of Birth
                            <span className="text-red-500">
                                <MdOutlineStar className="text-sm" />
                            </span>
                        </p>
                        <input
                            onClick={() => setshowCalender(true)}
                            value={
                                datepicker
                                    ? ""
                                    : format(date as any, "dd/MM/yyyy")
                            }
                            placeholder="dd/mm/yyyy"
                            className="h-11 bg-gray-100/20 rounded-md px-2 outline-none focus:border-gray-200/50 focus:border-[1px] w-full"
                        />
                        <div
                            className={` ${
                                showCalender
                                    ? "flex flex-col relative"
                                    : "hidden"
                            }`}
                        >
                            <Calendar
                                mode="single"
                                selected={date}
                                onSelect={setDate}
                                onDayClick={() => {
                                    setshowCalender(false);
                                    setdatepicker(false);
                                }}
                                className="rounded-md border w-fit absolute bg-[#141c4d]"
                            />
                        </div>
                    </div>
                </div>

                <div className="flex flex-col  w-full ">
                    <h2 className="font-bold ">
                        Income/Military/Education Information
                    </h2>
                    <div className="flex gap-4 w-full ">
                        <div className="flex flex-col w-full gap-1">
                            <p className="flex text-gray-300">
                                Annual Income Individually{" "}
                                <span className="text-red-500">
                                    <MdOutlineStar className="text-sm" />
                                </span>
                            </p>
                            <input className="h-11 bg-gray-100/20 rounded-md px-2 outline-none focus:border-gray-200/50 focus:border-[1px]" />
                        </div>
                        <div className="flex flex-col w-full gap-1">
                            <p className="flex text-gray-300">
                                Total Annual Household Income
                                <span className="text-red-500">
                                    <MdOutlineStar className="text-sm" />
                                </span>
                            </p>
                            <input
                                type="email"
                                className="h-11 bg-gray-100/20 rounded-md px-2 outline-none focus:border-gray-200/50 focus:border-[1px]"
                            />
                        </div>
                    </div>{" "}
                </div>
                <div className="flex flex-col w-full gap-1">
                    <p className="flex text-gray-300">
                        Income Verification
                        <span className="text-red-500">
                            <MdOutlineStar className="text-sm" />
                        </span>
                    </p>
                    <div className="flex w-full flex-wrap">
                        {checkboxData.map((text) => {
                            return (
                                <div
                                    className="flex w-1/2 items-center gap-1 py-1"
                                    key={text}
                                >
                                    <input
                                        type="checkbox"
                                        className="h-4 bg-gray-100/20 rounded-md px-2 outline-none focus:border-gray-200/50 focus:border-[1px]"
                                    />
                                    <p>{text}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
                <div className="flex flex-col  w-full gap-2 text-[1rem]">
                    <h2 className="font-bold ">
                        Are seeking funding for your Existing Business?
                    </h2>
                    <div className="flex gap-4 w-full ">
                        <div className="flex flex-col w-full gap-1">
                            <p className="flex text-gray-300">Company Name</p>
                            <input className="h-11 bg-gray-100/20 rounded-md px-2 outline-none focus:border-gray-200/50 focus:border-[1px]" />
                        </div>
                        <div className="flex flex-col w-full gap-1">
                            <p className="flex text-gray-300">DBA Name</p>
                            <input
                                type="email"
                                className="h-11 bg-gray-100/20 rounded-md px-2 outline-none focus:border-gray-200/50 focus:border-[1px]"
                            />
                        </div>
                    </div>
                    <div className="flex gap-4 w-full ">
                        <div className="flex flex-col w-full gap-1">
                            <p className="flex text-gray-300">
                                Business Start Date
                            </p>
                            <input className="h-11 bg-gray-100/20 rounded-md px-2 outline-none focus:border-gray-200/50 focus:border-[1px]" />
                        </div>
                        <div className="flex flex-col w-full gap-1">
                            <p className="flex text-gray-300">
                                Percentage of Ownership
                            </p>
                            <input
                                type="email"
                                className="h-11 bg-gray-100/20 rounded-md px-2 outline-none focus:border-gray-200/50 focus:border-[1px]"
                            />
                        </div>
                    </div>
                    <div className="flex gap-4 w-full items-end text-[0.8rem]">
                        <div className="flex flex-col w-full gap-1">
                            <p className="flex text-gray-300">Corp Structure</p>
                            <select className="h-11 bg-gray-100/20 rounded-md px-2 outline-none focus:border-gray-200/50 focus:border-[1px] text-gray-50">
                                <option className="text-gray-800">LLC</option>
                                <option className="text-gray-800">
                                    S Corp
                                </option>
                                <option className="text-gray-800">
                                    C Corp
                                </option>
                                <option className="text-gray-800">
                                    Sol Prop
                                </option>
                            </select>
                        </div>
                        <div className="flex flex-col w-full gap-1">
                            <p className="flex text-gray-300 text-[0.8rem]">
                                Estimated or Projected Gross Annual Revenue
                                (Last 12 Months)
                            </p>
                            <input
                                type="email"
                                className="h-11 bg-gray-100/20 rounded-md px-2 outline-none focus:border-gray-200/50 focus:border-[1px]"
                            />
                        </div>
                        <div className="flex flex-col w-full gap-1">
                            <p className="flex text-gray-300">
                                Estimated or Projected Net Profit (Last 12
                                Months)
                            </p>
                            <input
                                type="email"
                                className="h-11 bg-gray-100/20 rounded-md px-2 outline-none focus:border-gray-200/50 focus:border-[1px]"
                            />
                        </div>
                    </div>
                </div>
                <div className="flex flex-col  w-full gap-2 text-[1rem]">
                    <h2 className="font-bold ">Total Outstanding Loans?</h2>
                    <div className="flex flex-col w-full gap-1">
                        <input className="h-11 bg-gray-100/20 rounded-md px-2 outline-none focus:border-gray-200/50 focus:border-[1px]" />
                        <p className="text-[0.8rem]">
                            Please enter the total amount of all outstanding
                            loans related to your business. This should include:
                        </p>
                        <ol className="list-decimal pl-8 text-[0.8rem]">
                            <li>
                                <span className="font-bold text-[1rem] ">
                                    Business Term Loans:
                                </span>{" "}
                                Any fixed-term loans taken out for business
                                purposes.
                            </li>
                            <li>
                                <span className="font-bold text-[1rem] ">
                                    Business Lines of Credit:
                                </span>{" "}
                                Any revolving lines of credit available to your
                                business.
                            </li>
                            <li>
                                <span className="font-bold text-[1rem] ">
                                    Business Credit Cards:
                                </span>{" "}
                                The current balances on all business credit
                                cards.
                            </li>
                            <li>
                                <span className="font-bold text-[1rem] ">
                                    Other Business Debts:
                                </span>{" "}
                                Any other loans or debts that your business is
                                currently repaying, such as equipment financing,
                                merchant cash advances, or any other financial
                                obligations.
                            </li>
                        </ol>
                        <p className="text-[0.8rem] pt-4">
                            Ensure that you provide the most recent and accurate
                            figures. This information is crucial for assessing
                            your business&apos;s overall financial liability and
                            will help us in making a more informed lending
                            decision.
                        </p>
                    </div>
                </div>
                <div className="flex flex-col w-full gap-1">
                    <p className="flex text-gray-300">
                        Enter Full Name for Digital Signature
                        <span className="text-red-500">
                            <MdOutlineStar className="text-sm" />
                        </span>
                    </p>
                    <input
                        type="email"
                        className="h-11 bg-gray-100/20 rounded-md px-2 outline-none focus:border-gray-200/50 focus:border-[1px]"
                    />
                </div>
                <div className="flex text-white gap-8  w-full">
                    <div
                        className="flex items-center p-1 pr-2 border-2 border-yellow-300 text-yellow-300 rounded-md cursor-pointer"
                        onClick={() => setpage(2)}
                    >
                        <MdNavigateBefore className="text-3xl" />
                        <p>Back</p>
                    </div>
                    <div className="flex items-center p-1 px-3  bg-yellow-300 text-gray-600 rounded-md cursor-pointer">
                        <p>Submit</p>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Pagethree;
