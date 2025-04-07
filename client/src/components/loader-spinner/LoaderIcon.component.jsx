import { LoaderDiv, LoaderContainer } from "./loader.styles";
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
