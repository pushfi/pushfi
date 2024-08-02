import React from "react";
import MidasId from "./MidasId";

const page = ({ params }: { params: any }) => {
    return <MidasId id={params.id} />;
};

export default page;
