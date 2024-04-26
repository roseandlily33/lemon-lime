import { ModalContainer } from "./modal.styles";

const Modal = ({children, onClose}) => {

    return (  
        <ModalContainer className="boxShadow">
           <div className="modal slit-in-vertical">
            {children}
           <button onClick={onClose}>Close</button>
           </div>
        </ModalContainer>
    );
}
 
export default Modal;