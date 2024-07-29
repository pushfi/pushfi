import React from "react";
import pageImage from "@/assets/images/midasPage.png";
import Image from "next/image";
import { MdNavigateBefore } from "react-icons/md";
import { MdOutlineNavigateNext } from "react-icons/md";
import { useAppDispatch } from "@/redux/hooks";
import { setpage } from "@/redux/slices/midas/midasSlice";

const PageTwo = () => {
    const dispatch = useAppDispatch();
    return (
        <div className="flex justify-center flex-col gap-4 items-center my-8 snap-start">
            <Image src={pageImage} alt="" className="lg:w-[70%] rounded-md" />
            <div className="flex text-gray-200 flex-col gap-4 w-full">
                <p>
                    Click <span className="font-bold">&quot;Next&quot;</span> to
                    proceed with the Affiliate/Loan Agent Agreement.
                </p>
                <div className="flex text-white gap-8  w-full">
                    <div
                        className="flex items-center p-1 pr-2 border-2 border-yellow-300 text-yellow-300 rounded-md cursor-pointer"
                        onClick={() => dispatch(setpage(1))}
                    >
                        <MdNavigateBefore className="text-3xl" />
                        <p>Back</p>
                    </div>
                    <div
                        className="flex items-center p-1 pl-2  bg-yellow-300 text-gray-600 rounded-md cursor-pointer"
                        onClick={() => dispatch(setpage(3))}
                    >
                        <p>Next</p>{" "}
                        <MdOutlineNavigateNext className="text-3xl" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PageTwo;
