import React from "react";
import { MdOutlineNavigateNext, MdOutlineStar } from "react-icons/md";

const Pageone = ({ setpage }: { setpage: any }) => {
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
        <div className="flex text-white flex-col items-center mt-8">
            <form className="flex flex-col max-w-[40rem] w-full gap-4">
                <p>
                    This form will be used to perform a series of Soft-Pull
                    Assessments toward multiple Business and or Personal Credit
                    Lines. These may include Term Loans, Credit Cards & Lines of
                    Credit.
                </p>
                <div className="flex gap-4 w-full ">
                    <div className="flex flex-col w-full gap-1">
                        <p className="flex text-gray-300">
                            How much is your Funding Request{" "}
                            <span className="text-red-500">
                                <MdOutlineStar className="text-sm" />
                            </span>
                        </p>
                        <input className="h-11 bg-gray-100/20 rounded-md px-2 outline-none focus:border-gray-200/50 focus:border-[1px]" />
                        <p className="italic text-[0.8rem] text-gray-300">
                            Minimum Loan Request ={" "}
                            <span className="font-bold text-gray-50">
                                $25,000
                            </span>
                        </p>
                    </div>
                    <div className="flex flex-col w-full gap-1">
                        <p className="flex text-gray-300">
                            Referral Source
                            <span className="text-red-500">
                                <MdOutlineStar className="text-sm" />
                            </span>
                        </p>
                        <input
                            type="email"
                            className="h-11 bg-gray-100/20 rounded-md px-2 outline-none focus:border-gray-200/50 focus:border-[1px]"
                        />
                        <p className="italic text-[0.8rem] text-gray-300">
                            Please enter the name of the Person or Company that
                            has referred you to Midas Financial.
                        </p>
                    </div>
                </div>
                <div className="flex flex-col w-full gap-1">
                    <p className="flex text-gray-300">
                        Detailed Use of Funds
                        <span className="text-red-500">
                            <MdOutlineStar className="text-sm" />
                        </span>
                    </p>
                    <textarea className=" bg-gray-100/20 rounded-md px-2 outline-none focus:border-gray-200/50 focus:border-[1px] h-20   py-1" />
                    <p className="italic text-[0.8rem] text-gray-300">
                        Being as specific and detailed as possible in describing
                        the use of funds,{" "}
                        <span className="font-bold text-gray-50">
                            {" "}
                            including a cost breakdown, is highly beneficial.
                        </span>{" "}
                        It promotes transparency, minimizes misunderstandings,
                        and allows all parties involved to have a comprehensive
                        understanding of how the funds will be utilized for the
                        specific need.
                    </p>
                </div>
                <div className="flex flex-col w-full gap-1">
                    <p className="flex text-gray-300">
                        I am seeking Funding from the following Loan Products
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
                <div className="flex  gap-8  w-full pb-4">
                    <div className="flex items-center p-1 pl-2  bg-yellow-300 text-gray-600 rounded-md cursor-pointer" onClick={()=>setpage(2)}>
                        <p>Next</p>{" "}
                        <MdOutlineNavigateNext className="text-3xl" />
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Pageone;
