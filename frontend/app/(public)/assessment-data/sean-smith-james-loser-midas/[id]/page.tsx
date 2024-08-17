import React from "react";
import SeanSmith from "./SeanSmith";

const page = (props: any) => {
    return <SeanSmith id={props.params.id} />;
};

export default page;
