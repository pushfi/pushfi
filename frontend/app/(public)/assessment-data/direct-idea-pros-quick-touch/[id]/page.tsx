import React from "react";
import DirectIdeaPro from "./DirectIdeaPros";

const page = (props: any) => {
    return <DirectIdeaPro id={props.params.id} />;
};

export default page;
