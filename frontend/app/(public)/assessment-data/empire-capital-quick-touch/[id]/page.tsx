import React from "react";
import EmpireCapital from "./EmpireCapital";

const page = (props: any) => {
    return <EmpireCapital id={props.params.id} />;
};

export default page;
