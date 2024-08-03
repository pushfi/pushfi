"use client";
import Container from "@/components/layout/Container";
import React, { useState } from "react";
import logoImage from "@/assets/images/midaslogo2.png";
import Image from "next/image";
import Pageone from "./page-one/Pageone";
import Pagetwo from "./page-two/Pagetwo";
import Pagethree from "./page-three/Pagethree";
import { useFetchMidasFormsQuery } from "@/redux/slices/midas/midasApiSlice";
import { notFound } from "next/navigation";

const MidasId = ({ id }: { id: any }) => {
    const [page, setpage] = useState(3);
    const pages = [1, 2, 3];

    const { data, refetch, error, isError, isFetching, isLoading } =
        useFetchMidasFormsQuery({ id });

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
        <div className="flex flex-col bg-[#141c4d] min-h-screen">
            <div className="flex bg justify-center py-4  lg:py-8 border-b-[1px] border-b-gray-300/20 pb-4">
                <Container>
                    <div className="flex flex-col lg:flex-row text-center lg:text-left justify-center text-gray-200 items-center gap-4">
                        <img
                            src={`${process.env.NEXT_PUBLIC_BACKEND_URL}/backend/public/photo-display/${data?.logoimage}`}
                            alt=""
                            className="w-[4rem] lg:w-[8rem] h-fit"
                        />{" "}
                        <div className="flex flex-col">
                            <h1 className="text-lg text-yellow-300 font-semibold max-w-[300px]">
                                FIND OUT IN THREE MINUTES HOW MUCH WE CAN GET
                                YOU
                            </h1>
                            <h2>No hard credit inquery</h2>
                            <h2>Instant pre-approval</h2>
                        </div>
                    </div>
                </Container>
            </div>
            <div className="flex justify-center">
                <Container>
                    <div className="flex flex-col items-center w-full">
                        <div className="flex w-full max-w-[40rem] pt-[1rem] justify-around">
                            {pages.map((pag) => {
                                return (
                                    <div
                                        className={`flex ${
                                            pag === page
                                                ? "text-yellow-300"
                                                : "text-gray-100"
                                        } items-center gap-1 cursor-pointer`}
                                        key={pag}
                                        onClick={() => setpage(pag)}
                                    >
                                        <div
                                            className={`flex border-[0.2rem] ${
                                                pag === page
                                                    ? "border-yellow-300"
                                                    : "border-gray-100"
                                            }  h-5 w-5 justify-center items-center rounded-full text-[0.8rem]`}
                                        >
                                            <p>{pag}</p>
                                        </div>
                                        <p>page{pag}</p>
                                    </div>
                                );
                            })}
                        </div>
                        {page === 1 && <Pageone setpage={setpage} />}
                        {page === 2 && <Pagetwo setpage={setpage} />}
                        {page === 3 && <Pagethree setpage={setpage} />}
                    </div>
                </Container>
            </div>
        </div>
    );
};

export default MidasId;
