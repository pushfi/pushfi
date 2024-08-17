import React from "react";
import Ventureboost from "./Ventureboost";

const page = (props: any) => {
    return <Ventureboost id={props.params.id} />;
};

export default page;
