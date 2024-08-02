"use client";

import React from "react";
import Header from "./header/Header";
import Hero from "./hero/Hero";
import Container from "@/components/layout/Container";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { setpage } from "@/redux/slices/midas/midasSlice";
import Loadscreen from "@/components/loadscreen/Loadscreen";

const MidasBranding = () => {
    const activepage = useAppSelector((state) => state.midasStates.page);
    const dispatch = useAppDispatch();
    const submit_loading = useAppSelector(
        (state) => state.publicStates.loading
    );

    return (
        <>
            {submit_loading && <Loadscreen />}
            <div className="min-h-screen bg-[#141c4d] flex-coll">
                <div className="flex flex-col w-full fixed bg-[#141c4d]">
                    <Header />
                    <div className="flex justify-center mt-2">
                        <Container>
                            <div className="flex gap-4">
                                <div
                                    className="flex gap-1 cursor-pointer items-center"
                                    onClick={() => dispatch(setpage(1))}
                                >
                                    <div
                                        className={`flex h-5 w-5 border-2 ${
                                            activepage === 1
                                                ? "border-yellow-300 text-yellow-300"
                                                : "border-white text-white"
                                        } rounded-full  items-center justify-center text-sm`}
                                    >
                                        1
                                    </div>
                                    <p
                                        className={`${
                                            activepage === 1
                                                ? "text-yellow-300"
                                                : "text-white"
                                        }`}
                                    >
                                        page1
                                    </p>
                                </div>
                                <div
                                    className="flex gap-1 cursor-pointer items-center"
                                    onClick={() => dispatch(setpage(2))}
                                >
                                    <div
                                        className={`flex h-5 w-5 border-2 ${
                                            activepage === 2
                                                ? "border-yellow-300 text-yellow-300"
                                                : "border-white text-white"
                                        } rounded-full  items-center justify-center text-sm`}
                                    >
                                        2
                                    </div>
                                    <p
                                        className={`${
                                            activepage === 2
                                                ? "text-yellow-300"
                                                : "text-white"
                                        }`}
                                    >
                                        page2
                                    </p>
                                </div>
                                <div
                                    className="flex gap-1 cursor-pointer items-center"
                                    onClick={() => dispatch(setpage(3))}
                                >
                                    <div
                                        className={`flex h-5 w-5 border-2 ${
                                            activepage === 3
                                                ? "border-yellow-300 text-yellow-300"
                                                : "border-white text-white"
                                        } rounded-full  items-center justify-center text-sm`}
                                    >
                                        3
                                    </div>
                                    <p
                                        className={`${
                                            activepage === 3
                                                ? "text-yellow-300"
                                                : "text-white"
                                        }`}
                                    >
                                        page3
                                    </p>
                                </div>
                            </div>
                        </Container>
                    </div>
                </div>
                <Hero />
            </div>
        </>
    );
};

export default MidasBranding;
