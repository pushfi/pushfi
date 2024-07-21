import React from "react";

const Header = () => {
    return (
        <div className="flex justify-center">
            <div className="flex container p-4 text-white items-center">
                <div className="flex items-center">
                    <h1 className="font-bold text-3xl">
                        Ripe<span className="text-sky-500">funding</span>
                    </h1>
                </div>
                {/* <div className="flex grow font-semibold items-center justify-end">
                    contact us: +254769301113
                </div> */}
            </div>
        </div>
    );
};

export default Header;
