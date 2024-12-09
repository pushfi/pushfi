"use client";

import { useAppSelector } from "@/redux/hooks";

const ScrollProvider = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    const scrollSate = useAppSelector(
        (state: any) => state.publicStates.scroll
    );

    return (
        <div className={`${!scrollSate ? "no-scroll" : "null"} `}>
            {children}
        </div>
    );
};

export default ScrollProvider;
