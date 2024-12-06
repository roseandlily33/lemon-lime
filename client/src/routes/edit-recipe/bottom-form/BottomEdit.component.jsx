import PhotosCreate from "../../create-recipe/bottom-form/PhotosCreate.component";
import EachPhotoCreate from "../../create-recipe/bottom-form/EachPhoto.component";
import React from "react";
import PropTypes from "prop-types";

const BottomEdit = ({ images, addNewImage, addNewPhotos, photos }) => {
  return (
    <>
      <PhotosCreate
        images={images}
        addNewImage={addNewImage}
        addNewPhotos={addNewPhotos}
      />
      <EachPhotoCreate photos={photos} />
    </>
  );
};
BottomEdit.propTypes = {
  images: PropTypes.array.isRequired,
  addNewImage: PropTypes.func.isRequired,
  addNewPhotos: PropTypes.func.isRequired,
  photos: PropTypes.array.isRequired,
};

export default BottomEdit;
