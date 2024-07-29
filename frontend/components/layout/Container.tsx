import React from "react";

const Container = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    return <div className="max-w-[1400px] px-4 w-full ">{children}</div>;
};

export default Container;
