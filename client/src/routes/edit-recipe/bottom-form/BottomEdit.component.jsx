import PhotosCreate from "../../create-recipe/bottom-form/PhotosCreate.component";
import EachPhotoCreate from "../../create-recipe/bottom-form/EachPhoto.component";
import React from "react";
import PropTypes from "prop-types";

// prettier-ignore
const BottomEdit = ({ setPhotos, photos }) => {
  console.log('PHOTOS', photos);
  const addNewPhotos = (photo) => {
    setPhotos((prev) => [...prev, photo]);
  };
  return (
    <>
      {/* To Create the photo */}
      <PhotosCreate
        images={photos}
        addNewImage={addNewPhotos}
        // photos={photos}
        // addNewPhotos={addNewPhotos}
      />
      <EachPhotoCreate images={photos} addNewImage={addNewPhotos} setImages={setPhotos}/>
    </>
  );
};
BottomEdit.propTypes = {
  // images: PropTypes.array.isRequired,
  // setImages: PropTypes.func.isRequired,
  setPhotos: PropTypes.func.isRequired,
  photos: PropTypes.array.isRequired,
};

export default BottomEdit;
