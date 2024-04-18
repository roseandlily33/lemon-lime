import { useState } from "react";

const SinglePhoto = ({images, onChange, maxNumber}) => {
    const onImageRemove = (e) => {
        e.preventDefault();
        console.log('Event', e)
    }
    return (
        <>
        <button>Click or Drop here</button>
        <div key={1} className="image-item">
        {images? <img src={images['data_url']} alt="" width="100" /> : null}
        <div className="image-options">
          {/* <button onClick={() => onImageUpdate(image)}>Update</button> */}
          <button className="secondaryButton" onClick={(e) => onImageRemove(e)}>Remove</button>
        </div>
      </div>
      </>
      );
}
 
export default SinglePhoto;