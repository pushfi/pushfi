import React from "react";
import Midasfunding from "./MidasFunding";

const page = (props: any) => {
    return <Midasfunding id={props.params.id} />;
};

export default page;
