//import { useState } from "react";
import { ModalContainer } from "../modal.styles";

const ErrorModal = ({children, onClose}) => {

    return (  
        <ModalContainer >
           <div className="modal slit-in-vertical">
            {children}
           <button onClick={onClose}>Close</button>
           </div>
        </ModalContainer>
    );
}
 
export default ErrorModal;