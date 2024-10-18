"use client";
import { useFetchSmsListQuery } from "@/redux/slices/admin/adminApiSlice";
import Image from "next/image";
import { notFound } from "next/navigation";
import React from "react";

const SmsList = () => {
    // fetch user

    const { data, error, isFetching, isLoading } = useFetchSmsListQuery(null);

    if (isFetching) {
        return (
            <div className="w-full h-screen flex justify-center items-center">
                please wait
            </div>
        );
    }
    function convertToDate(inputDate: any): string {
        const date = new Date(inputDate);
        const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are 0-based
        const day = String(date.getDate()).padStart(2, "0");
        const year = date.getFullYear();

        return `${month}/${day}/${year}`;
    }

    if (error) {
        return notFound();
    }
    return (
        <div className="flex justify-center bg-gray-100 min-h-screen">
            <div className="flex w-full lg:container flex-col">
                <div className="flex p-4">
                    <Image
                        src="/images/logo.png"
                        alt=""
                        width={500}
                        height={500}
                        className="w-36"
                    />
                </div>
                <div className="flex p-4 bg-white rounded-[0.5rem] flex-col text-gray-700 gap-6">
                    <h3 className="font-bold text-xl">Sms List</h3>
                    <div className="flex flex-col w-full gap-4">
                        <div className="flex bg-gray-200 rounded-[0.5rem] p-2 font-semibold text-sm w-full">
                            <p className="w-[20%]">Date</p>
                            <p className="w-[20%]">Name</p>
                            <p className="w-[20%]">Email</p>
                            <p className="w-[20%]">Phone</p>
                            <p className="w-[20%]">Broker</p>
                        </div>
                        {data?.map(
                            (sms: {
                                fundindDataId: string;
                                type: string;
                                email: string;
                                name: string;
                                tMinRange: string;
                                tMaxRange: string;
                                tInterest: string;
                                cMinRange: string;
                                cMaxRange: string;
                                cInterest: string;
                                transUnion: string;
                                UnsecuredDebtBalance: string;
                                revolvingDebtBalance: string;
                                revolvingAccounts: string;
                                totalMonthlyPayments: string;
                                phone: string;
                                createdAt?: string;
                                updatedAt?: string;
                            }) => {
                                return (
                                    <div
                                        className="flex  rounded-[0.5rem] p-2 font-semibold text-sm w-full text-gray-500 hover:bg-gray-100"
                                        key={sms.fundindDataId}
                                    >
                                        <p className="w-[20%]">
                                            {convertToDate(sms?.createdAt)}
                                        </p>
                                        <p className="w-[20%]">{sms?.name}</p>
                                        <p className="w-[20%]">{sms?.email}</p>
                                        <p className="w-[20%]">{sms?.phone}</p>
                                        <p className="w-[20%] ">{sms?.type}</p>
                                    </div>
                                );
                            }
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SmsList;
