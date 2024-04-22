import { useEffect, useRef, useState } from "react";
import Modal from "../../../../components/Modal/Model.component";
import { useNavigate } from "react-router-dom";

const SinglePhoto = ({images, addNewImage, addNewPhotos}) => {
    const[isOpen, setIsOpen] = useState(false);
    //const[displayImages, setDisplayImages] = useState();
    const navigate = useNavigate();
    const cloudinaryRef = useRef();
    const widgetRef = useRef();

    useEffect(() => {
      cloudinaryRef.current = window.cloudinary;
      widgetRef.current = cloudinaryRef.current.createUploadWidget({
        cloudName: 'dql7lqwmr',
        uploadPreset: 'lemon_lime_preset'
      }, function(error, result){
        if(result.event === 'success'){
          let newImage = {publicId: result.info.public_id};
          let newImageURL = result.info.url;
          //console.log('Result Success for', newImage);
          addNewImage(newImage);
          addNewPhotos(newImageURL)
          //console.log('After images update', images);
        } else if(error){
          setIsOpen(true);
        } 
      });
    }, [images, addNewImage, addNewPhotos])
    
    return (
        <>
        {isOpen && (
         <Modal onClose={() => setIsOpen(false)}>
           <h3>An error has occured trying to submit your pictures</h3>
           <button onClick={() => navigate('/user/home')}>Go Home</button>
         </Modal>
       )}
        <div key={1} className="image-item">
        <div className="image-options">
          <button onClick={(e) => {
            e.preventDefault();
            widgetRef.current.open();
          }} style={{marginBlock: '1em'}}>Upload Images</button>
        </div>
      </div>
      </>
      );
}
 
export default SinglePhoto;