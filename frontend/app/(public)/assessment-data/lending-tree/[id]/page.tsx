import React from "react";
import LendingTree from "./LendingTree";

const page = (props: any) => {
  console.log("props", props);

  return (
    <>
      {/* <LendingTree id={props.params.id} /> */}

      <LendingTree id={props.params.id} />
    </>
  );
};

export default page;
