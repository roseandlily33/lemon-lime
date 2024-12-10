import PhotosCreate from "../../create-recipe/bottom-form/PhotosCreate.component";
import EachPhotoCreate from "../../create-recipe/bottom-form/EachPhoto.component";
import React from "react";
import PropTypes from "prop-types";

const BottomEdit = ({ images, setImages, setPhotos, photos }) => {
  const addNewImage = (img) => {
    setImages((prev) => [...prev, img]);
  };
  const addNewPhotos = (photo) => {
    setPhotos((prev) => [...prev, photo]);
  };
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
  setImages: PropTypes.func.isRequired,
  setPhotos: PropTypes.func.isRequired,
  photos: PropTypes.array.isRequired,
};

export default BottomEdit;
