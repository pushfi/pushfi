import React from "react";
import FundingRequest from "./FundingRequest";

const page = (props: any) => {
    return <FundingRequest id={props.params.id} />;
};

export default page;
