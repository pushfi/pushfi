import React from "react";
import {
    MdNavigateBefore,
    MdOutlineNavigateNext,
    MdOutlineStar,
} from "react-icons/md";
import { usStates } from "../UsaStates";

const Pagetwo = ({ setpage }: { setpage: any }) => {
    return (
        <div className="flex flex-col text-gray-50 mt-8 items-center">
            <form className="flex flex-col max-w-[40rem] w-full gap-8 pb-8 ">
                <h2 className="font-bold ">Primary Contact Information</h2>

                <div className="flex gap-1 flex-col w-full">
                    <p className="flex text-gray-300">
                        Name{" "}
                        <span className="text-red-500">
                            <MdOutlineStar className="text-sm" />
                        </span>
                    </p>
                    <div className="flex gap-2 w-full flex-col lg:flex-row">
                        <input
                            placeholder="First Name"
                            className="h-11 bg-gray-100/20 rounded-md px-2 outline-none focus:border-gray-200/50 focus:border-[1px]"
                        />
                        <input
                            placeholder="Middle Name"
                            className="h-11 bg-gray-100/20 rounded-md px-2 outline-none focus:border-gray-200/50 focus:border-[1px] w-full"
                        />
                        <input
                            placeholder="Last Name"
                            className="h-11 bg-gray-100/20 rounded-md px-2 outline-none focus:border-gray-200/50 focus:border-[1px]"
                        />
                    </div>
                </div>
                <div className="flex gap-4 flex-col lg:flex-row w-full">
                    <div className="flex flex-col w-full gap-1">
                        <p className="flex text-gray-300">
                            Mobile Phone{" "}
                            <span className="text-red-500">
                                <MdOutlineStar className="text-sm" />
                            </span>
                        </p>
                        <input className="h-11 bg-gray-100/20 rounded-md px-2 outline-none focus:border-gray-200/50 focus:border-[1px]" />
                        <ul className="italic text-[0.8rem] text-gray-300 list-disc pl-4">
                            <li>
                                By entering your mobile number, you consent to
                                receiving SMS messages.
                            </li>
                            <li>
                                Messages and data rates may apply. Message
                                frequency will vary.
                            </li>
                            <li>
                                Reply &quot;STOP&quot; to opt-out of messaging.
                            </li>
                            <li>
                                Reply &quot;HELP&quot; for customer care contact
                                information.
                            </li>
                        </ul>
                    </div>
                    <div className="flex flex-col w-full gap-1">
                        <p className="flex text-gray-300">
                            Email
                            <span className="text-red-500">
                                <MdOutlineStar className="text-sm" />
                            </span>
                        </p>
                        <input
                            type="email"
                            className="h-11 bg-gray-100/20 rounded-md px-2 outline-none focus:border-gray-200/50 focus:border-[1px]"
                        />
                        <p className="italic text-[0.8rem] text-gray-300">
                            Your Email Address is what links your files & data
                            together.
                        </p>
                    </div>
                </div>
                <div className="flex gap-1 flex-col w-full ">
                    <p className="flex text-gray-300">
                        Home Address{" "}
                        <span className="text-red-500">
                            <MdOutlineStar className="text-sm" />
                        </span>
                    </p>
                    <div className="flex gap-2 w-full flex-col lg:flex-row">
                        <input
                            placeholder="Addres Line 1"
                            className="h-11 bg-gray-100/20 rounded-md px-2 outline-none focus:border-gray-200/50 focus:border-[1px] w-full"
                        />
                        <input
                            placeholder="City"
                            className="h-11 bg-gray-100/20 rounded-md px-2 outline-none focus:border-gray-200/50 focus:border-[1px] w-full"
                        />
                    </div>
                </div>
                <div className="flex gap-4 w-full flex-col lg:flex-row">
                    <div className="flex flex-col w-full gap-1">
                        <p className="flex text-gray-300">
                            Home State{" "}
                            <span className="text-red-500">
                                <MdOutlineStar className="text-sm" />
                            </span>
                        </p>
                        <select className="h-11 bg-gray-100/20 rounded-md px-2 outline-none focus:border-gray-200/50 focus:border-[1px] text-gray-50">
                            <option></option>
                            {usStates.map((state) => {
                                return (
                                    <option
                                        value={state.code}
                                        key={state.code}
                                        className="text-gray-800"
                                    >
                                        {state.fullName}
                                    </option>
                                );
                            })}
                        </select>
                    </div>
                    <div className="flex flex-col w-full gap-1">
                        <p className="flex text-gray-300">
                            Home Zipcode
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
                <div className="flex text-white gap-8  w-full">
                    <div
                        className="flex items-center p-1 pr-2 border-2 border-yellow-300 text-yellow-300 rounded-md cursor-pointer"
                        onClick={() => setpage(1)}
                    >
                        <MdNavigateBefore className="text-3xl" />
                        <p>Back</p>
                    </div>
                    <div
                        className="flex items-center p-1 pl-2  bg-yellow-300 text-gray-600 rounded-md cursor-pointer"
                        onClick={() => setpage(3)}
                    >
                        <p>Next</p>{" "}
                        <MdOutlineNavigateNext className="text-3xl" />
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Pagetwo;
