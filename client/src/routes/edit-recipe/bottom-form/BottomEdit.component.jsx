import PhotosCreate from "../../create-recipe/bottom-form/PhotosCreate.component";
import EachPhotoCreate from "../../create-recipe/bottom-form/EachPhoto.component";
import React from "react";
import PropTypes from "prop-types";

// prettier-ignore
const BottomEdit = ({ setPhotos, photos }) => {
  const addNewPhotos = (photo) => {
    setPhotos((prev) => [...prev, photo]);
  };
  return (
    <>
      {/* To Create the photo */}
      <PhotosCreate
        images={photos}
        addNewImage={addNewPhotos}
      />
      <EachPhotoCreate images={photos} addNewImage={addNewPhotos} setImages={setPhotos}/>
    </>
  );
};
BottomEdit.propTypes = {
  setPhotos: PropTypes.func.isRequired,
  photos: PropTypes.array,
};

export default BottomEdit;
