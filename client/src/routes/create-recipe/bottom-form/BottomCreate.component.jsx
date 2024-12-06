import EachPhotoCreate from "./EachPhoto.component";
import PhotosCreate from "./PhotosCreate.component";
import PropTypes from "prop-types";
import React from "react";

const BottomCreate = ({ images, addNewImage, addNewPhotos, photos }) => {
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
BottomCreate.propTypes = {
  images: PropTypes.array.isRequired,
  addNewImage: PropTypes.func.isRequired,
  addNewPhotos: PropTypes.func.isRequired,
  photos: PropTypes.array.isRequired,
};

export default BottomCreate;
