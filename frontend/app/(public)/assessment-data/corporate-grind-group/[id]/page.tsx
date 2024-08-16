import React from "react";
import CorpaorateGrind from "./CorpaorateGrind";

const page = (props: any) => {
    return <CorpaorateGrind id={props.params.id} />;
};

export default page;
