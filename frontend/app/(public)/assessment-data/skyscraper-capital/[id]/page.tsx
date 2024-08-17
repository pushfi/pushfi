import React from "react";
import Skyscraper from "./Skyscraper";

const page = (props: any) => {
    return <Skyscraper id={props.params.id} />;
};

export default page;
