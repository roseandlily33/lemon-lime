import { LoaderDiv, LoaderContainer } from "./Loader.styles";
import React from "react";

const Loader = () => {
  return (
    <LoaderContainer>
      <LoaderDiv>
        <div className="lds-hourglass"></div>
      </LoaderDiv>
    </LoaderContainer>
  );
};

export default Loader;
