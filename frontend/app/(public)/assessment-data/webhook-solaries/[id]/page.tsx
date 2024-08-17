import React from "react";
import WebhookSolaries from "./WebhookSolaries";

const page = (props: any) => {
    return <WebhookSolaries id={props.params.id} />;
};

export default page;
