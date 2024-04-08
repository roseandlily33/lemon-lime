import { ModalContainer } from "./modal.styles";

const Modal = ({children, onClose}) => {
    console.log('MODAL', children)
    return (  
        <ModalContainer >
           <div className="modal slit-in-vertical">
            {children}
           <button onClick={onClose}>Close</button>
           </div>
        </ModalContainer>
    );
}
 
export default Modal;