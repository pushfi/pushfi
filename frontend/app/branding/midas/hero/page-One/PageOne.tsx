import Image from "next/image";
import React from "react";
import midashero from "@/assets/images/midasheroImage.png";
import { MdNavigateBefore } from "react-icons/md";
import { MdOutlineNavigateNext } from "react-icons/md";
import { useAppDispatch } from "@/redux/hooks";
import { setpage } from "@/redux/slices/midas/midasSlice";
const PageOne = () => {
    const dispatch = useAppDispatch();
    return (
        <div className="flex flex-col gap-8 text-white/70 snap-start">
            <div className="flex items-center justify-center">
                <div className="flex w-[90%] lg:w-[35%]">
                    <Image
                        src={midashero}
                        alt="midas-branding"
                        className="w-full"
                    />
                </div>
            </div>
            <div className="gap-4 flex flex-col">
                <h4 className=" ">
                    You can be a part of the solution. In today’s tough credit
                    economy, many people face challenges when it comes to being
                    approved for the things they need in their lives and
                    businesses. Now, you can help these people achieve their
                    goals AND make a supplemental income in the process. By
                    joining the Midas Financial Loan Agent Program, you will
                    have access to one of the only pay for results funding
                    platforms in the country. We value our clients and we are
                    committed to their success.{" "}
                </h4>
                <h4 className="text-yellow-400 font-semibold text-xl">
                    Here is a detailed breakdown:
                </h4>
                <p>
                    To incorporate the commission percentages based on a
                    <span className="text-white font-bold">
                        {" "}
                        12-Point structure
                    </span>{" "}
                    we&apos;ll calculate the percentage of commission earned for
                    each tier within the structure.
                </p>
                <div className="flex pl-8 flex-col">
                    <p>
                        1.{" "}
                        <span className="text-white font-bold">
                            Initial Tier (Deals 1-5):
                        </span>{" "}
                        Affiliates earn 3 points per deal or{" "}
                        <span className="text-white font-bold">
                            25% of the 12 Points{" "}
                        </span>
                    </p>
                    <ul className="flex flex-col pl-8">
                        <li className="list-disc">
                            This is paid per deal for the first five deals in a
                            month.
                        </li>
                    </ul>
                </div>
                <div className="flex pl-8 flex-col">
                    <p>
                        2.{" "}
                        <span className="text-white font-bold">
                            Middle Tier (Deals 6-9):
                        </span>{" "}
                        Affiliates earn 5 points per deal or{" "}
                        <span className="text-white font-bold"> 41.67%</span>
                    </p>
                    <ul className="flex flex-col pl-8">
                        <li className="list-disc">
                            For deals 6 through 9 within the same month
                        </li>
                        <li className="list-disc">
                            Affiliates are awarded 41.67% of the available
                            commission points per deal.
                        </li>
                    </ul>
                </div>
                <div className="flex pl-8 flex-col">
                    <p>
                        3.{" "}
                        <span className="text-white font-bold">
                            Top Tier (Deals 10+):
                        </span>{" "}
                        Affiliates earn 6 points per deal, or{" "}
                        <span className="text-white font-bold">
                            {" "}
                            50% of the 12 Points
                        </span>
                    </p>
                    <ul className="flex flex-col pl-8">
                        <li className="list-disc">
                            For the tenth deal and beyond.
                        </li>
                        <li className="list-disc">
                            Affiliates earn{" "}
                            <span className="font-bold">50%</span> of the
                            available commission points per deal.
                        </li>
                        <li className="list-disc">
                            Applied retroactively to all deals closed in the
                            month.
                        </li>
                    </ul>
                </div>
                <p>
                    The 3 commission structures are designed to incentivize
                    higher volumes of successful deals within a monthly period.{" "}
                </p>
            </div>
            <div className="flex  gap-8  w-full pb-4">
                <div
                    className="flex items-center p-1 pl-2  bg-yellow-300 text-gray-600 rounded-md cursor-pointer"
                    onClick={() => dispatch(setpage(2))}
                >
                    <p>Next</p> <MdOutlineNavigateNext className="text-3xl" />
                </div>
            </div>
        </div>
    );
};

export default PageOne;
