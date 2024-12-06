import { LoaderDiv } from "./Loader.styles";
import React from "react";

const Loader = () => {
  return (
    <LoaderDiv>
      <div className="lds-hourglass"></div>
    </LoaderDiv>
  );
};

export default Loader;
